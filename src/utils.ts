export const shuffle = <ItemType>(items: ItemType[]) => [...items].sort(() => 0.5 - Math.random());

export const getHostName = (url: string) => {
  const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2];
  }
  return null;
};

const GET_DATE_FORMAT: { [formatKey: string]: (date: Date) => string } = {
  YYYY: date => `${date.getFullYear()}`,
  MM: date => `${date.getMonth() + 1}`.padStart(2, '0'),
  DD: date => `${date.getDate()}`.padStart(2, '0'),
  WEEK_NAME: date =>
    ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'][date.getDay()],
  WEEK_NUM: date => `${Math.floor((date.getDate() - date.getDay()) / 7) + 1}`,
  HH: date => `${date.getHours()}`.padStart(2, '0'),
  hh: date => `${(date.getHours() + 12) % 12}`.padStart(2, '0'),
  mm: date => `${date.getMinutes()}`.padStart(2, '0'),
  ss: date => `${date.getSeconds()}`.padStart(2, '0'),
  AM_PM: date => (date.getHours() < 12 ? '오전' : '오후'),
};

/**
 * 포멧 형식에 맞춰서 날짜를 문자열로 반환
 *
 * @param date 출력할 날짜
 * @param format 출력할 포메팅 양식 ( ex)YYYY년 MM월 WEEK_NUM주)
 * @example getDateFormat(new Date(), 'YYYY년 MM월 WEEK_NUM주')
 */
export const getDateFormat = (date: Date, format: string) => {
  let result = format;

  Object.keys(GET_DATE_FORMAT).forEach(formatKey => {
    result = result.replace(formatKey, GET_DATE_FORMAT[formatKey](date));
  });

  return result;
};

export const getWeekDate = (date: Date) => {
  const year = `${date.getFullYear()}`;
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const week = `${getWeek(date)}`.padStart(2, '0');

  return { year, month, week };
};

const getWeek = (dateInstance: Date): number => {
  const date = dateInstance.getDate();
  const year = dateInstance.getFullYear();
  const month = dateInstance.getMonth();

  const firstDate = new Date(year, month);
  const firstWeekLength = 7 - getDayStartMonday(firstDate);

  return firstWeekLength >= date ? 1 : Math.ceil((date - firstWeekLength) / 7) + 1;
};

const getDayStartMonday = (d: Date) => (d.getDay() || 7) - 1;
