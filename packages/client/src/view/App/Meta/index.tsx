import React, { FC } from 'react';

import { AppleMeta } from './apple';
import { BasicMeta } from './basic';
import { MsMeta } from './ms';
import { OgMeta } from './og';
import { TwitterMeta } from './twitter';

export const Meta: FC = () => (
  <>
    <BasicMeta />
    <MsMeta />
    <OgMeta />
    <AppleMeta />
    <TwitterMeta />
  </>
);
