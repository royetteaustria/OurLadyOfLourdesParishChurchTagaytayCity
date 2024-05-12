import axios from "axios"
import { useState, useEffect} from "react"
import {  useParams } from "react-router-dom";

const Data = {
  _id: '',
  date: '',
  time: '',
  masstype: '',
  name: '',
  description: '',
  status: '',
  lastName: ''

}
const ClientInfo = () => {
    const {id} = useParams();
    const [data, setData] = useState(Data)
    useEffect(() => {
      axios
        .get(`http://localhost:5000/api/MassClient/singleClient/`+id)
        .then((res) => {
          console.log(res);
          setData((prev) => ({
            ...prev,
            date: res.data.date,
            time: res.data.time,
            masstype: res.data.masstype,
            name: res.data.name,
            status: res.data.status,
            description: res.data.description,
            lastName: res.data.lastName
          }));
        })
        .catch((err) => console.log(err));
    }, []);
  return (
    <>
    <div className="bg-white p-6 dark:bg-boxdark dark:text-bodydark1">
      <div className="px-4 sm:px-0 ml-6">
        <h3 className="text-base dark:text-bodydark1 font-semibold leading-7 text-black">Mass Client Info</h3>
      </div>
      <div className="ml-6 mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
        <div  className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Name</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.name}</dd>
        </div>
        <div  className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Last Name</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.lastName}</dd>
        </div>
        <div  className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Date of Mass</dt>
          
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.date}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Time of mass</dt>
         
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.time}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Mass type</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.masstype}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Description</dt>
          <dd className={data.description === 'Mass not be done' ? "lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-warning text-warning sm:col-span-2 sm:mt-0" : data.description === 'Mass Complete' ? "lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-success text-success sm:col-span-2 sm:mt-0": ''}>{data.description}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Status</dt>
          <dd className={data.status === 'Pending' ? "lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-warning dark:text-warning sm:col-span-2 sm:mt-0" : data.status === 'Complete' ? "lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-success text-success sm:col-span-2 sm:mt-0": '"lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0"'}>{data.status}</dd>
        </div>
      </dl>
      </div>
    </div>
    </>
  )
}

export default ClientInfo