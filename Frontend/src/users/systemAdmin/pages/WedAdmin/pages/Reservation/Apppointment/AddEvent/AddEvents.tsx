import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AddEvent = () => {
  const [title, setTitle] = useState('');
  const [end, setEnd] = useState<Date | null>(null); // Change type to Date | null
  const [start, setStart] = useState<Date | null>(null); // Change type to Date | null
  const [describe, setDescribe] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent | null) => {
    if (!e) return;
    e.preventDefault();
    const AddEvent = {
      title: title,
      start: start,
      end: end,
      describe: describe
    };
    axios.post('https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//api/Events', AddEvent)
    .then(res => {
      console.log(res);
      toast.success('Success add Appointment');
      navigate('/systemAdmin/SetAppointment');
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
                  Add Appointment
                </h3>
              </div>
              <div className="p-7">
                <form onSubmit={handleSubmit}>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row"></div>
                  <div className="mb-5.5 mt-2">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                    >
                      Title.
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Title"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-5.5 mt-2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    >
                    Start date
                    </label>
                    <DatePicker
                      placeholderText="Select start date"
                      selected={start}
                      onChange={(date: Date | null) => setStart(date)} // Change to handle Date | null
                      showTimeSelect
                      timeFormat="HH:mm"
                      dateFormat="MMMM d, yyyy h:mm aa"
                      className="form-control"
                      id="start"
                    />
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                    >
                      End date
                    </label>
                    <DatePicker
                      placeholderText="Select end date"
                      selected={end}
                      onChange={(date: Date | null) => setEnd(date)} // Change to handle Date | null
                      showTimeSelect
                      
                      timeFormat="HH:mm"
                      dateFormat="MMMM d, yyyy h:mm aa"
                      className="form-control"
                      id="end"
                    />
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                    >
                      Description <span className="text-danger">(Optional)</span>.
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Description"
                      value={describe}
                      onChange={(e) => setDescribe(e.target.value)}
                    />
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

export default AddEvent;