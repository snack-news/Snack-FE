/* eslint-disable max-lines-per-function */

import MockAdapter from 'axios-mock-adapter';

import axios from '../axios';

import newsApi from './index';
import { newsListMock } from './mock';

const expectData = {
  data: newsListMock,
};

describe('newsApi.getNewsList()', () => {
  it('startDateTime, endDateTime가 params로 전달된다.', async () => {
    const mock = new MockAdapter(axios);

    const expectParams = {
      startDateTime: '2019-07-01T00:00',
      endDateTime: '2019-08-31T00:00',
    };

    mock.onGet('https://snak.news/api/news').reply(config => {
      expect(config.params).toEqual(expectParams);
      return [200, expectData];
    });

    const res = await newsApi.getNewsList(expectParams);

    expect(expectData).toEqual(res.data);
  });
});
