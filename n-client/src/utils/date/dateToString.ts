import { format } from 'date-fns';

export const dateToString = (date: Date | number) => format(date, "yyyy-MM-dd'T'HH:mm");
