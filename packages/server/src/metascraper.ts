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
  const ctype: string = response.headers['content-type'];

  const charset = /charset=([^;]+)/g.exec(ctype);

  if (charset === null || charset.length < 2) {
    response.data = iconv.decode(response.data, 'utf-8');
  } else {
    response.data = iconv.decode(response.data, charset[1]);
  }

  return response;
});

export const getMetadata = async (targetUrl: string) => {
  const { data: html } = await axios.request({
    method: 'GET',
    url: targetUrl,
    responseType: 'arraybuffer',
  });

  const metadata = await metascraperInstance({ html, url: targetUrl });

  return metadata;
};
