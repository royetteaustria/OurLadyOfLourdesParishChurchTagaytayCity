import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumbs/Breadcrum";

type accept = {
  email: string;
  phoneNumber: string;
  groomName: string;
  groomAge: string;
  groomLastName: string;
  groomMiddleName: string;

  brideName: string;
  brideAge: string;
  start: string;
  date: string;
  BridephoneNumber: string;
  Brideemail: string;
  brideLastName: string;
  brideMiddleName: string;
};

const Data: accept = {
  brideLastName: '',
  brideMiddleName: '',
  email: "",
  groomLastName: '',
  groomMiddleName: '',
  phoneNumber: "",
  groomName: "",
  groomAge: "",
  brideName: "",
  brideAge: "",
  BridephoneNumber: "",
  Brideemail: "",
  start: "",
  date: "",
};

const WeddingInfo = () => {
  const { id } = useParams();
  const [data, setData] = useState(Data);
  // const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//api/weddingInquiries/Info/` + id)
      .then((res) => {
        console.log(res);
        setData((prev) => ({
          ...prev,
          email: res.data.email,
          phoneNumber: res.data.phoneNumber,
          groomName: res.data.groomName,
          groomAge: res.data.groomAge,
         groomLastName: res.data.groomLastName,
         groomMiddleName: res.data.groomMiddleName,

          brideName: res.data.brideName,
          brideAge: res.data.brideAge,
          Brideemail: res.data.Brideemail,
          brideLastName: res.data.brideLastName,
          brideMiddleName: res.data.brideMiddleName,
          BridephoneNumber: res.data.BridephoneNumber,
          start: res.data.start,
          // date: res.data.date,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  function formatDateTime(date: Date | string) {
    if (typeof date === "string") {
      date = new Date(date);
    }

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    const hours = date.getHours() % 12 || 12; // Get 12-hour format
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const amPm = date.getHours() >= 12 ? "PM" : "AM";

    return `${month} ${day}, ${year} - ${hours}:${minutes} ${amPm}`;
  }
  return (
    <>
      <Breadcrumb pageName="Wedding Inquiries Info" />
      <div className="bg-white p-6 dark:bg-boxdark dark:text-bodydark1">
        <div className="px-4 sm:px-0 ml-6 grid grid-cols-2">
          <div>
            <h3 className="text-base dark:text-bodydark1 font-semibold leading-7 text-black">
              Couple Information
            </h3>
            <p className="mt-1 dark:text-bodydark1 max-w-2xl text-sm leading-6 text-black">
              Personal details of groom and bride.
            </p>
          </div>
          <div className="px-4 py-6 ml-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm dark:text-bodydark1 leading-6 text-black">
              <span className="font-semibold">Date of Wedding</span> <br />
              <span><p className="text-normal">{formatDateTime(data.start)}</p></span>
            </dt>
          </div>
        </div>
        <h1 className="mt-6 lg:ml-6 md:ml-6 sm:ml-6 xsm:ml-8 max-xsm:ml-8  dark:text-bodydark1 text-black font-bold">
          Groom Information
        </h1>
        <div className="ml-6 mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">
                Email
              </dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
                {data.email}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">
                Phone Number
              </dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
                {data.phoneNumber}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">
                Groom Name
              </dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
                {data.groomName}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">
                Middle Name
              </dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
                {data.groomMiddleName}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">
                Last Name
              </dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
                {data.groomLastName}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
                Age
              </dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
                {data.groomAge}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm mt-8 font-semibold leading-6 dark:text-bodydark1 text-black">
                Bride Information
              </dt>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">
                Bride Name
              </dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
                {data.brideName}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">
                Middle Name
              </dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
                {data.brideMiddleName}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">
                Last Name
              </dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
                {data.brideLastName}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
                Age
              </dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
                {data.brideAge}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
                Email Address
              </dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
                {data.Brideemail}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold dark:text-bodydark1 leading-6 text-black">
                Phone Number
              </dt>
              <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
                {data.BridephoneNumber}
              </dd>
            </div>
          </dl>
          <div className="flex justify-end items-end p-12">
              <button
                type="submit"
                className="rounded-sm px-4 py-2 bg-primary text-white"
              >
                <Link to={`/weddingAdmin/AccceptWedding/${id}`}>Accept</Link>
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeddingInfo;
