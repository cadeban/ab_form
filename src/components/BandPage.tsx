import { FC } from 'react';
import { Typography, Image, Row, Col, Space } from 'antd';

type BandPageProps = {
  name: string;
  description_blurb: string;
  imgUrl: string;
};

export const BandPage: FC<BandPageProps> = ({
  name,
  description_blurb,
  imgUrl,
}) => {
  return (
    <Space direction="vertical" size="middle">
      <Row justify="center" align="middle">
        <Col span={10}>
          <Image width={200} src={imgUrl} alt={`image of band ${name}`} />
        </Col>
      </Row>
      <Typography.Paragraph>
        <div dangerouslySetInnerHTML={{ __html: description_blurb }} />
      </Typography.Paragraph>
    </Space>
  );
};
