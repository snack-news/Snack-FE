import React, { useState, useMemo, useCallback } from 'react';
import { oc } from 'ts-optchain';

import { DrawerOptions } from './DrawerOptions';
import { Label } from './Label';
import { Option } from './Option';

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
  const [showOptions, setShowOptions] = useState(false);

  const closeHandler = useCallback(() => setShowOptions(false), []);
  const clickOptionHandler = useCallback(
    (option: Option) => {
      if (onClickOption) onClickOption(option);

      setShowOptions(false);
    },
    [onClickOption]
  );

  const selectedOption = useMemo(() => {
    const newOption = options.find(o => o.value === value);
    return newOption;
  }, [options, value]);

  return (
    <>
      <Label onClick={() => setShowOptions(true)} style={labelStyle}>
        {oc(selectedOption).label('선택된 값이 없습니다')}
      </Label>

      {showOptions && (
        <DrawerOptions
          header={header}
          options={options}
          value={oc(selectedOption).value()}
          onClose={closeHandler}
          onClickOption={clickOptionHandler}
          onClickLayer={closeHandler}
        />
      )}
    </>
  );
};
