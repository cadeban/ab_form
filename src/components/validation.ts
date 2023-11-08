import { Rule } from 'antd/es/form';

export const validationRules: Record<string, Rule[]> = {
  firstname: [{ required: true, message: 'First name is a required field' }],
  lastname: [{ required: true, message: 'Last name is a required field' }],
  cvv: [
    { required: true, message: 'CVV is a required field' },
    { len: 3, message: 'Must be 3 digits' },
    { pattern: new RegExp('^[0-9]*$'), message: 'Must be numbers only' },
  ],
  cardNumber: [
    { required: true, message: 'Card number is a required field' },
    { min: 13, message: 'Must be a minimum of 13 digits' },
    { max: 19, message: 'Must be a maximum of 19 digits' },
    { pattern: new RegExp('^[0-9]*$'), message: 'Must be numbers only' },
  ],
  expiry: [{ required: true, message: 'Expiration date is a required field' }],
};
