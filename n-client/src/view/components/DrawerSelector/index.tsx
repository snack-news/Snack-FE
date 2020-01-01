/* eslint-disable max-lines */
// TODO 코드 개선 필요 (너무 긴 라인수) (code bad smell)

import React, { FC, useCallback } from 'react';
import { oc } from 'ts-optchain';

import { DrawerOptions } from './DrawerOptions';
import { Label } from './Label';
import { Option } from './Option';

import { useBooleanState } from '../../../hooks/useBooleanState';

import { useSelectedOption } from './useSelectedOption';

import { Layer } from '~nclient/view/components/Layer';

interface Props {
  options: Option[];
  value?: string;
  onClickOption?: (option: Option) => void;
  header: string;
  labelStyle?: React.CSSProperties;
}

export const DrawerSelector: FC<Props> = ({
  options,
  value,
  onClickOption,
  header,
  labelStyle,
}) => {
  const { state: isShowOptions, setTrue: showOptions, setFalse: hideOptions } = useBooleanState(
    false
  );

  const clickOptionHandler = useCallback(
    (option: Option) => {
      if (onClickOption) onClickOption(option);

      hideOptions();
    },
    [hideOptions, onClickOption]
  );

  const selectedOption = useSelectedOption({ options, value });

  return (
    <>
      <Layer onClick={hideOptions} />

      <Label onClick={showOptions} style={labelStyle}>
        {oc(selectedOption).label('선택된 값이 없습니다')}
      </Label>

      {isShowOptions && (
        <DrawerOptions
          header={header}
          options={options}
          value={oc(selectedOption).value()}
          onClose={hideOptions}
          onClickOption={clickOptionHandler}
        />
      )}
    </>
  );
};
