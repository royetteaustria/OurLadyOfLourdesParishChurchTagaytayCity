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
      <div className={props.event.description === 'Available' ? 'text-black text-opacity-70 bg-[#b6f4b2] h-full bg-opacity-90' : props.event.description === 'Appointed' ? 'text-white bg-primary bg-opacity-80 h-full ' : 'text-black text-opacity-70 bg-[#f9d9b1] h-full '}
        onClick={() => props.onClick(props.event)}
      >
        {/* {moment(props.event.start).format('YYYY-MM-DD HH:mm')} 
        {' '}
        {moment(props.event.end).format('YYYY-MM-DD HH:mm')} */}
        {formatDateTime(props.event.start)}
        {props.event.description && <p>{props.event.description}</p>}
      </div>
    );
  },
};

const ControlCalendar: React.FC = () => {
  const [events, setEvents] = useState<Reservation[]>([]);
  const [, setSelectedEvent] = useState<Reservation | null>(null);

  useEffect(() => {
    axios
      .get('https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/CalendarReservation')
      .then((response) => {
        setEvents(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
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
      <Calendar
        events={events}
        components={components}
        views={[Views.MONTH, Views.AGENDA]}
        onSelectEvent={handleEventClick}
        startAccessor="start"
        style={{ height: 1000 }}
        min={new Date(new Date().getFullYear(), new Date().getMonth() + 3, 1)}
      />
     
      {/* {selectedEvent && (
        <ViewModal
          event={selectedEvent}
          onDeleteEvent={handleDeleteEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )} */}
    </>
  );
};

export default ControlCalendar;
