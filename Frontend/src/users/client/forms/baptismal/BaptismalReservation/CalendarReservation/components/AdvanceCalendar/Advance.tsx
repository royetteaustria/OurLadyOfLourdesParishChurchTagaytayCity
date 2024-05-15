import React, { useState, useEffect } from 'react';
// import moment from 'moment';
import { Views } from 'react-big-calendar';
import axios from 'axios';
import Calendar from '../MainCalendar';
// import ViewModal from '../ViewModal/ViewModal';

type Reservation = {
  _id: string;
  start: Date;
  end: Date;
  description: string;
  slot: number;
};
function formatDateTime(date: Date | string) {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  // const monthNames = ["January", "February", "March", "April", "May", "June",
  //   "July", "August", "September", "October", "November", "December"];

  // const day = date.getDate();
  // const month = monthNames[date.getMonth()];
  // const year = date.getFullYear();

  const hours = date.getHours() % 12 || 12; // Get 12-hour format
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const amPm = date.getHours() >= 12 ? 'PM' : 'AM';

  return `${hours}:${minutes} ${amPm}`;
}
const components = {
  
  event: (props: any) => {
    return (
      <div className={props.event.description === 'Available' ? 'text-white bg-primary h-[3rem] bg-opacity-60' : props.event.description === 'Not Available' ? 'hidden' : 'hidden '}
        onClick={() => props.onClick(props.event)}
      >
        {/* {moment(props.event.start).format('YYYY-MM-DD HH:mm')} 
        {' '}
        {moment(props.event.end).format('YYYY-MM-DD HH:mm')} */}
        {formatDateTime(props.event.start)}
        
        {/* {props.event.description && <p>{props.event.description}</p>} */}
        {<p>{props.event.slot} Available</p>}
      </div>
    );
  },
};

const ControlCalendar: React.FC = () => {
  const [events, setEvents] = useState<Reservation[]>([]);
  const [, setSelectedEvent] = useState<Reservation | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/BaptismalCalendar');
        const sortedEvents = response.data.sort((a : any, b : any) => {
          return new Date(a.start).getTime() - new Date(b.start).getTime();
        });
        setEvents(sortedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
    // Fetch events every minute (adjust as needed)
    const interval = setInterval(fetchEvents, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleEventClick = (event: any) => {
    setSelectedEvent(event);
  };
  

  // const handleDeleteEvent = (eventId: string) => {
  //   setEvents(events.filter((e) => e._id !== eventId));
  //   setSelectedEvent(null);
  // };

  return (
    <>
    {console.log(events)} {/* Add this line */}
    <h1 className='text-center p-8 text-3xl text-black'>Available Dates for Baptismal</h1>
      <Calendar
        events={events}
        components={components}
        views={[Views.MONTH]}
        onSelectEvent={handleEventClick}
        startAccessor="start"
        style={{ height: 1000, padding: 24,}}
        min={new Date(new Date().getFullYear(), new Date().getMonth() + 3, 1)}
      />
      
    </>
  );
};

export default ControlCalendar;
