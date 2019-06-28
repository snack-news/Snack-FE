export const getHostName = (url: string) => {
  const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2];
  }
  return null;
};

/**
 * 달의 몇번째 주인지 구한다.
 * 월요일을 한주의 시작으로 본다.
 */
export const getWeekNumberOfMonth = (dateObj: Date) => {
  const date = dateObj.getDate();
  const day = dateObj.getDay();
  return Math.floor((date - day) / 7) + 1;
};
