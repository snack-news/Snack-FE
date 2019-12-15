import React from 'react';

import { Header } from './Header';
import { Options } from './Options';

import { Option } from './Options/OptionComponent';

import { HorizontalDivider } from '~nclient/view/atoms/Figures/HorizontalDivider';
import { BottomDrawer } from '~nclient/view/components/Drawer';

interface Props {
  header: string;
  onClose?: () => void;
  onClickOption?: (option: Option) => void;
  options: Option[];
  value?: string;
  onClickLayer?: () => void;
}

export const DrawerOptions: React.FC<Props> = ({
  header,
  onClose,
  onClickOption,
  options,
  value,
  onClickLayer,
}) => (
  <BottomDrawer onClickLayer={onClickLayer}>
    <Header onClose={onClose}>{header}</Header>
    <HorizontalDivider />
    <Options options={options} value={value} onClickOption={onClickOption} />
  </BottomDrawer>
);
