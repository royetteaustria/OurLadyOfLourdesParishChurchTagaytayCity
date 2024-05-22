import axios from "axios"
import { useState, useEffect} from "react"
import {  useParams } from "react-router-dom";
import Breadcrumb from "../../../../components/breadcrumbs/Breadcrum";

const Data = {
  _id: '',
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
  weddingStatus: '',
  paymentStatus: '',
  start: '',
  Bride_Baptismal_Certificate: '',
  Bride_Confirmation_Certificate: '',
  Bride_Birth_Certificate: '',
  Bride_CeNomar_Civil_Married: '',
  Bride_Cannonical_Application: '',
  Bride_Cannonical_Interview: '',
  Bride_Id_Picture: '',
  Bride_Marriage_Banns: '',
  Bride_Banns_Reply: '',
  Bride_Pre_Cana: '',
  Bride_Marriage_Contract: '',

  Groom_Baptismal_Certificate: '',
  Groom_Confirmation_Certificate: '',
  Groom_Birth_Certificate: '',
  Groom_CeNomar_Civil_Married: '',
  Groom_Cannonical_Application: '',
  Groom_Cannonical_Interview: '',
  Groom_Id_Picture: '',
  Groom_Marriage_Banns: '',
  Groom_Banns_Reply: '',
  Groom_Pre_Cana: '',
  Groom_Marriage_Contract: '',
  PartialPaid: '',
  LastPaid: ''
}

