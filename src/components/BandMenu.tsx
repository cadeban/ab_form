import { FC } from 'react';
import { Menu } from 'antd';
import { Band, Bands } from '../types';

type BandMenuProps = {
  bands: Bands;
  onClick: (band: Band) => void;
};

export const BandMenu: FC<BandMenuProps> = ({ bands, onClick }) => {
  const items = bands.map((b) => ({ label: b.name, key: b.name }));
  return (
    <Menu
      theme="dark"
      onClick={(e) => onClick(bands.find(({ name }) => name === e.key)!)}
      defaultSelectedKeys={[bands[0].name]}
      mode="horizontal"
      items={items}
    />
  );
};
