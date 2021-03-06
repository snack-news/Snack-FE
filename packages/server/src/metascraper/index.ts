/* eslint-disable max-lines */
// TODO 코드 개선 필요 (너무 긴 라인수) (code bad smell)

// @ts-ignore
import metascraper from 'metascraper';
// @ts-ignore
import metascraperAuthor from 'metascraper-author';
// @ts-ignore
import metascraperDate from 'metascraper-date';
// @ts-ignore
import metascraperDescription from 'metascraper-description';
// @ts-ignore
import metascraperImage from 'metascraper-image';
// @ts-ignore
import metascraperLogo from 'metascraper-logo';
// @ts-ignore
import metascraperClearbit from 'metascraper-clearbit';
// @ts-ignore
import metascraperPublisher from 'metascraper-publisher';
// @ts-ignore
import metascraperTitle from 'metascraper-title';
// @ts-ignore
import metascraperUrl from 'metascraper-url';
import axios from 'axios';
import iconv from 'iconv-lite';

import { getCharset } from './getCharset';

const metascraperInstance = metascraper([
  metascraperAuthor(),
  metascraperDate(),
  metascraperDescription(),
  metascraperImage(),
  metascraperLogo(),
  metascraperClearbit(),
  metascraperPublisher(),
  metascraperTitle(),
  metascraperUrl(),
]);

axios.interceptors.response.use(response => {
  const charset = getCharset(response);
  response.data = iconv.decode(response.data, charset);

  return response;
});

export const getMetadata = async (targetUrl: string) => {
  const { data: html } = await axios
    .request({
      method: 'GET',
      url: targetUrl,
      responseType: 'arraybuffer',
      headers: {
        Accept: '*/*',
        'User-Agent':
          ' Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
      },
    })
    .catch(error => {
      console.log(error);
      return { data: '' };
    });

  const metadata = await metascraperInstance({ html, url: targetUrl });

  return metadata;
};
