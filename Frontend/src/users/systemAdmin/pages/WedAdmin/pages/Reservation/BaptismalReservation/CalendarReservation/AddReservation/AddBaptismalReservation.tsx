import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddBaptismal = () => {
  const [start, setStart] = useState<Date | null>(null);
  const [end, setEnd] = useState<Date | null>(null);
  const [slot, setSlot] = useState<number>(0);
  const [description, setDescription] = useState("Available");
  const navigate = useNavigate();

  useEffect(() => {
    // Update end when start changes
    if (start !== null) {
      setEnd(start);
    }
  }, [start]);

  const handleSubmit = async (e: React.FormEvent | null) => {
    if (!e) return;
    e.preventDefault();
    const AddReservation = {
      start: start,
      end: end,
      description: description,
      slot: slot,
    };
    await axios
      .post("https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app/api/BaptismalCalendar/add", AddReservation)
      .then((res) => {
        console.log(res);
        toast.success("Success add Reservation");
        navigate("/weddingAdmin/BaptismalReservation");
      })
      .catch((err) => {
        console.log(err);
        toast.error(`Failed to add Reservation`);
      });
  };
  const isNotMonday = (date : Date) => {
    const day = date.getDay();
    return day !== 1; // 1 represents Monday
  };
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
                      showTimeSelect
                      timeIntervals={60}
                      timeCaption="Time"
                      timeFormat="h:mm aa"
                      dateFormat="MMMM d, yyyy h:mm aa"
                      minTime={new Date(0, 0, 0, 8, 0, 0)} // 6:00 AM
                      maxTime={new Date(0, 0, 0, 10, 0, 0)} // 5:00 PM
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
                      showTimeSelect
                      minTime={new Date(0, 0, 0, 6, 0, 0)} // 6:00 AM
                      maxTime={new Date(0, 0, 0, 17, 0, 0)}
                      timeFormat="HH:mm"
                      dateFormat="MMMM d, yyyy h:mm aa"
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
                        onChange={(e) => setDescription(e.target.value)}
                        className="relative  w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus-border-primary"
                      >
                        <option value="Available">Available</option>
                        <option value="Pending">Pending</option>
                        <option value="Not Available">Not Availble</option>
                      </select>
                    </div>
                    <div className="mb-5.5 mt-2">
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
                    </div>
                  </div>
                  <span className="flex justify-end">
                    <button className="bg-primary p-3 text-white rounded-sm w-24">
                      Add
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
