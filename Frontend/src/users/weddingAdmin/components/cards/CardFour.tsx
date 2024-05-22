import { FaRegAddressBook } from 'react-icons/fa'
import { useState, useEffect } from 'react';
import axios from 'axios';

const CardFour = () => {
  const [totalInquirires, setTotalInquirires] = useState(0);
  useEffect(() => {
    axios.get(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app/api/baptismalInquiries`)
    .then((response) => {
      const { data } = response;
      if (data && Array.isArray(data)) {
        setTotalInquirires(data.length);
      } else {
        console.error('Invalid API response:', data);
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });

  },[])
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <FaRegAddressBook size={25} style={{ color: '#3C50E0' }}/>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
          {totalInquirires}
          </h4>
          <span className="text-sm font-medium">Total Baptismal Inquiries</span>
        </div>
      </div>
    </div>
  )
}

export default CardFour