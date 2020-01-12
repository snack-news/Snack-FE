import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

import { AppleMeta } from './apple';
import { BasicMeta } from './basic';
import { MsMeta } from './ms';
import { OgMeta } from './og';
import { TwitterMeta } from './twitter';

export const Meta: FC = () => (
  <Helmet>
    <BasicMeta />
    <MsMeta />
    <OgMeta />
    <AppleMeta />
    <TwitterMeta />
  </Helmet>
);
