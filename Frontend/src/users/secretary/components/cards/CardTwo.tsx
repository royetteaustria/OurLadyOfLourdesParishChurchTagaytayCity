import { MdOutlinePending } from 'react-icons/md';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface MassInquiry {
  _id: string;
  date: string;
  time: string;
  masstype: string;
  name: string;
  createdAt: string;
  status: string;
}

const CardTwo = () => {
  const [totalIncomplete, setTotalIncomplete] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//api/MassClient/getAll');
        const clients: MassInquiry[] = response.data;

        const incompleteClients = clients.filter((client: MassInquiry) => client.status === 'Pending');
        setTotalIncomplete(incompleteClients.length);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <MdOutlinePending size={20} style={{ color: '#3C50E0' }} />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {totalIncomplete}
          </h4>
          <span className="text-sm font-medium">Total Pending</span>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
