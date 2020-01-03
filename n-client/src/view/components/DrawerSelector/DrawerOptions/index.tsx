import React, { FC } from 'react';

import { Header } from './Header';
import { Options } from './Options';
import { BottomDrawer } from './BottomDrawer';
import { IOption } from '../IOption';

import { HorizontalDivider } from '~nclient/view/components/HorizontalDivider';

interface IProps {
  title: string;
  onClose?: () => void;
  onClickOption?: (option: IOption) => void;
  options: IOption[];
  selectedValue?: string;
  onClickLayer?: () => void;
}

export const DrawerOptions: FC<IProps> = ({
  title,
  onClose,
  onClickOption,
  options,
  selectedValue,
}) => (
  <BottomDrawer>
    <Header onClose={onClose}>{title}</Header>
    <HorizontalDivider />
    <Options options={options} selectedValue={selectedValue} onClickOption={onClickOption} />
  </BottomDrawer>
);
