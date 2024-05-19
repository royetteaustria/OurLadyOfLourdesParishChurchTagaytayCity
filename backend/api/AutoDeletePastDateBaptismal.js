import CalendarBaptismal from "./../../model/BaptismalCalendar/Calendar.js";

export default async function handler() {
  cron.schedule('* * * * *', async () => {
    const now = new Date();
    console.log('Current time:', now);
  
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
      } catch (err) {
        console.error('Error deleting events:', err);
      }
    }
  }, {
    scheduled: true,
    timezone: 'Asia/Manila'
  });
  
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
}
