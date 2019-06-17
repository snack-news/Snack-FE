import React from 'react';

import { Footer } from 'Templates/index';
import { Copyright, FooterLinkList, SocialIconList } from 'Templates/Footer/components';
import storiesOfWithTemplates from './storiesOfWithTemplates';

import Outline from '../Outline';

storiesOfWithTemplates('Footer', module)
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
