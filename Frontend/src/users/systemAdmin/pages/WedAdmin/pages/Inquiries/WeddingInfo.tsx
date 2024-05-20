import axios from "axios"
import { useState, useEffect, FormEvent } from "react"
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../../../../components/breadcrumbs/Breadcrum";



type accept = {
    email : string,
    phoneNumber: string,
    groomName: string,
    groomAge: string,
    groomBaptizedAt: string,
    groomAddress: string,
    groomNameOfParishChurch: string,
    groomaddressOfParishChurch: string,
    groomFatherName: string,
    groomMotherName: string,
    groomalreadyBaptist: string,
    groomalreadyKumpil: string,

    brideName: string,
    brideAge: string,
    brideBaptizedAt: string,
    brideAddress: string,
    brideNameOfParishChurch: string,
    brideaddressOfParishChurch: string,
    brideFatherName: string,
    brideMotherName: string,
    bridealreadyBaptist: string,
    bridealreadyKumpil: string,
    start: string,
    // date: string,
}

const Data: accept = {
    email : '',
    phoneNumber: '',
    groomName: '',
    groomAge: '',
    groomBaptizedAt: '',
    groomAddress: '',
    groomNameOfParishChurch: '',
    groomaddressOfParishChurch: '',
    groomFatherName: '',
    groomMotherName: '',
    groomalreadyBaptist: '',
    groomalreadyKumpil: '',

    brideName: '',
    brideAge: '',
    brideBaptizedAt: '',
    brideAddress: '',
    brideNameOfParishChurch: '',
    brideaddressOfParishChurch: '',
    brideFatherName: '',
    brideMotherName: '',
    bridealreadyBaptist: '',
    bridealreadyKumpil: '',
    start: '',
    // date: '',
}

