import React, { FC } from 'react';

import { LogoAnchor } from './LogoAnchor';
import { MenuAnchor } from './MenuAnchor';
import { BackAnchor } from './BackAnchor';

export type AnchorType = 'HOME' | 'BACK' | 'MENU';

interface IProps {
  type?: AnchorType;
}

export const Anchors: FC<IProps> = ({ type }) => {
  if (type === 'HOME') {
    return <LogoAnchor />;
  }

  if (type === 'BACK') {
    return <BackAnchor />;
  }

  if (type === 'MENU') {
    return <MenuAnchor />;
  }

  return null;
};
