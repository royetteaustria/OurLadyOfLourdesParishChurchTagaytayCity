import axios from "axios"
import { useState, useEffect} from "react"
import {  useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumbs/Breadcrum";

const Data = {
  _id: '',
  email: '',
    phoneNumber: '',
    groomName: '',
    groomLastName: '',
    groomMiddleName: '',
    groomAge: '',
    groomBaptizedAt: '',
    groomAddress: '',
    groomNameOfParishChurch: '',
    groomaddressOfParishChurch: '',
    groomFatherName: '',
    groomMotherName: '',

    //certificates
    groomalreadyBaptist: '',
    groomalreadyKumpil: '',

    

    //bride
    brideName: '',
    brideLastName: '',
    brideMiddleName: '',
    brideAge: '',
    brideBaptizedAt: '',
    brideAddress: '',
    brideNameOfParishChurch: '',
    brideaddressOfParishChurch: '',
    brideFatherName: '',
    brideMotherName: '',
    Brideemail: '',
    BridephoneNumber: '',

    //certificates
    bridealreadyBaptist: '',
    bridealreadyKumpil: '',

    weddingStatus: '',

    
    start: '',
}

const ClientInfo = () => {
  const {id} = useParams();
    const [data, setData] = useState(Data)
    
    useEffect(() => {
      axios.get(`http://localhost:5000/api/WeddingClient/singleClient/`+id)
        .then((res) => {
          console.log(res);
          setData((prev) => ({
            ...prev,
            _id: res.data._id,
            email : res.data.email,
            phoneNumber: res.data.phoneNumber,
            groomName: res.data.groomName,
            groomMiddleName: res.data.groomMiddleName,
            groomLastName: res.data.groomLastName,
            groomAge: res.data.groomAge,
            groomBaptizedAt: res.data.groomBaptizedAt,
            groomAddress: res.data.groomAddress,
            groomNameOfParishChurch: res.data.groomNameOfParishChurch,
            groomaddressOfParishChurch: res.data.groomaddressOfParishChurch,
            groomFatherName: res.data.groomFatherName,
            groomMotherName: res.data.groomMotherName,
            groomalreadyBaptist: res.data.groomalreadyBaptist,
            groomalreadyKumpil: res.data.groomalreadyKumpil,
            Brideemail: res.data.Brideemail,
            brideLastName: res.data.brideLastName,
            brideMiddleName: res.data.brideMiddleName,
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
            weddingStatus: res.data.weddingStatus,
            start: res.data.start,
          }));
        })
        .catch((err) => console.log(err));
        
    }, []);


    
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
    <Breadcrumb pageName="Client Info" />
    <div className="bg-white p-6 dark:bg-boxdark dark:text-bodydark1">
    <div className="px-4 sm:px-0 ml-6 justify-between grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1">
      <div>
        <h3 className="text-base dark:text-bodydark1 font-semibold leading-7 text-black">Wedidng Status</h3>
        <p className={data.weddingStatus === 'Pending' ? "font-medium text-[#Ffa500] dark:text-[#Ffa500]" : data.weddingStatus === 'Complete' ? "font-medium text-success dark:text-success" : "font-medium text-danger dark:text-danger"}>{data.weddingStatus}</p>
      </div>
      <div>
      <h3 className="text-base dark:text-bodydark1 font-semibold leading-7 text-black">Date of Wedding:</h3>
        <p className={ "font-medium text-black dark:text-success"}>{formatDateTime(data.start)}</p>
      </div>
    </div>
    <h1 className="mt-6 lg:ml-6 md:ml-6 sm:ml-6 xsm:ml-8 max-xsm:ml-8  dark:text-bodydark1 text-black font-bold border-t pt-4">Groom Information</h1>
    <div className="ml-6 mt-6 border-t border-gray-100">
      <dl className="divide-y divide-gray-100">
      
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Email</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.email}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Phone Number</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.phoneNumber}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Groom Name</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.groomName}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Middle Name</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.groomMiddleName}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Last Name</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.groomLastName}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Age</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.groomAge}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Baptized At</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.groomBaptizedAt}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold dark:text-bodydark1 leading-6 text-black">Address</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.groomAddress}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Name of Parish Church</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.groomNameOfParishChurch}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Address Parish Church</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.groomaddressOfParishChurch}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Father Name</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.groomFatherName}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Mother Name</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.groomMotherName}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Already Baptist</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.groomalreadyBaptist}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Have a sacrament of confirmation</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.groomalreadyKumpil}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm mt-8 font-semibold leading-6 dark:text-bodydark1 text-black">Bride Information</dt>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Bride Name</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.brideName}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Age</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.brideAge}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Baptized At</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.brideBaptizedAt}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold dark:text-bodydark1 leading-6 text-black">Address</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.brideAddress}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Name of Parish Church</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.brideNameOfParishChurch}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Address Parish Church</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.brideaddressOfParishChurch}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Father Name</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.brideFatherName}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Mother Name</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.brideMotherName}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Already Baptist</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.bridealreadyBaptist}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Have a sacrament of confirmation</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.bridealreadyKumpil}</dd>
        </div>
      </dl>
    </div>
  </div>
    </>
  )
}

export default ClientInfo