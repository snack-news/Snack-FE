import React, { useState, useMemo } from 'react';
import { oc } from 'ts-optchain';

import { DrawerOptions, Option } from './DrawerOptions';
import { Label } from './Label';

interface Props {
  options: Option[];
  value?: string;
  onChange?: (option: Option) => void;
  header: string;
  labelStyle?: React.CSSProperties;
}

export const DrawerSelector: React.FC<Props> = ({
  options,
  value,
  onChange,
  header,
  labelStyle,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const option = useMemo(() => {
    const newOption = options.find(o => o.value === value);
    return newOption;
  }, [options, value]);

  return (
    <>
      <Label onClick={() => setShowOptions(true)} style={labelStyle}>
        {oc(option).label('선택된 값이 없습니다')}
      </Label>

      {showOptions && (
        <DrawerOptions
          header={header}
          onClose={() => setShowOptions(false)}
          onClickOption={(...args) => {
            if (onChange) onChange(...args);
            setShowOptions(false);
          }}
          onClickLayer={() => setShowOptions(false)}
          options={options}
          value={oc(option).value()}
        />
      )}
    </>
  );
};
