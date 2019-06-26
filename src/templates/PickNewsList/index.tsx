import React, { Fragment, FunctionComponent } from 'react';

import { ColListLayout } from 'Layouts/index';

import { getPickNewsList } from 'Api/index';
import { HorizontalDivider } from 'Templates/index';
import { ExternalLinkWithImage } from 'Components/index';

// PickNewsList 컴포넌트
interface IPickNewsListProps {}

export const PickNewsList: FunctionComponent<IPickNewsListProps> = () => {
  const pickNewsList = getPickNewsList();

  return (
    <ColListLayout.Repeat>
      {pickNewsList.map(pickNewsProps => (
        <Fragment key={pickNewsProps.key}>
          <ExternalLinkWithImage {...pickNewsProps.link} />
          <HorizontalDivider thick />
        </Fragment>
      ))}
    </ColListLayout.Repeat>
  );
};
