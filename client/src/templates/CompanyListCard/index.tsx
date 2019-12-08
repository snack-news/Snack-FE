import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import useReactRouter from 'use-react-router';

import {
  ColListLayout,
  RowListLayout,
  CardSimpleLayout,
  Center,
} from '~client/layouts/index';
import useCorpList from '~client/hooks/useCorpList';

import { routes } from '~client/config/routes';

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
  const excludeCorp = corpListState.corpList.find(
    ({ id }) => id === excludeCropId
  );

  if (excludeCorp !== undefined) {
    title = `${excludeCorp.name}말고 이런 회사 소식은 어떠세요?`;
  }

  const corpList = corpListState.corpList.filter(
    ({ id }) => id !== excludeCropId
  );

  return (
    <CardSimpleLayout>
      {{
        header: <CompanyListCardTitle>{title}</CompanyListCardTitle>,
        nav: isRenderMoreLink && (
          <Link
            to={routes.companySelectPage.getLink()}
            style={{ textDecoration: 'none' }}
          >
            <CompanyListCardMoreLink />
          </Link>
        ),
        body: (
          <RowListLayout.Repeat interval="10px">
            {corpList.map(corp => (
              <CompanyBox {...corp} key={corp.id} />
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

const CompanyBox: FunctionComponent<ICorp> = ({ image, name, id }) => {
  const { history } = useReactRouter();

  return (
    <CompanyBoxWrapper
      onClick={() => history.push(`/company-list/${id}`)}
      top="12px"
      bottom="8px"
      items={[
        {
          el: (
            <Center>
              <CompanyBoxDiv>
                <CompanyBoxLogo src={image === null ? '' : image} />
              </CompanyBoxDiv>
            </Center>
          ),
          bottom: '12px',
        },
        {
          el: (
            <Center>
              <CompanyBoxLabel>{name}</CompanyBoxLabel>
            </Center>
          ),
        },
      ]}
    />
  );
};

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
