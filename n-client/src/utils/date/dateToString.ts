import { format } from '~nclient/utils/date';

export const dateToString = (date: Date | number) => format(date, 'yyyy-MM-dd[T]hh:mm');
