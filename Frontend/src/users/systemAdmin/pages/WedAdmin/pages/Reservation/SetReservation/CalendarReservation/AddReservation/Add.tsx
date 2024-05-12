import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Add = () => {
  const [start, setStart] = useState<Date | null>(null);
  const [end, setEnd] = useState<Date | null>(null); // Change type to Date | null
  const [Status, setStatus] = useState('Available');
  const [typeOfReservation, setTypeOfReservation] = useState('')
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent | null) => {
    if (!e) return;
    e.preventDefault();
    const AddReservation = {
      start: start,
      end: end,
      Status: Status,
    };
    await axios.post('http://localhost:5000/api/CalendarReservation/add', AddReservation)
    .then(res => {
      console.log(res);
      toast.success('Success add Reservation');
      navigate('/systemAdmin/setReservation');
    })
    .catch(err => {
      console.log(err);
      toast.error(`Please select date before now`);
    });
  };

  return (
    <>
      <div className="mx-auto max-w-270">
        <div className="grid grid-cols-1 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm bg-white dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-lg text-black dark:text-white">
                  Add Reservation
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
                    <DatePicker
                      placeholderText="Select start date"
                      selected={start}
                      minDate={new Date()}
                      onChange={(date: Date | null) => setStart(date)} // Change to handle Date | null
                      showTimeSelect
                      timeFormat="HH:mm"
                      dateFormat="MMMM d, yyyy h:mm aa"
                      className="form-control"
                      id="start"
                    />
                  </div>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row"></div>
                    <div className="mb-5.5 mt-2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    >
                    Select date and Time
                    </label>
                    <DatePicker
                      placeholderText="Select start date"
                      selected={end}
                      minDate={new Date()}
                      onChange={(date: Date | null) => setEnd(date)} // Change to handle Date | null
                      showTimeSelect
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
                    value={Status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="relative  w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus-border-primary"
                  >
                    <option value="Available">Available</option>
                    <option value="Pending">Pending</option>
                    <option value="Not Available">Not Availble</option>
                  </select>
                  </div>
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Type of Reservation
                  </label>
                  <div className="relative bg-transparent dark:bg-form-input">
                  <select
                    value={typeOfReservation}
                    onChange={(e) => setTypeOfReservation(e.target.value)}
                    className="relative  w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus-border-primary"
                  >
                    <option value="Wedding Reservation">Wedding Reservation</option>
                    <option value="Baptismal Reservation">Baptismal Reservation</option>
                  </select>
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

export default Add;