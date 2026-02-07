import { getCalendarDaysForDay, getCalendarDaysForMonth, getCalendarDaysForWeek } from '@/lib/date';
import type { CalendarView } from '@/types/views';
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CalendarState {
    startDate: Date;
    calendarView: CalendarView;
    calendarDays: Date[];
    setStartDate: (date: Date) => void;
    setCalendarView: (view: CalendarView) => void;
}

export const useCalendarStore = create<CalendarState>()(
    persist(
        (set) => ({
            startDate: new Date(),
            calendarView: "day" as CalendarView,
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
        }),
        {
            name: 'calendar-storage',
            partialize: (state) => ({
                calendarView: state.calendarView,
                startDate: state.startDate.toISOString(),
            }),
            merge: (persistedState: any, currentState) => ({
                ...currentState,
                ...persistedState,
                startDate: persistedState?.startDate 
                    ? new Date(persistedState.startDate) 
                    : new Date(),
                calendarDays: persistedState?.calendarView === "month"
                    ? getCalendarDaysForMonth(persistedState?.startDate ? new Date(persistedState.startDate) : new Date())
                    : persistedState?.calendarView === "week"
                    ? getCalendarDaysForWeek(persistedState?.startDate ? new Date(persistedState.startDate) : new Date())
                    : getCalendarDaysForDay(persistedState?.startDate ? new Date(persistedState.startDate) : new Date()),
            }),
        }
    )
)