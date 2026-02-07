import { useCalendarStore } from "@/store/calenderStore"
import CalendarHeader from "./calendarHeader"
import { Card, CardContent, CardHeader } from "../card"
import { useTaskStore } from "@/store/taskStore"

function CalendarCard({ date, isCurrentMonth }: { date: Date, isCurrentMonth: boolean }) {
    const { setCalendarView, setStartDate } = useCalendarStore()
    const { getTasksForDate } = useTaskStore()
    function handleClick() {
        if(isCurrentMonth) {
            setCalendarView("day")
            setStartDate(date)
        }
        else{
            setStartDate(date)
        }
    }
    const tasks = getTasksForDate(date)
    return (
        <Card className={` ${isCurrentMonth ? "" : "opacity-50"} overflow-y-auto`}>
            <CardHeader>
                <CalendarHeader date={date} />
            </CardHeader>
            <CardContent onClick={handleClick} className="flex flex-1 flex-col items-start space-y-2 cursor-pointer max-sm:space-y-1 max-sm:px-1 ">
                {tasks.length > 0 && tasks.map((task) => (
                    <div key={task.id} className="w-full px-2 bg-background rounded border overflow-hidden text-ellipsis whitespace-nowrap">
                        <p className={`text-sm max-sm:text-xs ${task.completed ? "line-through text-muted-foreground" : ""}`}>{task.title}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}

export default CalendarCard