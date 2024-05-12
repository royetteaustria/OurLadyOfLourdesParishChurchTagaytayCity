import moment from "moment";
import Calendar from "../Calendar";
import axios from "axios";
import { useState, useEffect } from 'react';
import { Views } from "react-big-calendar";
import ViewModal from "../ViewModal/ViewModal";

const components = {
  event: (props: any) => {
    return (
      <div 
        onClick={() => props.onClick(props.event)}
        className="bg-primary text-white] "
      >
        {props.event.title} - {moment(props.event.start).format("YYYY-MM-DD HH:mm")} to {moment(props.event.end).format("YYYY-MM-DD HH:mm")}
        {props.event.describe && <p>{props.event.describe}</p>}
      </div>
    );
  },
};

const ControlCalendar: React.FC = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/Events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  },[]);

  const handleEventClick = (event: any) => {
    setSelectedEvent(event);
  }

  const handleDeleteEvent = (eventId: string) => {
    setEvents(events.filter((e: any) => e._id !== eventId));
    setSelectedEvent(null);
  }

  return (
    <>
      <Calendar 
        events={events} 
        components={components}
         views={[Views.MONTH, Views.AGENDA]}
        onSelectEvent={handleEventClick}
        style={{ height: 900,  }}/>
        
      {selectedEvent && (
        <ViewModal
          event={selectedEvent}
          onDeleteEvent={handleDeleteEvent} 
          onClose={() => setSelectedEvent(null)} 
          />
      )}
    </>
  );
}

export default ControlCalendar;
