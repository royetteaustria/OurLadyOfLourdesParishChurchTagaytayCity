import CalendarBaptismal from "./../../model/BaptismalCalendar/Calendar.js";

export default async function handler(req, res) {
  function getStartOfDay(date) {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
  }

  function getEndOfDay(date) {
    const newDate = new Date(date);
    newDate.setHours(23, 59, 59, 999);
    return newDate;
  }

  const now = new Date();

  // Check if the current day is Monday
  if (now.getDay() === 1) {
    try {
      const deletedEvents = await CalendarBaptismal.deleteMany({
        start: {
          $gte: getStartOfDay(now),
          $lt: getEndOfDay(now)
        }
      });
      console.log(`Deleted ${deletedEvents.deletedCount} events scheduled for today (Monday).`);
      return res.status(200).json({ message: `Deleted ${deletedEvents.deletedCount} events scheduled for today (Monday).` });
    } catch (err) {
      console.error('Error deleting events:', err);
      return res.status(500).json({ error: 'Error deleting events.' });
    }
  } else {
    return res.status(200).json({ message: 'Today is not Monday. No events were deleted.' });
  }
}
