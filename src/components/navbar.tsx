import { LucideCalendarDays } from "lucide-react"
import CalendarControls from "./ui/components/calendarControls"
import ViewToggle from "./viewToggle"

function Navbar() {
    return (
        <nav className="bg-background p-4 flex justify-between flex-wrap gap-5">
            <div className="flex gap-5 items-center">
                <LucideCalendarDays className=" inline-block" />
                <p className="text-xl">Calendar</p>
                <CalendarControls />
            </div>
            <ViewToggle />
        </nav>
    )
}

export default Navbar