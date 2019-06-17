import React from 'react';

import CompanyItem from './CompanyItem';
import HorizontalDivider from '../HorizontalDivider/index';
import ColListLayout from '../../layouts/ColListLayout';

import { getCompanyList } from '../../api';

/* GroupList 컴포넌트 */
const GroupList = () => {
  const companyList = getCompanyList();

  return (
    <ColListLayout.Nomal>
      {companyList.map(company => (
        <ColListLayout.Nomal key={company.id}>
          <CompanyItem {...company} key="CompanyItem" />
          <HorizontalDivider key="HorizontalDivider" />
        </ColListLayout.Nomal>
      ))}
    </ColListLayout.Nomal>
  );
};

export default GroupList;
