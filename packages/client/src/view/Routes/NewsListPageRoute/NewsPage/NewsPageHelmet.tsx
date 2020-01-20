/* eslint-disable react/jsx-max-depth */

import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

import { useLinkMetaData } from '~src/hooks/useLinkMetaData';

interface IProps {
  news: INews;
}

export const NewsPageHelmet: FC<IProps> = ({ news }) => (
  <>
    <Helmet>
      <title>{news.title}</title>
      <meta property="title" content={news.title} />
      <meta property="apple-mobile-web-app-title" content={news.title} />
      <meta property="og:title" content={news.title} />
      <meta property="og:site_name" content={news.title} />
      <meta property="twitter:site_name" content={news.title} />
    </Helmet>
    {/* {news.link && <LinkHelmet link={news.link} />} */}
  </>
);

// interface ILinkHelmetProps {
//   link: string;
// }

// const LinkHelmet: FC<ILinkHelmetProps> = ({ link }) => {
//   const meta = useLinkMetaData(link);

//   if (!meta) return null;

//   return (
//     <Helmet>
//       {meta.image && <meta property="og:image" content={meta.image} />}
//       {meta.image && <meta property="twitter:image" content={meta.image} />}
//     </Helmet>
//   );
// };
