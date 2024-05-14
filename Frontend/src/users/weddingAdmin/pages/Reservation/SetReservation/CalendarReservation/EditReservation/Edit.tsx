import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import toast from "react-hot-toast"
// import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Edit = () => {
  const [start, setStart] = useState<Date | null>(null); // Change type to Date | null
  const [end, setEnd] = useState<Date | null>(null); // Change type to Date | null
  
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const {id} = useParams()

  useEffect(() => {
    axios.get(`http://localhost:5000/api/CalendarReservation/${id}`)
      .then(res => {
        const eventData = res.data; // Assuming res.data is an object containing the event data
        setStart(new Date(eventData.start));
        setEnd(new Date(eventData.end)); // Convert start date to Date object
        setDescription(eventData.description); // Assuming description is the status
        console.log(eventData);
      })
      .catch(error => {
        console.error('Error fetching event details:', error);
      });
  }, [id]); // Include id as dependency
  

  const handleSubmit = async (e: React.FormEvent | null) => {
    if (!e) return;
    e.preventDefault();
    const editReservation = {
      start: start,
      end: end,
      description: description,
    };
    
    try {
      const res = await axios.put(`https://our-lady-of-lourdes-parish-church-tagaytay-city.vercel.app/api/CalendarReservation/` + id, editReservation)
      console.log(res)
      toast.success('Successfully Update')
      navigate('/weddingAdmin/Reservation')
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
                  Edit Wedding Reservation
                </h3>
              </div>
              <div className="p-7 px-12">
                <form onSubmit={handleSubmit}>
                  
                  {/* <div className="mb-5.5 mt-2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    >
                    Select date and Time
                    </label>
                    <ReactDatePicker
                    placeholderText="Date and Time"
                    selected={start}
                    minDate={new Date(new Date().getFullYear(), new Date().getMonth() + 3, new Date().getDate())}
                    onChange={(date: Date | null) => setStart(date)}
                    showTimeSelect
                    
                    timeIntervals={60}
                    timeCaption="Time"
                    timeFormat="h:mm aa"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    minTime={new Date(0, 0, 0, 6, 0, 0)} // 6:00 AM
                    maxTime={new Date(0, 0, 0, 17, 0, 0)} // 5:00 PM
                    className="form-control"
                    id="end"
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
                      // minDate={start}
                      onChange={(date: Date | null) => setEnd(date)} // Change to handle Date | null
                      showTimeSelect
                      minTime={new Date(0, 0, 0, 6, 0, 0)} // 6:00 AM
                      maxTime={new Date(0, 0, 0, 17, 0, 0)}
                      timeFormat="HH:mm"
                      dateFormat="MMMM d, yyyy h:mm aa"
                      className="form-control"
                      filterDate={(date) => {
                        const day = date.getDay();
                        return day !== 0 && day !== 1; // Disable Sunday (0) and Monday (1)
                        }}
                      id="start"
                    />
                  </div> */}
                  <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Status
                  </label>
                  <div className="relative bg-transparent dark:bg-form-input">
                  <select
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="relative w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus-border-primary"
                  >
                    <option value="Available">Available</option>
                    <option value="Pending">Pending</option>
                    <option value="Appointed">Appointed</option>
                  </select>
                  </div>
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

export default Edit;