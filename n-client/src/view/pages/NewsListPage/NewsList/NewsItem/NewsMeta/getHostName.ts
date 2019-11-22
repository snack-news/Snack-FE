export const getHostName = (url: string) => {
  const match = url.match(/^(?:(?:http(?:s)?):\/\/)?(?:www\.)?(.[^/:?]+)/i);

  if (match === null) {
    return '';
  }

  return match[1];
};
