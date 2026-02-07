import { useCalendarStore } from "@/store/calenderStore"
import { LucideChevronLeft, LucideChevronRight } from "lucide-react"
import { Button } from "../button"

function CalendarControls() {
    const { startDate, calendarView, setStartDate } = useCalendarStore()


    return (
        <div className="flex items-center space-x-4 select-none">
            <Button variant="outline" size="icon" onClick={() => {
                const newStartDate = new Date(startDate)
                if (calendarView === "month") {
                    newStartDate.setMonth(newStartDate.getMonth() - 1)
                }
                else if (calendarView === "week") {
                    newStartDate.setDate(newStartDate.getDate() - 7)
                }
                else if (calendarView === "day") {
                    newStartDate.setDate(newStartDate.getDate() - 1)
                }
                setStartDate(newStartDate)
            }} aria-label="Previous">
                <LucideChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => {
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
            }} aria-label="Next">
                <LucideChevronRight className="h-5 w-5" />
            </Button>
        </div>
    )
}

export default CalendarControls