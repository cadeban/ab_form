import bands from './assets/bands.json';
import { Card, Col, Divider, Layout, Row } from 'antd';
import { useState, FC } from 'react';
import { Band, Bands } from './types.ts';
import { BandForm } from './components/BandForm';
import { BandHeader } from './components/BandHeader';
import { BandMenu } from './components/BandMenu';
import { BandPage } from './components/BandPage';
import './App.css';

const App: FC = () => {
  const [band, setBand] = useState<Band>(bands[0] as Band);

  const handleSetBand = (band: Band) => {
    setBand(band);
  };

  return (
    <Layout>
      <Layout.Header>
        <BandMenu bands={bands as Bands} onClick={handleSetBand} />
      </Layout.Header>
      <Layout.Content className="content-padding">
        <BandHeader
          name={band.name}
          date={band.date}
          location={band.location}
        />
        <Divider />
        <Row gutter={{ xs: 0, sm: 8, md: 24 }} className="content-padding">
          <Col span={12} sm={12} xs={24}>
            <BandPage
              name={band.name}
              description_blurb={band.description_blurb}
              imgUrl={band.imgUrl}
            />
          </Col>
          <Col span={12} sm={12} xs={24}>
            <Card>
              <BandForm tickets={band.ticketTypes} />
            </Card>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default App;
