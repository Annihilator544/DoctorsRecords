import { useCalendarStore } from "@/store/calenderStore"

function Calendar() {
    const { calendarDays } = useCalendarStore()
    return (
        <div className="grid grid-cols-7 flex-1 gap-2 p-4">
            {calendarDays.map((date) => (
                <div key={date.toISOString()} className="p-2 bg-amber-400 rounded-md overflow-hidden">
                    {date.getDate()} {date.getMonth() + 1} {date.getFullYear()}
                </div>
            ))}
        </div>
    )
}

export default Calendar