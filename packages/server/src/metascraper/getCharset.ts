import { AxiosResponse } from 'axios';

export const getCharset = (response: AxiosResponse) => {
  let charset = getCharsetWithHeaders(response);

  if (!charset) charset = getCharsetWithMetaTag(response);

  return charset || 'utf-8';
};

const getCharsetWithHeaders = (response: AxiosResponse) => {
  const ctype: string = response.headers['content-type'];
  const charset = /charset=([^;]+)/g.exec(ctype);

  return charset === null || charset.length < 2 ? undefined : charset[1];
};

const getCharsetWithMetaTag = (response: AxiosResponse) => {
  const charset = /charset=([^";]+)/g.exec(response.data.toString());

  return charset === null || charset.length < 2 ? undefined : charset[1];
};
