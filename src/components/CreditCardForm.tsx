import { FC } from 'react';
import { Form, Typography, Row, Input, DatePicker, Col } from 'antd';
import { validationRules } from './validation';

const DEBOUNCE = 1000;
const EXPIRY_FORMAT = 'MM/YYYY';

export const CreditCardForm: FC = () => (
  <>
    <Form.Item
      label="First Name"
      name={['cc', 'firstname']}
      colon={false}
      validateDebounce={DEBOUNCE}
      rules={validationRules.firstname}
    >
      <Input placeholder="First Name" />
    </Form.Item>

    <Form.Item
      label="Last Name"
      name={['cc', 'lastname']}
      colon={false}
      validateDebounce={DEBOUNCE}
      rules={validationRules.firstname}
    >
      <Input placeholder="Last Name" />
    </Form.Item>

    <div style={{ marginBottom: '1rem' }}>
      <Typography.Text strong>Payment Details</Typography.Text>
    </div>

    <Form.Item
      label="Card Number"
      name={['cc', 'cardnumber']}
      colon={false}
      validateDebounce={DEBOUNCE}
      rules={validationRules.cardNumber}
    >
      <Input placeholder="0000 0000 0000 0000" maxLength={19} />
    </Form.Item>

    <Row>
      <Col span={12}>
        <Form.Item
          label="Expiry Date"
          name={['cc', 'expiry']}
          colon={false}
          validateDebounce={DEBOUNCE}
          rules={validationRules.expiry}
        >
          <DatePicker format={EXPIRY_FORMAT} picker="month" />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          labelAlign="right"
          label="CVV"
          name={['cc', 'cvv']}
          colon={false}
          validateDebounce={DEBOUNCE}
          rules={validationRules.cvv}
        >
          <Input placeholder="CVV" maxLength={3} />
        </Form.Item>
      </Col>
    </Row>
  </>
);
