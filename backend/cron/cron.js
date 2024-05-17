import CalendarBaptismal from './../../model/BaptismalCalendar/Calendar.js';

export default function handler() {
    cron.schedule('0 0 * * *', async () => {
        
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set time to 00:00:00
      
        console.log('Today:', today);
      
        try {
            // if (req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
            //     return res.status(401).end('Unauthorized');
            //   }
          const deletedEvents = await CalendarBaptismal.deleteMany({
            end: { $lt: today },
          });
          console.log(`Deleted ${deletedEvents.deletedCount} past events.`);
        } catch (err) {
          console.error('Error deleting past events:', err);
        }
      }, {
        scheduled: true,
        timezone: 'Asia/Manila', // Set timezone to Manila
      });
  }