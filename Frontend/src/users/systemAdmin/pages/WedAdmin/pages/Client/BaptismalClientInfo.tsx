import axios from "axios"
import { useState, useEffect} from "react"
import {  useParams } from "react-router-dom";
import Breadcrumb from "../../../../components/breadcrumbs/Breadcrum";


const Data = {
    _id: '',
    dateofBaptismal: '',
    name: '',
    lname: '',
    email: '',
    dateofBirth: '',
    birthPlace: '',
    cellphoneNumber: '',
    currentAddress: '',
    fatherName: '',
    fatherBirthOfPlace: '',
    motherName: '',
    motherBirthOfPlace: '',
    marriedPlace: '',
    status: '',
    description: '',
}

const BaptismalClientInfo = () => {
    const {id} = useParams()
    const [data, setData] = useState(Data)
    useEffect(() => {
        axios.get(`http://localhost:5000/api/BaptismalClient/singleClient/`+id)
        .then((res) => {
            console.log(res);
            setData((prev) => ({
                ...prev,
                _id: res.data._id,
                dateofBaptismal: res.data.dateofBaptismal,
                name: res.data.name,
                lname: res.data.lname,
                email: res.data.email,
                dateofBirth: res.data.dateofBirth,
                birthPlace: res.data.birthPlace,
                cellphoneNumber: res.data.cellphoneNumber,
                currentAddress: res.data.currentAddress,
                fatherName: res.data.fatherName,
                fatherBirthOfPlace: res.data.fatherBirthOfPlace,
                motherName: res.data.motherName,
                motherBirthOfPlace: res.data.motherBirthOfPlace,
                marriedPlace: res.data.marriedPlace,
                status: res.data.status,
                description: res.data.description,
            }))
        })
        .catch((err) => console.log(err))
    },[])
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
    <Breadcrumb pageName="Baptismal Client Info"/>
    <div className="bg-white p-6 dark:bg-boxdark dark:text-bodydark1">
    <div className="px-4 sm:px-0 ml-6 justify-between flex">
      <div>
      <h3 className="text-base dark:text-bodydark1 font-semibold leading-7 text-black">Couple Information</h3>
      <p className="mt-1 dark:text-bodydark1 max-w-2xl text-sm leading-6 text-gray-500">Personal details of groom and bride.</p>
      </div>
      <div>
        <h3 className="text-base dark:text-bodydark1 font-semibold leading-7 text-black">Baptismal Status</h3>
        <p className={data.status === 'Pending' ? "font-medium text-[#Ffa500] dark:text-[#Ffa500]" : data.status === 'Complete' ? "font-medium text-success dark:text-success" : "font-medium text-danger dark:text-danger"}>{data.status}</p>
      </div>
    {/* <div>
    <h3 className="text-base dark:text-bodydark1 mr-12 font-semibold leading-7 text-black">Description:</h3>
      <p className={data.description === 'Complete' ? "font-medium text-success dark:text-success" :  "font-medium text-warning dark:text-warning"}>{data.description}</p>
    </div> */}
    </div>
    <div className="ml-6 mt-6 border-t border-gray-100">
      <dl className="divide-y divide-gray-100">
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Date of Baptismal</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{formatDateTime(data.dateofBaptismal)}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Email</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.email}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Phone Number</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.cellphoneNumber}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Name</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.name}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Lastname</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.lname}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Birthdate</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.dateofBirth}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold dark:text-bodydark1 leading-6 text-black">Current Address</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.currentAddress}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Father name</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.fatherName}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Father Birth of place</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.fatherBirthOfPlace}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Mother Name</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.motherName}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Mother Birth of place</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.motherBirthOfPlace}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Place of married</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.marriedPlace}</dd>
        </div>
      </dl>
    </div>
  </div>
    </>
  )
}

export default BaptismalClientInfo