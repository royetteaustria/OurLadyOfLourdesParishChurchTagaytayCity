import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddBaptismal = () => {
  const [start, setStart] = useState<Date | null>(null);
  const [end, setEnd] = useState<Date | null>(null);
  // const [slot, setSlot] = useState<number>(0);
  const [description, setDescription] = useState("Available");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Update end when start changes
    if (start !== null) {
      setEnd(start);
    }
  }, [start]);

  const isNotMonday = (date: Date) => {
    const day = date.getDay();
    return day !== 1; // 1 represents Monday
  };
  const isHoliday = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-based
    const day = date.getDate();

    // Add more holiday conditions here
    const holidayDates = [
      `${month}/1/${year}`, // May 1
      `${month}/30/${year}`, // November 30
      // Last Monday of August
      `${2}/28/${year}`, // February 28
      `${11}/1/${year}`, // November 1
      `${11}/2/${year}`, // November 2
      `${7}/4/${year}`, // July 4
      `${12}/25/${year}`, // December 25
      `${4}/9/${year}`, // April 9
      `${12}/8/${year}`, // December 8
      `${12}/30/${year}`, // December 30
      `${12}/31/${year}`, // December 31
      `${1}/1/${year + 1}`, // January 1
      `${6}/12/${year}`, // January 1
    ];

    const holidayString = `${month}/${day}/${year}`;
    return holidayDates.includes(holidayString) || holidayDates.includes(date.toDateString());
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | null) => {
    if (!e) return;
    e.preventDefault();
  
    if (start === null) {
      toast.error("Please select a date.");
      return;
    }
  
    // Check if the selected date is a holiday in the Philippines
    const isHolidayDate = isHoliday(start);
  
    // If it's a holiday or Sunday, prevent submission
    if (isHolidayDate || start.getDay() === 0) {
      toast.error("Can't set reservation on holidays or Sundays.");
      return;
    }
    const getTimeSlots = (date: Date) => {
      const dayOfWeek = date.getDay();
    
      switch (dayOfWeek) {
        case 0: // Sunday
          return ["11:00 AM"];
        case 1: // Monday
          return [];
        case 2: // Tuesday
        case 3: // Wednesday
        case 4: // Thursday
        case 5: // Friday
          return ["8:00 AM", "9:00 AM", "10:00 AM"];
        case 6: // Saturday
          return ["8:00 AM", "9:00 AM", "10:00 AM"];
        default:
          return [];
      }
  };
  
    // Check if the selected date is more than one year in advance
    let endDate = new Date(start);
    endDate.setFullYear(endDate.getFullYear() + 1); // Declare endDate as let instead of const
    if (new Date() > endDate) {
      toast.error("Reservation cannot be set more than one year in advance.");
      return;
    }
  
    const reservations = [];
  
    // Set end date to one year from the selected date
    endDate = new Date(start);
    endDate.setFullYear(endDate.getFullYear() + 1);
    
    setIsLoading(true);
    // Loop through dates from start date to end date
    while (start <= endDate) {
      // const dayOfWeek = start.getDay();
      const timeSlots = getTimeSlots(start);
  
      // Add reservations for valid days and time slots
      if (timeSlots.length > 0) {
        for (const timeSlot of timeSlots) {
          const startTime = new Date(start);
          const [hours, minutes] = timeSlot.split(":");
          startTime.setHours(parseInt(hours));
          startTime.setMinutes(parseInt(minutes));
          const endTime = new Date(startTime.getTime() + 3600000); // Add 1 hour for end time
  
          reservations.push({
            start: startTime,
            end: endTime,
            description: "Available",
            slot: 5, // Assuming 5 slots per time slot
          });
        }
      }
  
      // Move to the next day
      start.setDate(start.getDate() + 1);
    }
  
    try {
      // Send the array of reservations to the backend
      await Promise.all(
        reservations.map(async (reservation) => {
          await axios.post("http://localhost:5000/api/BaptismalCalendar/add", reservation);
        })
      );
      // Success toast
      toast.success("Success adding reservations");
      navigate("/weddingAdmin/BaptismalReservation");
    } catch (err) {
      console.error(err);
      // Error toast
      toast.error("Error adding reservations");
    } finally {
      // Close loading toast when done
      setIsLoading(false); }
  };
  
  
  // const isNotMonday = (date : Date) => {
  //   const day = date.getDay();
  //   return day !== 1; // 1 represents Monday
  // };
  return (
    <>
      <div className="mx-auto max-w-270">
        <div className="grid grid-cols-1 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm bg-white dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-lg text-black dark:text-white">
                  Add Baptismal Reservation
                </h3>
              </div>
              <div className="p-7">
                <form onSubmit={handleSubmit}>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row"></div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Select date and Time
                    </label>
                    <DatePicker
                      placeholderText="Date and Time"
                      selected={start}
                      minDate={new Date(new Date().getTime() + 86400000)}
                      onChange={(date: Date | null) => setStart(date)}
                      // showTimeSelect
                      // timeIntervals={60}
                      // timeCaption="Time"
                      // timeFormat="h:mm aa"
                      dateFormat="MMMM d, yyyy"
                      // minTime={new Date(0, 0, 0, 8, 0, 0)} // 6:00 AM
                      // maxTime={new Date(0, 0, 0, 10, 0, 0)} // 5:00 PM
                      className="form-control"
                      id="end"
                      filterDate={isNotMonday}
                    />
                  </div>

                  <div className="mb-5.5 mt-2 hidden">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Select date and Time
                    </label>
                    <DatePicker
                      placeholderText="Select start date"
                      selected={end}
                      minDate={
                        new Date(
                          new Date().getFullYear(),
                          new Date().getMonth() + 3,
                          new Date().getDate()
                        )
                      }
                      // minDate={start}
                      onChange={(date: Date | null) => setEnd(date)} // Change to handle Date | null
                      // showTimeSelect
                      // minTime={new Date(0, 0, 0, 6, 0, 0)} // 6:00 AM
                      // maxTime={new Date(0, 0, 0, 17, 0, 0)}
                      // timeFormat="HH:mm"
                      dateFormat="MMMM d, yyyy"
                      className="form-control"
                      id="start"
                    />
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Select Status
                    </label>
                    <div className="relative bg-transparent dark:bg-form-input">
                      <select
                        value={description}
                        disabled
                        onChange={(e) => setDescription(e.target.value)}
                        className="relative  w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus-border-primary"
                      >
                        <option value="Available">Available</option>
                        <option value="Pending">Pending</option>
                        <option value="Not Available">Not Availble</option>
                      </select>
                    </div>
                    {/* <div className="mb-5.5 mt-2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Input Slot
                      </label>
                      <div className="relative bg-transparent dark:bg-form-input">
                      <select
                        value={slot}
                        onChange={(e) => setSlot(parseInt(e.target.value))}
                        className="relative  w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus-border-primary"
                      >
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                    </div> */}
                  </div>
                  <span className="flex justify-end">
                    <button
                      className={`bg-primary p-3 text-white rounded-sm w-24 ${
                        isLoading ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      disabled={isLoading}
                    >
                      {isLoading ? `Adding Reservations... ` : 'Add'}
                    </button>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBaptismal;
