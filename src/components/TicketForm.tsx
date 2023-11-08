import { FC } from 'react';
import { Form, List, Typography, InputNumber, Row, Col, Divider } from 'antd';
import { Tickets } from '../types';
import { USDollar } from '../utils';

type CreditCardFormProps = {
  tickets: Tickets;
  total: number;
  isTicketFormValid: boolean;
};

export const TicketForm: FC<CreditCardFormProps> = ({
  tickets,
  total,
  isTicketFormValid,
}) => (
  <>
    <Typography.Title level={3}>Select Tickets</Typography.Title>
    <List
      itemLayout="horizontal"
      dataSource={tickets}
      renderItem={(item, _) => (
        <List.Item>
          <Col span={20}>
            <List.Item.Meta
              title={item.name}
              description={
                <>
                  <div>{item.description}</div>
                  <Typography>
                    <label htmlFor={item.type}>{`$${item.cost / 100}`}</label>
                  </Typography>
                </>
              }
            />
          </Col>
          <Col span={4}>
            <Form.Item
              name={['ticket', item.type]}
              initialValue={0}
              colon={false}
            >
              <InputNumber min={0} max={10} controls={true} name={item.type} />
            </Form.Item>
          </Col>
        </List.Item>
      )}
    />
    {!isTicketFormValid && (
      <Typography.Text type="danger">Please select a ticket</Typography.Text>
    )}
    <Divider />
    <Row>
      <Col span={21}>
        <Typography.Text strong>Total</Typography.Text>
      </Col>
      <Col span={3}>
        <Typography.Text strong>{USDollar.format(total)}</Typography.Text>
      </Col>
    </Row>
  </>
);
