import { MdOutlinePending } from 'react-icons/md'
import { useState, useEffect } from 'react';
import axios from 'axios';
interface Wedding {
  _id: string;
  weddingStatus: string;
}

const CardTwo = () => {
  const [totalPending, setTotalPending] = useState(0)
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/WeddingClient/listOfClient`);
        const clients: Wedding[] = response.data;
        const PendingClients = clients.filter((client: Wedding) => client.weddingStatus === "Pending");
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
          <span className="text-sm font-medium">Total wedding Pending</span>
        </div>

        {/* <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
          4.35%
          <svg
            className="fill-meta-3"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
              fill=""
            />
          </svg>
        </span> */}
      </div>
    </div>
  );
};

export default CardTwo;
