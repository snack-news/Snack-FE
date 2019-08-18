import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { ColListLayout, RowListLayout, CardSimpleLayout, Center } from 'Layouts/index';
import useCorpList from 'Hooks/useCorpList';

export interface ICompanyListCardProps {
  isRenderMoreLink?: boolean;
  excludeCropId?: number;
}

export const CompanyListCard: FunctionComponent<ICompanyListCardProps> & {
  defaultProps: Partial<ICompanyListCardProps>;
} = props => {
  const { excludeCropId, isRenderMoreLink } = props;
  const [corpListState] = useCorpList();

  let title = '회사별 뉴스 모아보기';

  if (corpListState.status !== 'success') {
    return null;
  }
  const excludeCorp = corpListState.corpList.find(({ id }) => id === excludeCropId);

  if (excludeCorp !== undefined) {
    title = `${excludeCorp.name}말고 이런 회사 소식은 어떠세요?`;
  }

  const corpList = corpListState.corpList.filter(({ id }) => id !== excludeCropId);

  return (
    <CardSimpleLayout>
      {{
        header: <CompanyListCardTitle>{title}</CompanyListCardTitle>,
        nav: isRenderMoreLink && <CompanyListCardMoreLink />,
        body: (
          <RowListLayout.Repeat interval="10px">
            {corpList.map(corp => (
              <CompanyBox companyName={corp.name} logoImg={corp.image} key={`${corp.id}`} />
            ))}
          </RowListLayout.Repeat>
        ),
      }}
    </CardSimpleLayout>
  );
};

CompanyListCard.defaultProps = { isRenderMoreLink: false };

const CompanyListCardTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: #000000;
`;

const CompanyListCardMoreLink = styled.div.attrs({ children: '모두보기' })`
  font-size: 13px;
  color: #0b66f7;
`;

const CompanyBox: FunctionComponent<ICompany> = ({ logoImg, companyName }) => (
  <CompanyBoxWrapper
    top="12px"
    bottom="8px"
    items={[
      {
        el: (
          <Center>
            <CompanyBoxDiv>
              <CompanyBoxLogo src={logoImg === null ? '' : logoImg} />
            </CompanyBoxDiv>
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

const CompanyBoxDiv = styled.div`
  display: flex;
  max-width: 72px;
  max-height: 35px;
  min-height: 35px;
  align-items: center;
  justify-content: center;
`;
const CompanyBoxLogo = styled.img`
  width: 100%;
`;

const CompanyBoxLabel = styled.div`
  font-size: 12px;
  color: #595966;
`;
