import React, { Fragment, FunctionComponent } from 'react';

import { ColListLayout } from '~client/layouts/index';

import { HorizontalDivider } from '~client/templates/index';
import { getPickNewsList } from '~client/api/index';
// import { ExternalLinkWithImage } from '~client/components/index';

// PickNewsList 컴포넌트
interface IPickNewsListProps {}

export const PickNewsList: FunctionComponent<IPickNewsListProps> = () => {
  const pickNewsList = getPickNewsList();

  return (
    <ColListLayout.Repeat>
      {pickNewsList.map(pickNewsProps => (
        <Fragment key={pickNewsProps.key}>
          {/* <ExternalLinkWithImage {...pickNewsProps.link} isRenderShuffleBackgroundColorBox /> */}
          <HorizontalDivider thick />
        </Fragment>
      ))}
    </ColListLayout.Repeat>
  );
};
