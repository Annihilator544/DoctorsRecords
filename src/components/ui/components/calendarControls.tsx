import { useCalendarStore } from "@/store/calenderStore"
import { LucideChevronLeft, LucideChevronRight } from "lucide-react"

function CalendarControls() {
    const { startDate, calendarView, setStartDate } = useCalendarStore()


    return (
        <div className="flex items-center space-x-4 select-none">
            <LucideChevronLeft className="cursor-pointer" onClick={() => {
                const newStartDate = new Date(startDate)
                if (calendarView === "month") {
                    newStartDate.setMonth(newStartDate.getMonth() - 1)
                } else if (calendarView === "week") {
                    newStartDate.setDate(newStartDate.getDate() - 7)
                } else if (calendarView === "day") {
                    newStartDate.setDate(newStartDate.getDate() - 1)
                }
                setStartDate(newStartDate)
            }} />
            <LucideChevronRight className="cursor-pointer" onClick={() => {
                const newStartDate = new Date(startDate)
                if (calendarView === "month") {
                    newStartDate.setMonth(newStartDate.getMonth() + 1)
                }
                else if (calendarView === "week") {
                    newStartDate.setDate(newStartDate.getDate() + 7)
                }
                else if (calendarView === "day") {
                    newStartDate.setDate(newStartDate.getDate() + 1)
                }
                setStartDate(newStartDate)
            }} />
            {calendarView === "month" && <p className="text-xl ">{startDate.toLocaleString('default', { month: 'long' })} {startDate.getFullYear()}</p>}
            {calendarView === "week" && <p className="text-xl ">Week of {startDate.getDate()} {startDate.toLocaleString('default', { month: 'long' })} {startDate.getFullYear()}</p>}
            {calendarView === "day" && <p className="text-xl ">{startDate.getDate()} {startDate.toLocaleString('default', { month: 'long' })} {startDate.getFullYear()}</p>}
        </div>
    )
}

export default CalendarControls