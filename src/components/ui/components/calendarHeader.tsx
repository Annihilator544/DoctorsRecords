function CalendarHeader({ date}: {date: Date}) {
    return (
        <div key={date.toISOString()} className="text-center font-semibold">
            {date.getDate()} { date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
        </div>
    )
}

export default CalendarHeader