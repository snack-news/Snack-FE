import { AxiosResponse } from 'axios';

export const getCharset = (response: AxiosResponse) => {
  let charset = getCharsetWithHeaders(response);

  if (!charset) charset = getCharsetWithMetaTag(response);

  if (!charset) charset = getCharsetWithContentTypeMetaTag(response);

  return charset || 'utf-8';
};

const getCharsetWithHeaders = (response: AxiosResponse) => {
  const ctype: string = response.headers['content-type'];
  const charset = /charset=([^;]+)/gi.exec(ctype);

  return charset === null || charset.length < 2 ? undefined : charset[1];
};

const getCharsetWithMetaTag = (response: AxiosResponse) => {
  // ex: <meta charset="euc-kr">
  const charset = /charset="([^";]+)/gi.exec(response.data.toString());

  return charset === null || charset.length < 2 ? undefined : charset[1];
};

const getCharsetWithContentTypeMetaTag = (response: AxiosResponse) => {
  // ex: <meta http-equiv="Content-Type" content="text/html; charset=euc-kr">
  const charset = /(?:"| )charset=([^";]+)/gi.exec(response.data.toString());

  return charset === null || charset.length < 2 ? undefined : charset[1];
};
