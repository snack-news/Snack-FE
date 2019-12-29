export interface WeekRange {
  year: string;
  month: string;
  week: string;
}

export interface DateRange {
  startDateTime: Date;
  endDateTime: Date;
}

export const getNextStartDateTime = (startDateTime: number) =>
  getEndDateTime(startDateTime).getTime() + DAY;

export const getEndDateTime = (startDateTime: number): Date => {
  const startDate = new Date(startDateTime);
  const nextWeekDay = getNextWeekDay(startDate, SUNDAY);

  if (startDate.getMonth() === nextWeekDay.getMonth()) {
    return nextWeekDay;
  }

  return getLastDateOfMonth(startDate);
};
