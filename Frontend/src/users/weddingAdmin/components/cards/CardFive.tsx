import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdOutlinePending } from 'react-icons/md';

interface Baptismal {
  _id: string;
  description: string;
}

const CardFive = () => {
  const [totalPending, setTotalPending] = useState(0)
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/BaptismalClient/list`);
        const clients: Baptismal[] = response.data;
        const PendingClients = clients.filter((client: Baptismal) => client.description === "Pending");
        setTotalPending(PendingClients.length);
  
      } catch (error) {
        console.log(error)
      }
    }
    fetch();
  },[])
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <MdOutlinePending size={25} style={{ color: '#3C50E0' }}/>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {totalPending}
          </h4>
          <span className="text-sm font-medium">Total baptismal Pending</span>
        </div>
      </div>
    </div>
  )
}

export default CardFive