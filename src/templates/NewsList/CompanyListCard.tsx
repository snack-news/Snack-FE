import React, { SFC } from 'react';
import styled from 'styled-components';

import { getCompanyList } from '../../api';

import ColListLayout from '../../layouts/ColListLayout';
import RowListLayout from '../../layouts/RowListLayout';
import Center from '../../layouts/Center';

import CardSimpleLayout from './CardSimpleLayout';

const CompanyListCard = () => {
  const companyList = getCompanyList();

  return (
    <CardSimpleLayout>
      {{
        header: <CompanyListCardTitle />,
        nav: <CompanyListCardMoreLink />,
        body: (
          <RowListLayout.Repeat interval="10px">
            {companyList.map(companyBoxProps => (
              <CompanyBox {...companyBoxProps} />
            ))}
          </RowListLayout.Repeat>
        ),
      }}
    </CardSimpleLayout>
  );
};

const CompanyListCardTitle = styled.div.attrs({ children: '회사별 뉴스 모아보기' })`
  font-family: SFProDisplay;
  font-size: 17px;
  font-weight: 600;
  color: #000000;
`;

const CompanyListCardMoreLink = styled.div.attrs({ children: '모두보기' })`
  font-family: AppleSDGothicNeo;
  font-size: 13px;
  color: #0b66f7;
`;

const CompanyBox: SFC<Company> = ({ logoImg, companyName }) => (
  <CompanyBoxWrapper
    top="12px"
    items={[
      {
        el: (
          <Center>
            <CompanyBoxLogo src={logoImg} />
          </Center>
        ),
        bottom: '12px',
      },
      {
        el: (
          <Center>
            <CompanyBoxLabel>{companyName}</CompanyBoxLabel>
          </Center>
        ),
        bottom: '8px',
      },
    ]}
  />
);

const CompanyBoxWrapper = styled(ColListLayout.Detail)`
  min-width: 89px;
  min-height: 74px;
  border-radius: 5px;
  border: solid 0.5px #d6d6db;
`;

const CompanyBoxLogo = styled.img`
  width: 70.6px;
  height: 27.2px;
`;

const CompanyBoxLabel = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 12px;
  color: #595966;
`;

export default CompanyListCard;
