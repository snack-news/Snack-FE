import React, { FunctionComponent } from 'react';

import { MetaData } from './useLinkMetaData';

import { Center } from '~client/layouts';

interface ILinkImgProps {
  meta: MetaData | null;
}

const LinkImg: FunctionComponent<ILinkImgProps> = ({ meta }) => {
  if (!(meta && meta.image)) {
    return null;
  }

  return (
    <Center>
      <div
        style={{
          width: '100%',
          height: '180px',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url('${meta.image}')`,
          backgroundSize: 'cover',
        }}
      />
    </Center>
  );
};

export default LinkImg;
