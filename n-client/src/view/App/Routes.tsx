import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { NewsListPage } from '~nclient/view/pages/NewsListPage';

const getNewsList = (): News[] => [
  {
    createAt: '2019-11-17T12:13:39',
    modifiedAt: '2019-11-17T12:13:39',
    id: 23,
    title: '11/17일에 12:13 테스트 기사',
    content:
      '[{"type":"paragraph","data":{"text":"<b>토픽은 어떻게 적나요?</b>"}},{"type":"paragraph","data":{"text":"이렇게???"}}]',
    link: 'https://www.collateart.com/',
    category: { id: 1, title: 'SNAK' },
    topics: [],
    tags: [],
  },
  {
    createAt: '2019-11-14T10:53:39',
    modifiedAt: '2019-11-14T10:53:39',
    id: 1,
    title: '제목',
    content: '[{"type":"paragraph","data":{"text":"내용"}}]',
    link: '',
    category: { id: 1, title: 'SNAK' },
    topics: [
      {
        id: 1,
        type: 'CORP',
        name: 'APPL',
        image: '',
      },
    ],
    tags: [{ id: 1, title: 'TOP3' }],
  },
  {
    createAt: '2019-11-17T11:18:19',
    modifiedAt: '2019-11-17T11:18:19',
    id: 2,
    title: 'bold 테스트',
    content: '[{"type":"paragraph","data":{"text":"<b>bold</b>"}}]',
    link: '',
    category: { id: 1, title: 'SNAK' },
    topics: [],
    tags: [],
  },
  {
    createAt: '2019-10-19T23:41:34',
    modifiedAt: '2019-10-19T23:41:34',
    id: 4,
    title: '<쿠팡 마니아인 사람들을 위한 소식>',
    content:
      '[{"type":"paragraph","data":{"text":"\uD83D\uDE80 한국인이 가장 많이 이용한 쇼핑 앱은 쿠팡이라고 하네요."}},{"type":"paragraph","data":{"text":"✅ 쿠팡 얼마나 쓰는데?"}},{"type":"paragraph","data":{"text":"1.9월 기준 1132만 명이 이용, "}},{"type":"paragraph","data":{"text":"참고로 "}},{"type":"paragraph","data":{"text":"2.11번가는 630만 명, "}},{"type":"paragraph","data":{"text":"3.위메프는 451만 명, "}},{"type":"paragraph","data":{"text":"4.G마켓이 435만 명,"}},{"type":"paragraph","data":{"text":"5.티몬은 355만 명"}},{"type":"paragraph","data":{"text":"순으로 기록\\u001e."}},{"type":"paragraph","data":{"text":"(와이즈앱 결과)"}},{"type":"paragraph","data":{"text":"✅ 엄청 많아진거야?"}},{"type":"paragraph","data":{"text":"2018년 9월은 769만 명 정도 였지만, 올해 9월은 월 사용자가 47%나 증가."}},{"type":"paragraph","data":{"text":"그러나 10대에서는 지그재그가 1위를 차지했다고..!\uD83D\uDE2E"}},{"type":"paragraph","data":{"text":"(10대 - 지그재그, 쿠팡, 스타일쉐어, 11번가, 번개장터, 무신사 순으로 이용)"}},{"type":"paragraph","data":{"text":"By 스낵뉴스\uD83D\uDE4B‍♂️"}},{"type":"paragraph","data":{"text":"(이 뉴스가 유용할 친구에게 이 뉴스를 공유해보세요\uD83D\uDE0A)"}}]',
    link: '',
    category: { id: 1, title: 'SNAK' },
    topics: [],
    tags: [],
  },
];

export const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <NewsListPage newsList={getNewsList()} />
    </Route>
  </Switch>
);
