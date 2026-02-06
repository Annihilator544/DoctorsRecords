import { getCalendarDaysForDay, getCalendarDaysForMonth, getCalendarDaysForWeek } from '@/lib/date';
import type { CalendarView } from '@/types/views';
import { create } from 'zustand'

interface CalendarState {
    startDate: Date;
    calendarView: CalendarView;
    calendarDays: Date[];
    setStartDate: (date: Date) => void;
    setCalendarView: (view: CalendarView) => void;
}

export const useCalendarStore = create<CalendarState>()((set) => ({
    startDate: new Date(),
    calendarView: "month" as CalendarView,
    calendarDays: getCalendarDaysForMonth(new Date()),
    setStartDate: (date) => set((prev) => {
        let calendarDays: Date[] = []
        if (prev.calendarView === "month") {
            calendarDays = getCalendarDaysForMonth(date)
        } else if (prev.calendarView === "week") {
            calendarDays = getCalendarDaysForWeek(date)
        } else if (prev.calendarView === "day") {
            calendarDays = getCalendarDaysForDay(date)
        }
        return { startDate: date, calendarDays }
    }),
    setCalendarView: (view) =>  set((prev) => {
        let calendarDays: Date[] = []
        if (view === "month") {
            calendarDays = getCalendarDaysForMonth(prev.startDate)
        } else if (view === "week") {
            calendarDays = getCalendarDaysForWeek(prev.startDate)
        } else if (view === "day") {
            calendarDays = getCalendarDaysForDay(prev.startDate)
        }
        return { calendarView: view, calendarDays }
    }),
}))
