import React, { FC } from 'react';

import { ContactList } from './ContactList';

import { HorizontalDivider } from '~nclient/view/components/HorizontalDivider';

interface Props {}

export const MenuPageFooter: FC<Props> = () => (
  <>
    <HorizontalDivider />
    <ContactList />
  </>
);
