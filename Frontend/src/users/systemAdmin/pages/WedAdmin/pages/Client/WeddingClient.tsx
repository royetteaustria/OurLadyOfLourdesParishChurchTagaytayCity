import FilterWeddingClient from "../../../../../weddingAdmin/components/filterClient/Filter";
import axios from "axios"
import { useState, useEffect } from 'react'
// import { GoEye } from "react-icons/go";
import Breadcrumb from "../../../../components/breadcrumbs/Breadcrum";
// import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import NoClient from "../../../../../weddingAdmin/components/other/Noclient";
// import { FaRegEdit } from "react-icons/fa";


type WeddingClient = {
  _id: string,
  groomName: string,
  brideName: string,
  weddingStatus: string,
  paymentStatus: string,
}

const WeddingClient = () => {
  const [data, setData] = useState<WeddingClient[]>([])
  const [filterTextValue, updateFilterText] = useState('All')
  const [search, setSearch] = useState('')
  const FilterClient = data.filter((client) => {
    if (filterTextValue === 'Complete') {
      return client.weddingStatus === 'Complete';
    } else if (filterTextValue === 'Pending'){
      return client.weddingStatus === 'Pending';
    } 
    else if (filterTextValue === 'Cancel') {
      return client.weddingStatus === 'Cancel'
    }
    else {
      return client;
    }
  })

  useEffect(() => {
    async function getInquiries() {
      try {
        const response = await axios.get(`https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/WeddingClient/listOfClient`);
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
  },[data.length]);
  console.log("filterClient.length:", FilterClient.length);
  console.log("Data:", data);

  function onFilterSelection(filterValue: string): void{
    updateFilterText(filterValue)
  }

  return (
    <>
    <Breadcrumb pageName="Wedding Client"/>
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
    <div className="sm:flex items-center justify-between bg-gray-2 border-b border-[#eee] p-4 dark:bg-meta-4 dark:border-strokedark">
      <FilterWeddingClient filterValueSelected={onFilterSelection} />
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
              <th className="min-w-[220px] py-4 px-4 font-bold text-black dark:text-white xl:pl-11">
                {(`Groom Name`).toUpperCase()}
              </th>
              <th className="min-w-[150px] py-4 px-4 font-bold text-black dark:text-white">
                {(`Bride Name`).toUpperCase()}
              </th>
              <th className="min-w-[150px] py-4 px-4 font-bold text-black dark:text-white">
                {(`Status`).toUpperCase()}
              </th>
              {/* <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Payment Status
              </th> */}
              {/* <th className="py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th> */}
            </tr>
          </thead>
          <tbody className='dark:bg-boxdark'>
          {FilterClient.length > 0 ? (
            FilterClient.filter((client) => {
              if (search.toLowerCase() === '') {
                return true;
              }
              const lowercaseSearch = search.toLowerCase();
              const lowercaseName = client.groomName.toLowerCase();
              return (
                lowercaseName.includes(lowercaseSearch)
              )
            }).map((data, index) => (
              <tr key={index}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {data.groomName.toUpperCase()}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{data.brideName.toUpperCase()}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-4.5">
                  <h5 className={data.weddingStatus === 'Pending' ? "font-medium text-[#Ffa500] dark:text-[#Ffa500]" : data.weddingStatus === 'Complete' ? "font-medium text-success dark:text-success" : "font-medium text-danger dark:text-danger"}>
                    {data.weddingStatus.toUpperCase()}
                  </h5>
                </td>
                {/* <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className={data.paymentStatus === 'Fully Paid' ? "font-medium text-success dark:text-success" : data.paymentStatus === 'Partial Paid' ? "font-medium text-[#Ffa500] dark:text-[#Ffa500]" : data.paymentStatus === 'Unpaid' ? "font-medium text-danger dark:text-danger": ''}>
                    {data.paymentStatus}
                  </h5>
                </td> */}
                {/* <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                  <button className="hover:text-primary">
                      <Link to={`/systemAdmin/WeddingClientInfo/${data._id}`}>
                          <GoEye size={20}/>
                      </Link>
                    </button>
                    <button className="hover:text-primary">
                      <Link to={`/systemAdmin/UpdateWeddingClient/${data._id}`}>
                        <FaRegEdit size={20} style={{color: '#3C50E0'}}/>
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

export default WeddingClient