import React from 'react';
import { storiesOf } from '@storybook/react';

import { Footer } from 'Templates/index';
import { Copyright, FooterLinkList, SocialIconList } from 'Templates/Footer/components';

import Outline from '../Outline';

export default (name: string) => {
  storiesOf(name, module)
    .add('default', () => <Footer />)
    .add('Copyright', () => (
      <Outline>
        <Copyright />
      </Outline>
    ))
    .add('FooterLinkList', () => (
      <Outline>
        <FooterLinkList />
      </Outline>
    ))
    .add('SocialIconList', () => (
      <Outline>
        <SocialIconList />
      </Outline>
    ));
};
