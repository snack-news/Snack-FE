import React, { FC } from 'react';

import { About } from './About';
import { ContactList } from './ContactList';

interface Props {}

export const AboutPageMain: FC<Props> = () => (
  <>
    <About />
    <ContactList />
  </>
);
