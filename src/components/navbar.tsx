import { LucideCalendarDays, Moon, Sun } from "lucide-react"
import CalendarControls from "./ui/components/calendarControls"
import ViewToggle from "./viewToggle"
import { useTheme } from "@/hooks/use-theme"
import { Button } from "./ui/button"
import { useCalendarStore } from "@/store/calenderStore"

function Navbar() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    const { startDate, calendarView } = useCalendarStore()
    
    return (
        <nav className="bg-background p-4 flex justify-between flex-wrap gap-5 max-sm:pt-14">
            <div className="flex gap-5 items-center">
                <LucideCalendarDays className=" inline-block" />
                <p className="text-xl">Calendar</p>
                {calendarView === "month" && <p className="text-xl ">{startDate.toLocaleString('default', { month: 'long' })} {startDate.getFullYear()}</p>}
                {calendarView === "week" && <p className="text-xl ">Week of {startDate.getDate()} {startDate.toLocaleString('default', { month: 'long' })} {startDate.getFullYear()}</p>}
                {calendarView === "day" && <p className="text-xl ">{startDate.getDate()} {startDate.toLocaleString('default', { month: 'long' })} {startDate.getFullYear()}</p>}
            </div>
            <div className="flex gap-3 items-center">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    {theme === "dark" ? (
                        <Sun className="h-5 w-5" />
                    ) : (
                        <Moon className="h-5 w-5" />
                    )}
                </Button>
                <ViewToggle />
                <CalendarControls />
            </div>
        </nav>
    )
}

export default Navbar