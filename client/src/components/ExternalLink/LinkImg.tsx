import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { MetaData } from './useLinkMetaData';

import { Center } from '~client/layouts';

interface ILinkImgProps {
  label: string;
  meta: MetaData | null;
}

const LinkImg: FunctionComponent<ILinkImgProps> = ({ label, meta }) => {
  if (meta && meta.image) {
    return (
      <Center>
        <img
          src={meta.image}
          style={{
            maxWidth: '360px',
            maxHeight: '180px',
          }}
          alt="link"
        />
      </Center>
    );
  }

  return <ShuffleBackgroundColorBox label={label} />;
};

interface IShuffleBackgroundColorBoxProps {
  label: string;
}

const ShuffleBackgroundColorBox: FunctionComponent<
  IShuffleBackgroundColorBoxProps
> = ({ label }) => {
  return (
    <div style={{ width: '100%', height: '160px', backgroundColor: '#4a4a4a' }}>
      <Label>{label}</Label>
    </div>
  );
};

const Label = styled.div`
  position: relative;
  top: 20px;
  left: 25px;

  width: 170px;
  height: 36px;
  font-size: 14px;
  font-weight: bold;
  color: #fefefe;
`;

export default LinkImg;
