import { useCalendarStore } from "@/store/calenderStore"
import CalendarHeader from "./calendarHeader"
import { Card, CardContent, CardHeader } from "../card"

function CalendarCard({ date, isCurrentMonth }: { date: Date, isCurrentMonth: boolean }) {
    const { setCalendarView, setStartDate } = useCalendarStore()
    function handleClick() {
        if(isCurrentMonth) {
            setCalendarView("day")
            setStartDate(date)
        }
        else{
            setStartDate(date)
        }
    }
    return (
        <Card className={` ${isCurrentMonth ? "" : "opacity-50"}`}>
            <CardHeader>
                <CalendarHeader date={date} />
            </CardHeader>
            <CardContent onClick={handleClick} className="flex flex-1 flex-col items-start space-y-2 cursor-pointer">
            </CardContent>
        </Card>
    )
}

export default CalendarCard