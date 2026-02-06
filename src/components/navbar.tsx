import { LucideCalendarDays } from "lucide-react"
import CalendarControls from "./calendarControls"
import ViewToggle from "./viewToggle"

function Navbar() {
    return (
        <nav className="bg-background p-4 flex justify-between">
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