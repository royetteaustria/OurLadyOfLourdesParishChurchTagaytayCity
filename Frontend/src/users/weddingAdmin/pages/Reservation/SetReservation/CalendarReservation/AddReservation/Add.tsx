import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
// import "react-datepicker/dist/react-datepicker.css";

const Add = () => {
  
  const [start, setStart] = useState<Date | null>(null);
  const [end, setEnd] = useState<Date | null>(null);
  const [description, setDescription] = useState("Available");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  
  useEffect(() => {
    // Update end when start changes
    if (start !== null) {
      setEnd(start);
    }
  }, [start]);

  const getFirstWednesdayOfMonth = (date : Date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const dayOfWeek = firstDay.getDay();
    const offset = dayOfWeek <= 3 ? 3 - dayOfWeek : 10 - dayOfWeek; // Adjusting offset
    const firstWednesday = new Date(firstDay.setDate(firstDay.getDate() + offset));
    return firstWednesday;
};


const getFirstFridayOfMonth = (date : Date) => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const dayOfWeek = firstDay.getDay();
  const offset = dayOfWeek <= 5 ? 5 - dayOfWeek : 12 - dayOfWeek; // Adjusting offset
  const firstFriday = new Date(firstDay.setDate(firstDay.getDate() + offset));
  return firstFriday;
};


  const getLastMondayOfMonth = (date: Date) => {
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const dayOfWeek = lastDay.getDay();
    const offset = dayOfWeek === 1 ? 0 : 7 - dayOfWeek;
    const lastMonday = new Date(lastDay.setDate(lastDay.getDate() - offset));
    return lastMonday;
  };

  

  const isHoliday = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-based
    const day = date.getDate();

    // Add more holiday conditions here
    const holidayDates = [
      `${month}/1/${year}`, // May 1
      `${month}/30/${year}`, // November 30
      getLastMondayOfMonth(date).toDateString, // Last Monday of August
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

    // If it's a holiday or Monday or Sunday, prevent submission
    if (isHolidayDate || start.getDay() === 0 || start.getDay() === 1) {
      toast.error("Cant set reservation on holidays");
      return;
    }
    const reservations = [];
    const currentDate = new Date(start.getFullYear(), start.getMonth(), start.getDate()); // Start from the selected date
    const endDate = new Date(start.getFullYear() + 1, start.getMonth(), start.getDate() - 1); // End on the last day of the same month next year
    // const loadingToast = toast.loading(<span className="text-primary p-4 ">Adding Reservations...</span>, {
    //   position: 'top-right',
    //    // Add transition property

    // });
    setIsLoading(true);
    while (currentDate <= endDate) {
      const dayOfWeek = currentDate.getDay();
      // const dayOfMonth = currentDate.getDate();

      if (dayOfWeek !== 0 && dayOfWeek !== 1 && !isHoliday(currentDate)) {
        // Not Sunday, Monday, or a holiday
        const timeSlots = getTimeSlots(currentDate);

        for (const timeSlot of timeSlots) {
          const startTime = new Date(`${currentDate.toDateString()} ${timeSlot}`);
          const endTime = new Date(`${currentDate.toDateString()} ${timeSlot}`);
          reservations.push({
            start: startTime,
            end: endTime,
            description: "Available",
          });
        }
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    try {
      // Send the array of reservations to the backend
      await Promise.all(
        reservations.map(async (reservation) => {
          await axios.post("https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/CalendarReservation/add", reservation);
        })
      );
      // Success toast
      toast.success("Success adding reservations");
      navigate("/weddingAdmin/Reservation");
    } catch (err) {
      console.error(err);
      // Error toast
      toast.error("Error adding reservations");
    } finally {
      // Close loading toast when done
      setIsLoading(false);
      
    }
  };

  const getTimeSlots = (date: Date) => {
    const dayOfWeek = date.getDay();
    // const dayOfMonth = date.getDate();
    const isFirstWednesday = date.toDateString() === getFirstWednesdayOfMonth(date).toDateString();
    const isFirstFriday = date.toDateString() === getFirstFridayOfMonth(date).toDateString();
  
    switch (dayOfWeek) {
      case 2: // Tuesday
        return ["8:00 AM", "10:00 AM", "1:00 PM", "3:00 PM"];
      case 3: // Wednesday
        return isFirstWednesday ? ["8:00 AM", "10:00 AM", "2:00 PM"] : ["8:00 AM", "10:00 AM", "1:00 PM", "3:00 PM"];
      case 4: // Thursday
        return ["8:00 AM", "10:00 AM", "1:00 PM", "3:00 PM"];
      case 5: // Friday
        return isFirstFriday ? ["8:00 AM", "10:00 AM", "2:00 PM"] : ["8:00 AM", "10:00 AM", "1:00 PM", "3:00 PM"];
      case 6: // Saturday
        return ["9:00 AM", "2:00 PM"];
      default:
        return [];
    }
  };

  
  return (
    <>
      <div className="mx-auto max-w-270">
        <div className="grid grid-cols-1 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm bg-white dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-lg text-black dark:text-white">
                  Add Wedding Reservation
                </h3>
              </div>
              <div className="p-7">
                <form onSubmit={handleSubmit}>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row"></div>
                    <div className="mb-5.5 mt-2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    >
                    Select date and Time
                    </label>
                    <ReactDatePicker
                        placeholderText="Date and Time"
                        selected={start}
                        minDate={new Date(new Date().getFullYear() + 1, new Date().getMonth(), new Date().getDate())}
                        onChange={(date: Date | null) => setStart(date)}
                        dateFormat="MMMM d, yyyy"
                        className="form-control"
                        id="end"
                        filterDate={(date) => {
                            const day = date.getDay();
                            return day !== 0 && day !== 1; // Disable Sunday (0) and Monday (1)
                        }}
                    />

        
                  </div>
                  
                    <div className="mb-5.5 mt-2 hidden">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    >
                    Select date and Time
                    </label>
                    <ReactDatePicker
                      placeholderText="Select start date"
                      selected={end}
                      minDate={new Date(new Date().getFullYear(), new Date().getMonth() + 3, new Date().getDate())}
                      onChange={(date: Date | null) => setEnd(date)} // Change to handle Date | null
                      // showTimeSelect
                      // minTime={new Date(0, 0, 0, 6, 0, 0)} // 6:00 AM
                      // maxTime={new Date(0, 0, 0, 17, 0, 0)}
                      // timeFormat="HH:mm"
                      dateFormat="MMMM d, yyyy h:mm aa"
                      className="form-control"
                      id="start"
                    />
                  </div>
                  <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Status
                  </label>
                  <div className="relative bg-transparent dark:bg-form-input">
                  <select
                    disabled
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="relative  w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus-border-primary"
                  >
                    <option value="Available">Available</option>
                  </select>
                  </div>
                </div>
                <span className="flex justify-end">
                    <button
                      className={`bg-primary p-3 text-white  rounded-sm w-24 ${
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

export default Add;
