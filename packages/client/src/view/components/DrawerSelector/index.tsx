/* eslint-disable max-lines */
// TODO 코드 개선 필요 (너무 긴 라인수) (code bad smell)

import React, { FC, useCallback } from 'react';

import { DrawerOptions } from './DrawerOptions';
import { Label } from './Label';
import { IOption } from './IOption';
import { useShowOptions } from './useShowOptions';

import { Layer } from '~src/view/components/Layer';

interface IProps {
  options: IOption[];
  selectedValue?: string;
  onClickOption?: (option: IOption) => void;
  title: string;
}

export const DrawerSelector: FC<IProps> = ({ options, selectedValue, onClickOption, title }) => {
  const { isShowOptions, showOptions, hideOptions } = useShowOptions(false);

  const clickOptionHandler = useCallback(
    (option: IOption) => {
      if (onClickOption) onClickOption(option);

      hideOptions();
    },
    [hideOptions, onClickOption]
  );

  return (
    <>
      <Label onClick={showOptions} options={options} selectedValue={selectedValue} />

      {isShowOptions && (
        <>
          <Layer onClick={hideOptions} />
          <DrawerOptions
            title={title}
            options={options}
            selectedValue={selectedValue}
            onClose={hideOptions}
            onClickOption={clickOptionHandler}
          />
        </>
      )}
    </>
  );
};
