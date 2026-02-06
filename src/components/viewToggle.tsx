import { useCalendarStore } from "@/store/calenderStore"
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"
import { CalendarViewEnum, type CalendarView } from "@/types/views"

function ViewToggle() {
    const { calendarView, setCalendarView } = useCalendarStore()
    return (
        <ToggleGroup type="single" value={calendarView} aria-label="View toggle" onValueChange={(value: CalendarView) => value && setCalendarView(value)} variant="outline">
            <ToggleGroupItem value={CalendarViewEnum.MONTH}>Month</ToggleGroupItem>
            <ToggleGroupItem value={CalendarViewEnum.WEEK}>Week</ToggleGroupItem>
            <ToggleGroupItem value={CalendarViewEnum.DAY}>Day</ToggleGroupItem>
        </ToggleGroup>
    )
}

export default ViewToggle