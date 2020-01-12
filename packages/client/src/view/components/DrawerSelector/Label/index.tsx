import React, { FC } from 'react';
import styled from 'styled-components';

import { IOption } from '../IOption';
import { useSelectedLabel } from './useSelectedLabel';
import { DownArrowButton } from './DownArrowButton';

import { BLACK } from '~src/constants/colors';

interface IProps {
  onClick: () => void;
  style?: React.CSSProperties;

  options: IOption[];
  selectedValue?: string;
}

export const Label: FC<IProps> = ({ onClick, style, options, selectedValue }) => {
  const selectedLabel = useSelectedLabel({ options, selectedValue });

  return (
    <DownArrowButton
      onClick={onClick}
      style={style}
      frontLabel={<LabelWrapper>{selectedLabel}</LabelWrapper>}
    />
  );
};

const LabelWrapper = styled.span`
  font-size: 17px;
  height: 17px;
  line-height: 17px;

  font-weight: 600;

  color: ${BLACK};
`;
