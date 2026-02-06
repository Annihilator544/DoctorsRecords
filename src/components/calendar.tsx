import { useCalendarStore } from "@/store/calenderStore"
import CalendarCard from "./ui/components/calendarCard"
import { doesDateBelongToCurrentMonthView } from "@/lib/date"
import CalendarDayView from "./ui/components/calendarDayView"

function Calendar() {
    const { calendarDays, startDate, calendarView } = useCalendarStore()
    return  <>
            {calendarView === "day" ?
            <>
                <CalendarDayView />
            </> 
            : 
            <div className={`grid grid-cols-7 grid-rows-[repeat(auto-fit,minmax(0,1fr))] flex-1 gap-2 p-4 max-sm:gap-1 max-sm:p-2`}>
                {calendarDays.map((date) => {
                    return <CalendarCard key={date.toISOString()} date={date} isCurrentMonth={doesDateBelongToCurrentMonthView(date, startDate)} />
                })}
            </div>
            }
        </>
    
}

export default Calendar