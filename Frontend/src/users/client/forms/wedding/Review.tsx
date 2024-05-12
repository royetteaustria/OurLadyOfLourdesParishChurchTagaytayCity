import React from "react";

type FormData = {
  email: string;
  phoneNumber: string;
  groomName: string;
  groomAge: string;
  brideName: string;
  brideAge: string;
  Brideemail: string;
  BridephoneNumber: string;
  start: Date | string;
};

type ReviewProps = {
  data: FormData;
};

const Review: React.FC<ReviewProps> = ({ data }) => {
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

    return `${month} ${day}, ${year} ${hours}:${minutes} ${amPm}`;
  }
  return (
    <div
      className="bg-white p-6 dark:bg-boxdark dark:text-bodydark1"
      data-aos="fade-right"
    >
      <div className="px-4 sm:px-0 ml-6">
        <h3 className="text-base dark:text-bodydark1 font-semibold leading-7 text-black">
          Couple Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-black">
          Personal details of groom and bride.
        </p>
        <div className="px-4 py-6 sm:grid xl:grid-cols-3 sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">
            Date of Wedding
          </dt>
          <dd className="lg:ml-48  md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
          {formatDateTime(data.start) }
          </dd>
        </div>
        <div className="px-4 border-b mb-12 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">
            Where
          </dt>
          <dd className="lg:ml-48  md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
            Our Lady Of Lourdes Parish Church Tagaytay City
          </dd>
        </div>
      </div>
      <h1 className="mt-6 lg:ml-6 md:ml-6 sm:ml-6 xsm:ml-8 max-xsm:ml-8  dark:text-bodydark1 text-black font-bold">
        Groom Information
      </h1>
      <div className="ml-6 mt-6 border-t border-gray-100 text-black ">
        <dl className="divide-y divide-gray-100 ">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">
              Email
            </dt>
            <dd className="lg:ml-48  md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0 ">
              {data.email}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">
              Phone Number
            </dt>
            <dd className="lg:ml-48  md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
              {data.phoneNumber}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">
              Groom Name
            </dt>
            <dd className="lg:ml-48  md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
              {data.groomName}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
              Age
            </dt>
            <dd className="lg:ml-48  md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
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
            <dd className="lg:ml-48  md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
              {data.brideName}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
              Age
            </dt>
            <dd className="lg:ml-48  md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
              {data.brideAge}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">
              Email Address
            </dt>
            <dd className="lg:ml-48  md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
              {data.Brideemail}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
              Cellphone number
            </dt>
            <dd className="lg:ml-48  md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
              {data.BridephoneNumber}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Review;