const WeddingInfo = () => {
    const {id} = useParams()
    const [data, setData] = useState(Data)
    const navigate = useNavigate()

    useEffect(() => {
      axios.get(`https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/weddingInquiries/Info/`+id)
      .then(res => {
        console.log(res)
        setData(prev => ({
          ...prev,
          email : res.data.email,
          phoneNumber: res.data.phoneNumber,
          groomName: res.data.groomName,
          groomAge: res.data.groomAge,
          groomBaptizedAt: res.data.groomBaptizedAt,
          groomAddress: res.data.groomAddress,
          groomNameOfParishChurch: res.data.groomNameOfParishChurch,
          groomaddressOfParishChurch: res.data.groomaddressOfParishChurch,
          groomFatherName: res.data.groomFatherName,
          groomMotherName: res.data.groomMotherName,
          groomalreadyBaptist: res.data.groomalreadyBaptist,
          groomalreadyKumpil: res.data.groomalreadyKumpil,

          brideName: res.data.brideName,
          brideAge: res.data.brideAge,
          brideBaptizedAt: res.data.brideBaptizedAt,
          brideAddress: res.data.brideAddress,
          brideNameOfParishChurch: res.data.brideNameOfParishChurch,
          brideaddressOfParishChurch: res.data.brideaddressOfParishChurch,
          brideFatherName: res.data.brideFatherName,
          brideMotherName: res.data.brideMotherName,
          bridealreadyBaptist: res.data.bridealreadyBaptist,
          bridealreadyKumpil: res.data.bridealreadyKumpil,
          start: res.data.start,
          // date: res.data.date,
          }))
        })
      .catch(err => {
        console.log(err)
        })
      },[id])

    const accept = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/WeddingClient/accept`, data)
      await axios.delete(`https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/weddingInquiries/reject/${id}`)
      console.log(res)
      toast.success('Successfully accept');
      navigate('/systemAdmin/WeddingClient')
    }
    catch (err) {
      console.log(err);
      toast.error('Failed to accept');
      }
    }

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
    <Breadcrumb pageName="Wedding Inquiries Info"/>
    <div className="bg-white p-6 dark:bg-boxdark dark:text-bodydark1">
      <div className="px-4 sm:px-0 ml-6">
        <h3 className="text-base dark:text-bodydark1 font-semibold leading-7 text-black">Couple Information</h3>
        <p className="mt-1 dark:text-bodydark1 max-w-2xl text-sm leading-6 text-gray-500">Personal details of groom and bride.</p>
      </div>
        <h1 className="mt-6 lg:ml-6 md:ml-6 sm:ml-6 xsm:ml-8 max-xsm:ml-8  dark:text-bodydark1 text-black font-bold">Groom Information</h1>
        <div className="ml-6 mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Date of Wedding</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{formatDateTime(data.start)}</dd>
            </div>
            {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Time of Wedding</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.time}</dd>
            </div> */}
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Email</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.email}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Phone Number</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.phoneNumber}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Groom Name</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.groomName}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Age</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.groomAge}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Baptized At</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.groomBaptizedAt}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold dark:text-bodydark1 leading-6 text-black">Address</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.groomAddress}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Name of Parish Church</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.groomNameOfParishChurch}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Address Parish Church</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.groomaddressOfParishChurch}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Father Name</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.groomFatherName}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Mother Name</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.groomMotherName}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Already Baptist</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.groomalreadyBaptist}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Have a sacrament</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.groomalreadyKumpil}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm mt-8 font-semibold leading-6 dark:text-bodydark1 text-black">Bride Information</dt>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Bride Name</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.brideName}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Age</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.brideAge}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Baptized At</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.brideBaptizedAt}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold dark:text-bodydark1 leading-6 text-black">Address</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.brideAddress}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Name of Parish Church</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.brideNameOfParishChurch}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Address Parish Church</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.brideaddressOfParishChurch}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Father Name</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.brideFatherName}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Mother Name</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.brideMotherName}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Already Baptist</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.bridealreadyBaptist}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Have a sacrament</dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.bridealreadyKumpil}</dd>
            </div>
          </dl>
          <div className="flex justify-end items-end pt-4 pr-12">
            <form onSubmit={accept}>
            <input type="text" className="hidden" value={data.email} onChange={(e) => setData((prevData) => ({ ...prevData, email: e.target.value }))}/>
            <input type="text" className="hidden" value={data.phoneNumber} onChange={(e) => setData((prevData) => ({ ...prevData, phoneNumber: e.target.value }))}/>
            <input type="text" className="hidden" value={data.groomName} onChange={(e) => setData((prevData) => ({ ...prevData, groomName: e.target.value }))}/>
            <input type="text" className="hidden" value={data.groomAge} onChange={(e) => setData((prevData) => ({ ...prevData, groomAge: e.target.value }))}/>
            <input type="text" className="hidden" value={data.groomBaptizedAt} onChange={(e) => setData((prevData) => ({ ...prevData, groomBaptizedAt: e.target.value }))}/>
            <input type="text" className="hidden" value={data.groomAddress} onChange={(e) => setData((prevData) => ({ ...prevData, groomAddress: e.target.value }))}/>
            <input type="text" className="hidden" value={data.groomNameOfParishChurch} onChange={(e) => setData((prevData) => ({ ...prevData, groomNameOfParishChurch: e.target.value }))}/>
            <input type="text" className="hidden" value={data.groomaddressOfParishChurch} onChange={(e) => setData((prevData) => ({ ...prevData, groomaddressOfParishChurch: e.target.value }))}/>
            <input type="text" className="hidden" value={data.groomFatherName} onChange={(e) => setData((prevData) => ({ ...prevData, groomFatherName: e.target.value }))}/>
            <input type="text" className="hidden" value={data.groomMotherName} onChange={(e) => setData((prevData) => ({ ...prevData, groomMotherName: e.target.value }))}/>
            <input type="text" className="hidden" value={data.groomalreadyBaptist} onChange={(e) => setData((prevData) => ({ ...prevData, groomalreadyBaptist: e.target.value }))}/>
            <input type="text" className="hidden" value={data.groomalreadyKumpil} onChange={(e) => setData((prevData) => ({ ...prevData, groomalreadyKumpil: e.target.value }))}/>
            <input type="text" className="hidden" value={data.brideName} onChange={(e) => setData((prevData) => ({ ...prevData, brideName: e.target.value }))}/>
            {/* //      bride      */}
            <input type="text" className="hidden" value={data.brideAge} onChange={(e) => setData((prevData) => ({ ...prevData, brideAge: e.target.value }))}/>
            <input type="text" className="hidden" value={data.brideBaptizedAt} onChange={(e) => setData((prevData) => ({ ...prevData, brideBaptizedAt: e.target.value }))}/>
            <input type="text" className="hidden" value={data.brideAddress} onChange={(e) => setData((prevData) => ({ ...prevData, brideAddress: e.target.value }))}/>
            <input type="text" className="hidden" value={data.brideNameOfParishChurch} onChange={(e) => setData((prevData) => ({ ...prevData, brideNameOfParishChurch: e.target.value }))}/>
            <input type="text" className="hidden" value={data.brideaddressOfParishChurch} onChange={(e) => setData((prevData) => ({ ...prevData, brideaddressOfParishChurch: e.target.value }))}/>
            <input type="text" className="hidden" value={data.brideFatherName} onChange={(e) => setData((prevData) => ({ ...prevData, brideFatherName: e.target.value }))}/>
            <input type="text" className="hidden" value={data.brideMotherName} onChange={(e) => setData((prevData) => ({ ...prevData, brideMotherName: e.target.value }))}/>
            <input type="text" className="hidden" value={data.bridealreadyBaptist} onChange={(e) => setData((prevData) => ({ ...prevData, bridealreadyBaptist: e.target.value }))}/>
            <input type="text" className="hidden" value={data.bridealreadyKumpil} onChange={(e) => setData((prevData) => ({ ...prevData, bridealreadyKumpil: e.target.value }))}/>
            
            <input type="text" className="hidden" value={data.start} onChange={(e) => setData((prevData) => ({ ...prevData, time: e.target.value }))}/>
            {/* <input type="text" className="hidden" value={data.date} onChange={(e) => setData((prevData) => ({ ...prevData, date: e.target.value }))}/> */}
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

export default WeddingInfo