import { FC, useState, useMemo } from 'react';
import { Form, Divider, Button } from 'antd';
import { TicketForm } from './TicketForm';
import { CreditCardForm } from './CreditCardForm';
import { Tickets, FormData } from '../types';
import { mockPostToServer } from './../mockPostRequest';
import { Dayjs } from 'dayjs';

type BandFormTypes = {
  tickets: Tickets;
};

export const BandForm: FC<BandFormTypes> = ({ tickets }) => {
  const [total, setTotal] = useState<number>(0);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isTicketFormValid, setIsTicketFormValid] = useState<boolean>(true);

  const costs = useMemo(
    () =>
      tickets.reduce((accum: Record<string, number>, { cost, type }) => {
        accum[type] = cost;
        return accum;
      }, {}),
    [tickets]
  );

  const onFormFinish = async (values: FormData<Dayjs>) => {
    if (!total) {
      setIsTicketFormValid(false);
      return;
    }

    const data = {
      ...values,
      cc: { ...values.cc, expiry: values.cc.expiry.toISOString() },
    };
    try {
      setIsPending(true);
      await mockPostToServer(data);
      alert('Purchased! Enjoy the show!');
    } catch (e) {
      console.log('e', e);
      alert('uh oh, something went wrong');
    } finally {
      setIsPending(false);
    }
  };

  const onFormValuesChange = (_: any, values: FormData<Dayjs>) => {
    const newTotal =
      Object.entries(values.ticket).reduce((num: number, [type, quantity]) => {
        return num + costs[type] * quantity;
      }, 0) / 100;
    setTotal(newTotal);

    if (newTotal > 0) {
      setIsTicketFormValid(true);
    }
  };

  return (
    <Form
      disabled={isPending}
      labelCol={{ flex: '110px' }}
      labelAlign="left"
      labelWrap
      onFinish={onFormFinish}
      onValuesChange={onFormValuesChange}
    >
      <TicketForm
        tickets={tickets}
        total={total}
        isTicketFormValid={isTicketFormValid}
      />
      <Divider />
      <CreditCardForm />
      <Button htmlType="submit" loading={isPending} type="primary" block>
        Get Tickets
      </Button>
    </Form>
  );
};
