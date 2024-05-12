import axios from "axios"
import { useState, useEffect, FormEvent } from "react"
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

type create = {
  date: string,
  time: string,
  masstype: string,
  name: string,
}

const Data: create = {
  date: '',
  time: '',
  masstype: '',
  name: '',
}

const InquiriesInfo = () => {
  const {id} = useParams();
  const [data, setData] = useState(Data)
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(`http://localhost:5000/api/massInquiries/Info/`+id)
    .then(res => {
      console.log(res)
      setData(prev => ({
        ...prev,
        date: res.data.date,
        time: res.data.time,
        masstype: res.data.masstype,
        name: res.data.name,
      }))
    })
    .catch(err => console.log(err));
  },[id])

  const accept = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5000/api/MassClient/accept`, data);
      await axios.delete(`http://localhost:5000/api/massInquiries/reject/${id}`)
      console.log(res);
      toast.success('Successfully accept');
      navigate('/systemAdmin/MassClient');
    } catch (err) {
      console.log(err);
      toast.error('Failed to accept');
    }
  };
  function formatDateTime(date: Date | string) {
    if (typeof date === 'string') {
      date = new Date(date);
    }

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];

    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    const hours = date.getHours() % 12 || 12; // Get 12-hour format
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const amPm = date.getHours() >= 12 ? 'PM' : 'AM';

    return `${month} ${day}, ${year} ${hours}:${minutes} ${amPm}`;
  }
  return (
    <>
    <div className="bg-white p-6 dark:bg-boxdark dark:text-bodydark1">
      <div className="px-4 sm:px-0 ml-6">
        <h3 className="text-base dark:text-bodydark1 font-semibold leading-7 text-black">Mass Inquire Info</h3>
      </div>
      <div className="ml-6 mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
        <div  className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Name</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.name}</dd>
        </div>
        <div  className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Date of Mass</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{formatDateTime(data.date)}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Time of mass</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.time}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Mass type</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.masstype}</dd>
        </div>
      </dl>
      <div className="flex justify-end items-end pt-4 pr-12">
        <form onSubmit={accept}>
        <input type="text" className="hidden" value={data.time} onChange={(e) => setData((prevData) => ({ ...prevData, time: e.target.value }))}/>
        <input type="text" className="hidden" value={data.masstype} onChange={(e) => setData((prevData) => ({ ...prevData, masstype: e.target.value }))}/>
        <input type="text" className="hidden" value={data.date} onChange={(e) => setData((prevData) => ({ ...prevData, date: e.target.value }))}/>
        <input type="text" className="hidden" value={data.name} onChange={(e) => setData((prevData) => ({ ...prevData, name: e.target.value }))}/>
        <button type="submit" className="rounded-sm px-4 py-2 bg-primary text-white">
          Accept
        </button>
        </form>
      </div>

      </div>
    </div>
    </>
  )
}

export default InquiriesInfo