export const getTimeSlotsForDay = (date: Date) => {
    const slots = [];
    for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
            const slot = new Date(date);
            slot.setHours(hour, minute, 0, 0);
            slots.push(slot);
        }
    }
    return slots;
}