import axios from "axios"
import { useEffect, useState, FormEvent } from "react"
import { useNavigate, useParams } from "react-router-dom"
import toast from "react-hot-toast"
import Breadcrumb from "../../../../components/breadcrumbs/Breadcrum"

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
  marriedPlace: ''
}
const InfoBaptismal = () => {
  const {id} = useParams()
  const [data, setData] = useState(Data)
  const navigate = useNavigate()

  useEffect(() => {
     axios.get(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app/api/baptismalInquiries/singleInquiries/` +id)
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
      }))
    })
  },[id])

  const accept = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app/api/BaptismalClient/accept`, data)
      await axios.delete(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app/api/baptismalInquiries/reject/${id}`)
      console.log(res)
      toast.success('Successfully accept');
      navigate('/systemAdmin/baptismalClient')
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
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.dateofBaptismal}</dd>
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
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.dateofBirth}</dd>
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