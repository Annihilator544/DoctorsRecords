function CalendarHeader({ date}: {date: Date}) {
    return (
        <>
        <div key={date.toISOString() + "large"} className="text-center font-semibold max-sm:hidden">
            {date.getDate()} { date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
        </div>
        <div key={date.toISOString() + "small"} className="text-center font-semibold sm:hidden">
            {date.getDate()}
        </div>
        </>
    )
}

export default CalendarHeader