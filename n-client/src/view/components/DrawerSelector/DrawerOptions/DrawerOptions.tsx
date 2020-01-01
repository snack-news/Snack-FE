import React, { FC } from 'react';

import { Header } from './Header';
import { Options } from './Options';
import { BottomDrawer } from './BottomDrawer';
import { Option } from '../Option';

import { HorizontalDivider } from '~nclient/view/components/HorizontalDivider';

interface Props {
  header: string;
  onClose?: () => void;
  onClickOption?: (option: Option) => void;
  options: Option[];
  value?: string;
  onClickLayer?: () => void;
}

export const DrawerOptions: FC<Props> = ({
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
