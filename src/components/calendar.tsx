import { useCalendarStore } from "@/store/calenderStore"
import CalendarCard from "./ui/components/calendarCard"
import { doesDateBelongToCurrentMonthView } from "@/lib/date"

function Calendar() {
    const { calendarDays, startDate, calendarView } = useCalendarStore()
    return  <>
            {calendarView === "day" ?
            <></> 
            : 
            <div className={`grid grid-cols-7 flex-1 gap-2 p-4`}>
                {calendarDays.map((date) => {
                    return <CalendarCard key={date.toISOString()} date={date} isCurrentMonth={doesDateBelongToCurrentMonthView(date, startDate)} />
                })}
            </div>}
        </>
    
}

export default Calendar