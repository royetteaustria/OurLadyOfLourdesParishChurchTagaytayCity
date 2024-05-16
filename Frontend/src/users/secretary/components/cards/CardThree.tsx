import { FaRegAddressBook } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CardThree = () => {
  const [totalBaptized, setTotalBaptized] = useState(0);

  useEffect(() => {
    // Fetch data from API using Axios
    axios.get(`https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app//api/BaptismalRecords/bapstismalRecordList`)
      .then((response) => {
        // Assuming the API response is an array of baptismal records
        const { data } = response;
        if (data && Array.isArray(data)) {
          setTotalBaptized(data.length);
        } else {
          console.error('Invalid API response:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <FaRegAddressBook size={15} style={{ color: '#3C50E0' }} />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {totalBaptized}
          </h4>
          <span className="text-sm font-medium">Total Baptized</span> <br />
          <span className="text-xs font-medium">SY: 01-01-2019</span>
        </div>
      </div>
    </div>
  );
};

export default CardThree;
