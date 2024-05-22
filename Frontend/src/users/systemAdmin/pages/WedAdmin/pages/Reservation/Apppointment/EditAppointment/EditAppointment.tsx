import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import toast from "react-hot-toast"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditAppointment = () => {
  const [title, setTitle] = useState('');
  const [end, setEnd] = useState<Date | null>(null); // Change type to Date | null
  const [start, setStart] = useState<Date | null>(null); // Change type to Date | null
  const [describe, setDescribe] = useState('');
  const navigate = useNavigate();
  const {id} = useParams()

  useEffect(() => {
    axios.get(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//api/Events/${id}`)
      .then(res => {
        const eventData = res.data; // Assuming your API returns the event data as an object
        setTitle(eventData.title);
        setStart(new Date(eventData.start)); // Convert start string to Date object
        setEnd(new Date(eventData.end)); // Convert end string to Date object
        setDescribe(eventData.describe);
      })
      .catch(error => {
        console.error('Error fetching event details:', error);
      });
  }, [id]); // Make sure to include id in the dependency array to re-fetch event details when id changes
  

  const handleSubmit = async (e: React.FormEvent | null) => {
    if (!e) return;
    e.preventDefault();
    const EditAppointment = {
      title: title,
      start: start,
      end: end,
      describe: describe
    };
    
    try {
      const res = await axios.put('https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//api/Events/'+id, EditAppointment)
      console.log(res)
      toast.success('Successfully Update')
      navigate('/systemAdmin/SetAppointment')
    } catch (error) {
      console.error(error);
      toast.error('Failed to update');
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
                  Edit Appointment
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
                      Description.
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
                      Save
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

export default EditAppointment;