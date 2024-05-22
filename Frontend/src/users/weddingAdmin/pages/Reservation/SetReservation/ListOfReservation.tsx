import Breadcrumb from "../../../components/breadcrumbs/Breadcrum";
import { BsTrash } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { useEffect, useState } from "react";
import axios from "axios";
import NoDateAvailable from "../../../components/other/NoDateAvailable";

type AvailableDates = {
  _id: string;
  available: Date;
  status: string;
};

const ListOfReservation = () => {
  const [data, setData] = useState<AvailableDates[]>([]);

  useEffect(() => {
    async function getDate() {
      try {
        const res = await axios.get(
          "https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app/api/CalendarReservation"
        );
        const available = res.data;
        setData(available);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getDate();
  }, []);
  return (
    <>
    <Breadcrumb pageName="Available Dates"/>
      <div className="px-4 md:px-10 py-4 md:py-7 text-black dark:text-white bg-white rounded-tl-lg rounded-tr-lg dark:bg-boxdark" >
      </div>
      <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto dark:bg-boxdark">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="h-16 w-full text-sm leading-none text-gray-800 bg-gray-2 dark:bg-meta-4">
              <th className="font-semibold text-black dark:text-white text-left pl-12">Date</th>
              <th className="font-semibold text-black dark:text-white text-left pl-12">Status</th>
              <th className="font-semibold text-black dark:text-white text-left pl-12"></th>
              <th className="font-semibold text-black dark:text-white text-left pl-12">Actions</th>
            </tr>
          </thead>
            <tbody className="w-full ">
              {data.length > 0 ? (
                data.map((data) => (
                  <tr key={data._id} className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-[#eee] dark:border-strokedark dark:bg-boxdark">
                    <td className="pl-6">
                      <p className="font-normal text-black dark:text-white">
                        {new Date(data.available).toLocaleString()} {/* Convert Date to string */}
                      </p>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className={data.status === 'Pending' ? 'font-normal ml-6 text-black dark:text-white bg-warning p-2 w-auto rounded-md bg-opacity-50' : data.status === 'Not Available' ? "font-normal ml-6 text-black dark:text-white bg-danger" : "font-normal ml-6 text-black dark:text-white bg-success"}>{data.status}</p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="font-normal ml-6 text-black dark:text-white"></p>
                    </td>
                    <button className=" py-5 px-2">
                      <p className="font-normal ml-6 text-primary dark:text-white"><FiEdit2 size={18}/></p>
                    </button>
                    <button className=" py-5 px-2">
                      <p className="font-normal ml-6 text-danger dark:text-white"><BsTrash size={18}/></p>
                    </button>
                  </tr>
                ))
              ) : (
              <tr>
                <td colSpan={4} className="text-center">
                  <NoDateAvailable/>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListOfReservation;
