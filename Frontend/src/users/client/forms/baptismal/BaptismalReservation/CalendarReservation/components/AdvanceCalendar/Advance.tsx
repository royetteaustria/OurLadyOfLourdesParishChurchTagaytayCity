import { useState, useEffect } from "react";
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import './Calendar.css'

type AvailableDate = {
  start: Date | string;
}

type AvailableDateProps = AvailableDate & {
  updateFields: (fields: Partial<AvailableDate>) => void
}

export function ControlCalendar({updateFields} : AvailableDateProps) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [availableDates, setAvailableDates] = useState<AvailableDate[]>([]);
  const [filteredDates, setFilteredDates] = useState<AvailableDate[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  useEffect(() => {
    fetchAvailableDates();
  }, []);

  const fetchAvailableDates = () => {
    axios.get<AvailableDate[]>("https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app/api/BaptismalCalendar/available-dates")
      .then(response => {
        const sortedDates = response.data.sort((a, b) => {
          return new Date(a.start).getTime() - new Date(b.start).getTime();
        });
        setAvailableDates(sortedDates);
      })
      .catch(error => {
        console.error('Error fetching available dates:', error);
      });
  };

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
    if (date) {
      const filteredDates = availableDates.filter(d => new Date(d.start).toDateString() === date.toDateString());
      setFilteredDates(filteredDates);
      setSelectedDate(null); // Reset selected date when changing the search date
    } else {
      setFilteredDates([]);
      setSelectedDate(null); // Reset selected date when clearing the search date
    }
  };

  const handleGetDate = (date: Date | string) => {
    let selectedDateTime: Date;
    if (typeof date === 'string') {
      selectedDateTime = new Date(date);
    } else {
      selectedDateTime = date;
    }

    if (selectedDate) {
      // Preserve the time part of the previously selected date
      selectedDateTime.setHours(selectedDate.getHours());
      selectedDateTime.setMinutes(selectedDate.getMinutes());
    }

    setSelectedDate(selectedDateTime);
    updateFields({ start: selectedDateTime });
    console.log(formatDateTime(selectedDateTime));
  };


  function formatDateTime(date: Date | string) {
    if (typeof date === 'string') {
      date = new Date(date);
    }

    const hours = date.getHours() % 12 || 12; // Get 12-hour format
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const amPm = date.getHours() >= 12 ? 'PM' : 'AM';

    return `${hours}:${minutes} ${amPm}`;
  }
  const isNotMonday = (date: Date) => {
    const day = date.getDay();
    return day !== 1; // 1 represents Monday
  };
  return (
    <>
      <div className=' w-full md:py-8' data-aos="fade-right">
        <div className='w-full grid  bg-white '>
          <div className="mr-12 mt-8 px-8 overflow-hidden flex justify-center md:justify-center ">
            <h1 className="text-xl ml-12 md:text-sm md:text-center mt-4 font-md text-black m-2 mr-4 mb-5">Search date</h1>
            <ReactDatePicker
              className="ring-1 ring-primary mt-2 xsm:w-24 lg:w-full font-medium text-black"
              placeholderText="Search date"
              selected={startDate}
              onChange={(date: Date | null) => handleDateChange(date)}
              dateFormat="MMMM d, yyyy"
              minDate={
                new Date(
                  new Date().getFullYear(),
                  new Date().getMonth() ,
                  new Date().getDate () + 1
                )
              }
              filterDate={isNotMonday}
            />
          </div>
          <div className=" bg-white p-4 md:overflow-x-hidden md:justify-center flex justify-between items-center w-full">
            {filteredDates.length === 0 ? (
              <div className=" relative justify-center items-center size-full overflow-hidden">
              {/* <NoAvailable/> */} <h1>Please select a valid date available</h1>
            </div>
            ) : (
              <ul className="w-full">
              {filteredDates.map((date, index) => (
                <li
                  // data-aos="fade-right"
                  className={`bg-white shadow-md p-4 md:p-2 px-12 m-4 w-full flex justify-between text-black text-lg font-medium ${
                    selectedDate && date.start.toString() === selectedDate.toString() ? 'selected' : ''
                  }`}
                  key={index}
                >
                  {formatDateTime(date.start)}
                  <span>
                  <button
                      onClick={() => handleGetDate(date.start)}
                      className={`
                        ${selectedDate && date.start.toString() === selectedDate.toString() ? 'bg-primary' : 'bg-white hover:bg-primary'}
                        rounded-md border
                        md:p-1 p-4 mr-8
                        ${selectedDate && date.start.toString() === selectedDate.toString() ? 'text-white' : 'text-black hover:text-white'}
                        ml-4 justify-end
                      `}
                    >
                      Select
                    </button>
                  </span>
                </li>
              ))}
            </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ControlCalendar;

//('https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app/api/BaptismalCalendar');