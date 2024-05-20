import React, { useState, useEffect } from "react";
// import moment from 'moment';
import { Views } from "react-big-calendar";
import axios from "axios";
import Calendar from "../MainCalendar";
import ViewModal from "../ViewModal/ViewModal";
// import getHolidays from "../../holidays/getHolidays";

type Reservation = {
  _id: string;
  start: Date;
  end: Date;
  description: string;
  slot: number;
};
function formatDateTime(date: Date | string) {
  if (typeof date === "string") {
    date = new Date(date);
  }

  // const monthNames = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];

  // const day = date.getDate();
  // const month = monthNames[date.getMonth()];
  // const year = date.getFullYear();

  const hours = date.getHours() % 12 || 12; // Get 12-hour format
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const amPm = date.getHours() >= 12 ? "PM" : "AM";

  return `${hours}:${minutes} ${amPm}`;
}
const components = {
  event: (props: any) => {
    return (
      <div
        className={
          props.event.description === "Available"
            ? "text-black text-opacity-70 bg-[#b6f4b2] h-full bg-opacity-90"
            : props.event.description === "Appointed"
            ? "text-white bg-primary bg-opacity-80 h-full "
            : props.event.description === 'Not available' ? "text-white bg-danger bg-opacity-80 h-full "
            : "text-black text-opacity-70 bg-[#f9d9b1] h-full "
        }
        onClick={() => props.onClick(props.event)}
      >
        {/* {moment(props.event.start).format('YYYY-MM-DD HH:mm')} 
        {' '}
        {moment(props.event.end).format('YYYY-MM-DD HH:mm')} */}
        {formatDateTime(props.event.start)}
        {/* {props.event.description && <p>{props.event.description}</p>} */}
        {<p>{props.event.slot} available</p>}
      </div>
    );
  },
};

const ControlCalendar: React.FC = () => {
  const [events, setEvents] = useState<Reservation[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Reservation | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  useEffect(() => {
    axios
      .get("https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/BaptismalCalendar")
      .then((response) => {
        const sortedEvents = response.data.sort((a: any, b: any) => {
          return new Date(a.start).getTime() - new Date(b.start).getTime();
        });
        setEvents(sortedEvents);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  const handleEventClick = (event: any) => {
    setSelectedEvent(event);
  };

  const handleDeleteEvent = (eventId: string) => {
    setEvents(events.filter((e) => e._id !== eventId));
    setSelectedEvent(null);
  };
  const handleChangeDate = (selectedDate: Date) => {
    setSelectedDate(selectedDate);
  };
  return (
    <>
      <div className="py-4 text-black dark:text-white">
        <label htmlFor="dateFilter">Select Date: </label>
        <input
          type="month"
          id="dateFilter"
          className="dark:bg-transparent dark:text-white bg-transparent w-1/4"
          value={selectedDate.toISOString().substring(0, 7)} // Display format YYYY-MM
          onChange={(e) => handleChangeDate(new Date(e.target.value))}
        />
      </div>
      {console.log(events)} {/* Add this line */}
      <Calendar
        events={events}
        components={components} // Add the components prop here
        views={[Views.MONTH, Views.AGENDA]}
        onSelectEvent={handleEventClick}
        startAccessor="start"
        style={{ height: 1000 }}
        min={new Date(new Date().getFullYear(), new Date().getMonth() + 3, 1)}
        date={selectedDate}
      />
      {selectedEvent && (
        <ViewModal
          event={selectedEvent}
          onDeleteEvent={handleDeleteEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  );
};

export default ControlCalendar;
