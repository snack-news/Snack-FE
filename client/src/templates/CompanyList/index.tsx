import React from 'react';

import { ColListLayout } from '~client/layouts/index';
import { HorizontalDivider } from '~client/templates/index';

import useCorpList from '~client/hooks/useCorpList';
import useReactRouter from 'use-react-router';

import CompanyItem from './CompanyItem';

/* CompanyList 컴포넌트 */
export const CompanyList = () => {
  const [companyListState] = useCorpList();
  const { history } = useReactRouter();

  if (companyListState.status !== 'success') {
    return null;
  }

  return (
    <ColListLayout.Repeat>
      {companyListState.corpList.map(corp => (
        <ColListLayout.Repeat key={corp.id}>
          <CompanyItem {...corp} onClick={() => history.push(`/company-list/${corp.id}`)} />
          <HorizontalDivider key="HorizontalDivider" />
        </ColListLayout.Repeat>
      ))}
    </ColListLayout.Repeat>
  );
};
