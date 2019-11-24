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
import got from 'got';


const metascraperInstance = metascraper([
  metascraperAuthor(),
  metascraperDate(),
  metascraperDescription(),
  metascraperImage(),
  metascraperLogo(),
  metascraperClearbit(),
  metascraperPublisher(),
  metascraperTitle(),
  metascraperUrl()
])

export const getMetadata = async (targetUrl:string ) => {
  const { body: html, url } = await got(targetUrl)
  const metadata = await metascraperInstance({ html, url })

  return metadata;
}
