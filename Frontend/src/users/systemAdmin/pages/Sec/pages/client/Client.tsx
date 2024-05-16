import axios from "axios"
import { useState, useEffect } from 'react'
// import { GoEye } from "react-icons/go";
// import { Link } from "react-router-dom";
import FilterClient from "../../../../../secretary/components/FilterClient/FilterClient";
import { CiSearch } from "react-icons/ci";
import NoClient from "../../../../../secretary/components/other/Noclient";
import Breadcrumb from "../../../../components/breadcrumbs/Breadcrum";

type Mass_Inquiries = {
    _id: string,
    date: string,
    time: string,
    masstype: string,
    name: string,
    createdAt: string,
    status: string,
  }


const Client = () => {
    const [data, setData] = useState<Mass_Inquiries[]>([])
    const [filterTextValue, updateFilterText] = useState('All')
    const [search, setSearch] = useState('')
    const filterClient = data.filter((client) => {
      if (filterTextValue === 'Complete') {
        return client.status === 'Complete';
      } else if (filterTextValue === 'Pending'){
        return client.status === 'Pending';
      } else {
        return client;
      }
    })
    
    useEffect(() => {
      async function getInquiries() {
        try {
          const response = await axios.get(`https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/MassClient/getAll`);
          const inquiries = response.data;
    
          // Check if inquiries is an array before updating the state
          if (Array.isArray(inquiries)) {
            setData(inquiries);
          } else {
            console.error("API response is not an array:", inquiries);
          }
        } catch (error) {
          console.error("Error fetching inquiries:", error);
        }
      }
    
      getInquiries();
    }, []);

    console.log("filterClient.length:", filterClient.length);
    console.log("Data:", data);
    

  function onFilterSelection(filterValue: string): void{
    updateFilterText(filterValue)
  }
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
    <>
    <Breadcrumb pageName='Mass Client'/>
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="sm:flex items-center justify-between bg-gray-2 border-b border-[#eee] p-4 dark:bg-meta-4 dark:border-strokedark">
      <FilterClient filterValueSelected={onFilterSelection} />
      <div className="hidden sm:block mr-24 ">
        <form>
          <div className="relative">
            <span className="absolute top-1/2 left-2 -translate-y-1/2">
              <CiSearch size={20}/>
            </span>
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search client..."
              className="w-full bg-white bg-opacity dark:bg-boxdark rounded-sm h-10 pr-4 pl-9 focus:outline-none text-black"
            />
            </div>
          </form>
        </div>
      </div>
    
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-12 font-bold text-black dark:text-white xl:pl-11">
                {(`Name`).toUpperCase()}
              </th>
              <th className="min-w-[150px] py-4 px-4 font-bold text-black dark:text-white">
                {(`Date`).toUpperCase()}
              </th>
              <th className="min-w-[150px] py-4 px-4 font-bold text-black dark:text-white">
                {(`Mass type`).toUpperCase()}
              </th>
              <th className="min-w-[150px] py-4 px-4 font-bold pl-12 text-black dark:text-white">
                {(`Status`).toUpperCase()}
              </th>
              {/* <th className="py-4 px-4 font-semibold pl-6 text-black dark:text-white">
                Actions
              </th> */}
            </tr>
          </thead>
          <tbody className='dark:bg-boxdark'>
          {filterClient.length > 0 ? (
            filterClient.filter((client) => {
              if (search.toLowerCase() === '') {
                return true;
              }
              const lowercaseSearch = search.toLowerCase();
              const lowercaseName = client.name.toLowerCase();
              return (
                lowercaseName.includes(lowercaseSearch)
              )
            }).map((data, index) => (
              <tr key={index}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {data.name.toUpperCase()}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{formatDateTime(data.date).toUpperCase()}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-4.5">
                  <h5 className="font-medium text-black dark:text-white">
                    {data.masstype.toUpperCase()}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className={data.status === 'Complete' ? "font-medium text-success dark:text-success" : "font-medium text-warning dark:text-warning" }>
                    {data.status.toUpperCase()}
                  </h5>
                </td>
                {/* <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                  <button className="hover:text-primary">
                      <Link to={`/systemAdmin/ClientInfo/${data._id}`}>
                          <GoEye size={20}/>
                      </Link>
                    </button>
                    <button className="hover:text-primary">
                      <Link to={`/systemAdmin/UpdateMassClient/${data._id}`}>
                          Update
                      </Link>
                    </button>
                  </div>
                </td> */}
              </tr>
              ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center">
                    <NoClient/>
                  </td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Client