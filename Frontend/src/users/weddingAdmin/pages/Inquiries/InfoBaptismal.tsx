import axios from "axios"
import Breadcrumb from "../../components/breadcrumbs/Breadcrum"
import { useEffect, useState, FormEvent } from "react"
import { useNavigate, useParams } from "react-router-dom"
import toast from "react-hot-toast"

type accept = {
  dateofBaptismal: string,
  name: string,
  lname: string,
  email: string,
  dateofBirth: string,
  birthPlace: string,
  cellphoneNumber: string,
  currentAddress: string,
  fatherName: string,
  fatherBirthOfPlace: string,
  motherName: string,
  motherBirthOfPlace: string,
  marriedPlace: string
  baptismalType: string
}

const Data: accept = {
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
  baptismalType: ''
}
const InfoBaptismal = () => {
  const {id} = useParams()
  const [data, setData] = useState(Data)
  const navigate = useNavigate()

  useEffect(() => {
     axios.get(`http://localhost:5000/api/baptismalInquiries/singleInquiries/` +id)
    .then(res => {
      console.log(res)
      setData(prev => ({
        ...prev,
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
        baptismalType: res.data.baptismalType
      }))
    })
  },[id])
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

    return `${month} ${day} ${year} ${hours}:${minutes} ${amPm}`;
  }

  function formatDate(date: Date | string) {
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

    return `${month} ${day} ${year}`;
  }
  const accept = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5000/api/BaptismalClient/accept`, data)
      await axios.delete(`http://localhost:5000/api/baptismalInquiries/reject/${id}`)
      console.log(res)
      toast.success('Successfully accept');
      navigate('/weddingAdmin/baptismalClient')
    }
    catch (err) {
      console.log(err);
      toast.error('Failed to accept');
      }
    }
  return (
    <>
    <Breadcrumb pageName="Baptismal Inquires Info"/>
    <div className="bg-white p-6 dark:bg-boxdark dark:text-bodydark1">
      <div className="px-4 sm:px-0 ml-6">
        <h3 className="text-base dark:text-bodydark1 font-semibold leading-7 text-black">Personal Information</h3>
      </div>
        <div className="ml-6 mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Date of baptismal</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{formatDateTime(data.dateofBaptismal)}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Type of baptismal</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.baptismalType}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Name</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.name}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Last name</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.lname}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Email</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.email}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Birthdate</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{formatDate(data.dateofBirth)}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">BirthPlace</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.birthPlace}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Phone number</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.cellphoneNumber}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Current Address</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.currentAddress}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold dark:text-bodydark1 leading-6 text-black">Father name</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.fatherName}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Father birth of place</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.fatherBirthOfPlace}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Mother name</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.motherName}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Mother birth of place</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.motherBirthOfPlace}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Married in</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.marriedPlace}</dd>
            </div>
            
          </dl>
          <div className="flex justify-end items-end pt-4 pr-12">
            <form onSubmit={accept}>
            <input type="text" className="hidden" value={data.email} onChange={(e) => setData((prevData) => ({ ...prevData, email: e.target.value }))}/>
            <input type="text" className="hidden" value={data.dateofBaptismal} onChange={(e) => setData((prevData) => ({ ...prevData, dateofBaptismal: e.target.value }))}/>
            <input type="text" className="hidden" value={data.name} onChange={(e) => setData((prevData) => ({ ...prevData, name: e.target.value }))}/>
            <input type="text" className="hidden" value={data.lname} onChange={(e) => setData((prevData) => ({ ...prevData, lname: e.target.value }))}/>
            <input type="text" className="hidden" value={data.dateofBirth} onChange={(e) => setData((prevData) => ({ ...prevData, dateofBirth: e.target.value }))}/>
            <input type="text" className="hidden" value={data.birthPlace} onChange={(e) => setData((prevData) => ({ ...prevData, birthPlace: e.target.value }))}/>
            <input type="text" className="hidden" value={data.cellphoneNumber} onChange={(e) => setData((prevData) => ({ ...prevData, cellphoneNumber: e.target.value }))}/>
            <input type="text" className="hidden" value={data.currentAddress} onChange={(e) => setData((prevData) => ({ ...prevData, currentAddress: e.target.value }))}/>
            <input type="text" className="hidden" value={data.fatherName} onChange={(e) => setData((prevData) => ({ ...prevData, fatherName: e.target.value }))}/>
            <input type="text" className="hidden" value={data.fatherBirthOfPlace} onChange={(e) => setData((prevData) => ({ ...prevData, fatherBirthOfPlace: e.target.value }))}/>
            <input type="text" className="hidden" value={data.motherName} onChange={(e) => setData((prevData) => ({ ...prevData, motherName: e.target.value }))}/>
            <input type="text" className="hidden" value={data.motherBirthOfPlace} onChange={(e) => setData((prevData) => ({ ...prevData, motherBirthOfPlace: e.target.value }))}/>
            <input type="text" className="hidden" value={data.marriedPlace} onChange={(e) => setData((prevData) => ({ ...prevData, marriedPlace: e.target.value }))}/>
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

export default InfoBaptismal