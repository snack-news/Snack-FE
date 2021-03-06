import React, { FC } from 'react';

import { ContactList } from './ContactList';

import { HorizontalDivider } from '~src/view/components/HorizontalDivider';

interface IProps {}

export const MenuPageFooter: FC<IProps> = () => (
  <>
    <HorizontalDivider />
    <ContactList />
  </>
);