const ClientInfo = () => {
  const {id} = useParams();
    const [data, setData] = useState(Data)
    const [, setTotalPaid] = useState(0);

    // Function to calculate the total amount
    const calculateTotalPaid = () => {
      // Convert the PartialPaid and LastPaid values to numbers
      const partialPaid = parseInt(data.PartialPaid) || 0;
      const lastPaid = parseInt(data.LastPaid) || 0;
  
      // Calculate the total
      const total = partialPaid + lastPaid;
  
      // Update the state
      setTotalPaid(total);
    };
    useEffect(() => {
      calculateTotalPaid();
      axios.get(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//api/WeddingClient/singleClient/`+id)
        .then((res) => {
          console.log(res);
          setData((prev) => ({
            ...prev,
            _id: res.data._id,
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
            weddingStatus: res.data.weddingStatus,
            paymentStatus: res.data.paymentStatus,
            start: res.data.start,
           
            Groom_Baptismal_Certificate: res.data.Groom_Baptismal_Certificate,
            Groom_Confirmation_Certificate: res.data.Groom_Confirmation_Certificate,
            Groom_Birth_Certificate: res.data.Groom_Birth_Certificate,
            Groom_CeNomar_Civil_Married: res.data.Groom_CeNomar_Civil_Married,
            Groom_Cannonical_Application: res.data.Groom_Cannonical_Application,
            Groom_Cannonical_Interview: res.data.Groom_Cannonical_Interview,
            Groom_Id_Picture: res.data.Groom_Id_Picture,
            Groom_Marriage_Banns: res.data.Groom_Marriage_Banns,
            Groom_Banns_Reply: res.data.Groom_Banns_Reply,
            Groom_Pre_Cana: res.data.Groom_Pre_Cana,
            Groom_Marriage_Contract: res.data.Groom_Marriage_Contract,

            Bride_Baptismal_Certificate: res.data.Bride_Baptismal_Certificate,
            Bride_Confirmation_Certificate: res.data.Bride_Confirmation_Certificate,
            Bride_Birth_Certificate: res.data.Bride_Birth_Certificate,
            Bride_CeNomar_Civil_Married: res.data.Bride_CeNomar_Civil_Married,
            Bride_Cannonical_Application: res.data.Bride_Cannonical_Application,
            Bride_Cannonical_Interview: res.data.Bride_Cannonical_Interview,
            Bride_Id_Picture: res.data.Bride_Id_Picture,
            Bride_Marriage_Banns: res.data.Bride_Marriage_Banns,
            Bride_Banns_Reply: res.data.Bride_Banns_Reply,
            Bride_Pre_Cana: res.data.Bride_Pre_Cana,
            Bride_Marriage_Contract: res.data.Bride_Marriage_Contract,
            PartialPaid: res.data.PartialPaid,
            LastPaid: res.data.LastPaid,
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

  const handleViewFile = (fileUrl : string) => {
    window.open(fileUrl, '_blank');
  };
  return (
    <>
    <Breadcrumb pageName="Client Info" />
    <div className="bg-white p-6 dark:bg-boxdark dark:text-bodydark1">
    <div className="px-4 sm:px-0 ml-6 justify-between grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 xsm:grid-cols-1">
      <div>
        <h3 className="text-base dark:text-bodydark1 font-semibold leading-7 text-black">Wedidng Status</h3>
        <p className={data.weddingStatus === 'Pending' ? "font-medium text-[#Ffa500] dark:text-[#Ffa500]" : data.weddingStatus === 'Complete' ? "font-medium text-success dark:text-success" : "font-medium text-danger dark:text-danger"}>{data.weddingStatus}</p>
      </div>
      <div>
      <h3 className="text-base dark:text-bodydark1 font-semibold leading-7 text-black">Payment Status:</h3>
        <p className={data.paymentStatus === 'Fully Paid' ? "font-medium text-success dark:text-success" : data.paymentStatus === 'Partial Paid' ? "font-medium text-[#Ffa500] dark:text-[#Ffa500]" : "font-medium text-danger dark:text-danger"}>{data.paymentStatus}</p>
      </div>
      <div>
      <h3 className="text-base dark:text-bodydark1 font-semibold leading-7 text-black">Date of Wedding:</h3>
        <p className={ "font-medium text-black dark:text-success"}>{formatDateTime(data.start)}</p>
      </div>
      <div>
        <h3 className="text-base dark:text-bodydark1 font-semibold leading-7 text-black">Amount of Partial paid</h3>
        <p className={"font-medium text-black dark:text-white"}>₱ {data.PartialPaid}</p>
      </div>
      <div>
        <h3 className="text-base dark:text-bodydark1 font-semibold leading-7 text-black">Amount of Last paid</h3>
        <p className={"font-medium text-black dark:text-white"}>₱ {data.LastPaid}</p>
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
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Have a sacrament</dt>
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
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Have a sacrament</dt>
          <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.bridealreadyKumpil}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm mt-8 font-semibold leading-6 dark:text-bodydark1 text-black">Groom Requirements</dt>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Baptismal Certificate</dt>
          <dd className={data.Groom_Baptismal_Certificate === 'No uploaded file' ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0" : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"}>{data.Groom_Baptismal_Certificate} 
          <span className="ml-12">
        <span>
          <button
          onClick={() => handleViewFile(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//${data.Groom_Baptismal_Certificate}`)}
          className={data.Groom_Baptismal_Certificate === 'No uploaded file' ? 'hidden' : "ml-4 text-white bg-primary rounded-md p-2"}
        >
          View file
        </button>
        </span>  
          </span></dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Confirmation Certificate</dt>
          <dd className={data.Groom_Confirmation_Certificate === 'No uploaded file' ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0" : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"}>{data.Groom_Confirmation_Certificate}
          <span>
          <button
          onClick={() => handleViewFile(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//${data.Groom_Confirmation_Certificate}`)}
          className={data.Groom_Confirmation_Certificate === 'No uploaded file' ? 'hidden' : "ml-35 text-white bg-primary rounded-md p-2"}
        >
          View file
        </button>
        </span>  
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Birth Certificate</dt>
          <dd className={data.Groom_Birth_Certificate === 'No uploaded file' ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0" : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"}>{data.Groom_Birth_Certificate}
          <span>
          <button
          onClick={() => handleViewFile(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//${data.Groom_Birth_Certificate}`)}
          className={data.Groom_Birth_Certificate === 'No uploaded file' ? 'hidden' : "ml-35 text-white bg-primary rounded-md p-2"}
        >
          View file
        </button>
        </span>  
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">CeNoMar/Civilly Married</dt>
          <dd className={data.Groom_CeNomar_Civil_Married === 'No uploaded file' ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0" : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"}>{data.Groom_CeNomar_Civil_Married}
          <span>
          <button
          onClick={() => handleViewFile(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//${data.Groom_CeNomar_Civil_Married}`)}
          className={data.Groom_CeNomar_Civil_Married === 'No uploaded file' ? 'hidden' : "ml-35 text-white bg-primary rounded-md p-2"}
        >
          View file
        </button>
        </span>  
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Cannonical Application</dt>
          <dd className={data.Groom_Cannonical_Application === 'No uploaded file' ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0" : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"}>{data.Groom_Cannonical_Application}
          <span>
          <button
          onClick={() => handleViewFile(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//${data.Groom_Cannonical_Application}`)}
          className={data.Groom_Cannonical_Application === 'No uploaded file' ? 'hidden' : "ml-4 text-white bg-primary rounded-md p-2"}
        >
          View file
        </button>
        </span>  
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Cannonical Interview</dt>
          <dd className={data.Groom_Cannonical_Interview === 'Not complete' ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0" : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"}>{data.Groom_Cannonical_Interview}
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Id Picture</dt>
          <dd className={data.Groom_Id_Picture === 'No uploaded file' ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0" : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"}>{data.Groom_Id_Picture}
          <span>
          <button
          onClick={() => handleViewFile(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//${data.Groom_Id_Picture}`)}
          className={data.Groom_Id_Picture === 'No uploaded file' ? 'hidden' : "ml-4 text-white bg-primary rounded-md p-2"}
        >
          View file
        </button>
        </span>
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Marriage Banns</dt>
          <dd className={data.Groom_Marriage_Banns === 'No uploaded file' ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0" : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"}>{data.Groom_Marriage_Banns}
          <span>
          <button
          onClick={() => handleViewFile(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//${data.Groom_Marriage_Banns}`)}
          className={data.Groom_Marriage_Banns === 'No uploaded file' ? 'hidden' : "ml-4 text-white bg-primary rounded-md p-2"}
        >
          View file
        </button>
        </span>
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Banns Reply</dt>
          <dd className={data.Groom_Banns_Reply === 'No uploaded file' ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0" : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"}>{data.Groom_Banns_Reply}
          <span>
          <button
          onClick={() => handleViewFile(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//${data.Groom_Banns_Reply}`)}
          className={data.Groom_Banns_Reply === 'No uploaded file' ? 'hidden' : "ml-4 text-white bg-primary rounded-md p-2"}
        >
          View file
        </button>
        </span>
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Pre Cana</dt>
          <dd className={data.Groom_Pre_Cana === 'Not complete' ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0" : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"}>{data.Groom_Pre_Cana}
          
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Licance | Marriage Contract</dt>
          <dd className={data.Groom_Marriage_Contract === 'No uploaded file' ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0" : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"}>{data.Groom_Marriage_Contract}
          <span>
          <button
          onClick={() => handleViewFile(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//${data.Groom_Marriage_Contract}`)}
          className={data.Groom_Marriage_Contract === 'No uploaded file' ? 'hidden' : "ml-4 text-white bg-primary rounded-md p-2"}
        >
          View file
        </button>
        </span>
          </dd>
        </div>

        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm mt-8 font-semibold leading-6 dark:text-bodydark1 text-black">Bride Requirements</dt>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Baptismal Certificate</dt>
          <dd className={data.Bride_Baptismal_Certificate === 'No uploaded file' ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0" : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"}>{data.Bride_Baptismal_Certificate}
          <span>
          <button
          onClick={() => handleViewFile(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//${data.Bride_Baptismal_Certificate}`)}
          className={data.Bride_Baptismal_Certificate === 'No uploaded file' ? 'hidden' : "ml-4 text-white bg-primary rounded-md p-2"}
        >
          View file
        </button>
        </span>
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Confirmation Certificate</dt>
          <dd className={data.Bride_Confirmation_Certificate === 'No uploaded file' ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0" : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"}>{data.Bride_Confirmation_Certificate}
          <span>
          <button
          onClick={() => handleViewFile(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//${data.Bride_Confirmation_Certificate}`)}
          className={data.Bride_Confirmation_Certificate === 'No uploaded file' ? 'hidden' : "ml-4 text-white bg-primary rounded-md p-2"}
        >
          View file
        </button>
        </span>
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Birth Certificate</dt>
          <dd className={data.Bride_Birth_Certificate === 'No uploaded file' ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0" : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"}>{data.Bride_Birth_Certificate}
          <span>
          <button
          onClick={() => handleViewFile(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//${data.Bride_Birth_Certificate}`)}
          className={data.Bride_Birth_Certificate === 'No uploaded file' ? 'hidden' : "ml-4 text-white bg-primary rounded-md p-2"}
        >
          View file
        </button>
        </span>
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">CeNoMar/Civil Married</dt>
          <dd className={data.Bride_CeNomar_Civil_Married === 'No uploaded file' ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0" : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"}>{data.Bride_CeNomar_Civil_Married}
          <span>
          <button
          onClick={() => handleViewFile(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//${data.Bride_CeNomar_Civil_Married}`)}
          className={data.Bride_CeNomar_Civil_Married === 'No uploaded file' ? 'hidden' : "ml-35 text-white bg-primary rounded-md p-2"}
        >
          View file
        </button>
        </span>  
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Cannonical Application</dt>
          <dd className={data.Bride_Cannonical_Application === 'No uploaded file' ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0" : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"}>{data.Bride_Cannonical_Application}
          <span>
          <button
          onClick={() => handleViewFile(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//${data.Bride_Cannonical_Application}`)}
          className={data.Bride_Cannonical_Application === 'No uploaded file' ? 'hidden' : "ml-4 text-white bg-primary rounded-md p-2"}
        >
          View file
        </button>
        </span>  
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Cannonical Interview</dt>
          <dd className={data.Bride_Cannonical_Interview === 'Not complete' ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0" : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"}>{data.Bride_Cannonical_Interview}
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Id Picture</dt>
          <dd className={data.Bride_Id_Picture === 'No uploaded file' ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0" : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"}>{data.Bride_Id_Picture}
          <span>
          <button
          onClick={() => handleViewFile(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//${data.Bride_Id_Picture}`)}
          className={data.Bride_Id_Picture === 'No uploaded file' ? 'hidden' : "ml-4 text-white bg-primary rounded-md p-2"}
        >
          View file
        </button>
        </span>
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Marriage Banns</dt>
          <dd className={data.Bride_Marriage_Banns === 'No uploaded file' ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0" : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"}>{data.Bride_Marriage_Banns}
          <span>
          <button
          onClick={() => handleViewFile(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//${data.Bride_Marriage_Banns}`)}
          className={data.Bride_Marriage_Banns === 'No uploaded file' ? 'hidden' : "ml-4 text-white bg-primary rounded-md p-2"}
        >
          View file
        </button>
        </span>
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Banns Reply</dt>
          <dd className={data.Bride_Banns_Reply === 'No uploaded file' ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0" : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"}>{data.Bride_Banns_Reply}
          <span>
          <button
          onClick={() => handleViewFile(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//${data.Bride_Banns_Reply}`)}
          className={data.Bride_Banns_Reply === 'No uploaded file' ? 'hidden' : "ml-4 text-white bg-primary rounded-md p-2"}
        >
          View file
        </button>
        </span>
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Pre Cana</dt>
          <dd className={data.Bride_Pre_Cana === 'Not complete' ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0" : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"}>{data.Bride_Pre_Cana}
          
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Licance | Marriage Contract</dt>
          <dd className={data.Bride_Marriage_Contract === 'No uploaded file' ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0" : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"}>{data.Bride_Marriage_Contract}
          <span>
          <button
          onClick={() => handleViewFile(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//${data.Bride_Marriage_Contract}`)}
          className={data.Bride_Marriage_Contract === 'No uploaded file' ? 'hidden' : "ml-4 text-white bg-primary rounded-md p-2"}
        >
          View file
        </button>
        </span>
          </dd>
        </div>
      </dl>
    </div>
  </div>
    </>
  )
}

export default ClientInfo