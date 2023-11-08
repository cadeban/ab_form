import { FC } from 'react';
import { Typography, Space } from 'antd';

type BandHeaderProps = {
  name: string;
  date: number;
  location: string;
};

export const BandHeader: FC<BandHeaderProps> = ({ name, date, location }) => (
  <Space direction="vertical">
    <Typography.Title>{name}</Typography.Title>
    <Typography.Text>{new Date(date).toDateString()}</Typography.Text>
    <Typography.Text>{location}</Typography.Text>
  </Space>
);
