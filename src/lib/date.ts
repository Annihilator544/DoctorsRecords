import { eachDayOfInterval, endOfMonth, endOfWeek, startOfMonth, startOfWeek } from "date-fns";

export function getCalendarDaysForMonth(date: Date) {
  const start = startOfWeek(startOfMonth(date));
  const end = endOfWeek(endOfMonth(date));
  return eachDayOfInterval({ start, end });
}

export function getCalendarDaysForWeek(date: Date) {
  const start = startOfWeek(date);
  const end = endOfWeek(date);
  return eachDayOfInterval({ start, end });
}

export function getCalendarDaysForDay(date: Date) {
  return [date];
}

export function doesDateBelongToCurrentMonthView(date: Date, startDate: Date) {
  return date.getMonth() === startDate.getMonth()
}