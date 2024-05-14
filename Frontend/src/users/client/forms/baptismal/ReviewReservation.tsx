type BaptismalData = {
  dateofBaptismal: Date | null;
  name: string;
  lname: string;
  email: string;
  dateofBirth: string;
  birthPlace: string;
  cellphoneNumber: string;
  currentAddress: string;
  fatherName: string;
  fatherBirthOfPlace: string;
  motherName: string;
  motherBirthOfPlace: string;
  marriedPlace: string;
  baptismalType: string;
};

type ReviewProps = {
  data: BaptismalData;
};

const ReviewReservation: React.FC<ReviewProps> = ({ data }) => {
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
    <div className="bg-white p-6 dark:bg-boxdark dark:text-bodydark1">
      <div className="px-4 sm:px-0 ml-6">
        <h3 className="text-base dark:text-bodydark1 font-semibold leading-7 text-black">
          Inquiries Details
        </h3>
        <p className="mt-1 dark:text-bodydark1 max-w-2xl text-sm leading-6 text-gray-500">
          Review your information.
        </p>
      </div>

      <div className="ml-6 mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">
              Date of Baptismal
            </dt>
            <dd className="lg:ml-12 md:ml-2 sm:ml-4 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
            {formatDateTime(data.dateofBaptismal ? data.dateofBaptismal : new Date())}
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">
              Email
            </dt>
            <dd className="lg:ml-12 md:ml-2 sm:ml-4 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
              {data.email}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">
              Phone Number
            </dt>
            <dd className="lg:ml-12 md:ml-2 sm:ml-4 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
              {data.cellphoneNumber}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">
              Name
            </dt>
            <dd className="lg:ml-12 md:ml-2 sm:ml-4 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
              {data.name}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">
              Last Name
            </dt>
            <dd className="lg:ml-12 md:ml-2 sm:ml-4 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
              {data.lname}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
              Birth date
            </dt>
            <dd className="lg:ml-12 md:ml-2 sm:ml-4 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
              {data.dateofBirth}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
              Birth Place
            </dt>
            <dd className="lg:ml-12 md:ml-2 sm:ml-4 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
              {data.birthPlace}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-semibold dark:text-bodydark1 leading-6 text-black">
              Address
            </dt>
            <dd className="lg:ml-12 md:ml-2 sm:ml-4 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
              {data.currentAddress}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
              Baptismal Type
            </dt>
            <dd className="lg:ml-12 md:ml-2 sm:ml-4 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
              {data.baptismalType}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
              Father Name
            </dt>
            <dd className="lg:ml-12 md:ml-2 sm:ml-4 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
              {data.fatherName}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
              Father Birth place
            </dt>
            <dd className="lg:ml-12 md:ml-2 sm:ml-4 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
              {data.fatherBirthOfPlace}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
              Mother Name
            </dt>
            <dd className="lg:ml-12 md:ml-2 sm:ml-4 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
              {data.motherName}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
              Mother Birth Palce
            </dt>
            <dd className="lg:ml-12 md:ml-2 sm:ml-4 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
              {data.motherBirthOfPlace}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
              Place of married
            </dt>
            <dd className="lg:ml-12 md:ml-2 sm:ml-4 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
              {data.marriedPlace}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ReviewReservation;
