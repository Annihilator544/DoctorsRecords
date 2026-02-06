export type CalendarView = "month" | "week" | "day";

export const CalendarViewEnum = {
    MONTH: "month",
    WEEK: "week",
    DAY: "day"
} as const;

export type CalendarViewEnum = typeof CalendarViewEnum[keyof typeof CalendarViewEnum];