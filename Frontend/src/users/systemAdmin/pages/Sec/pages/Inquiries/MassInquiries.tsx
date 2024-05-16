import axios from "axios"
import { useState, useEffect } from 'react'
import EmptyInquiries from "../../../../../secretary/components/other/EmptyInquiries";
import toast from 'react-hot-toast';
// import { GoEye } from "react-icons/go";
// import { MdCancel } from "react-icons/md";
// import { Link } from "react-router-dom";
import RejectMass from "../../../../../secretary/components/modal/RejectMassInquiry/RejectMass";
import Breadcrumb from "../../../../components/breadcrumbs/Breadcrum";

type Mass_Inquiries = {
  _id: string,
  date: string,
  time: string,
  masstype: string,
  name: string,
  createdAt: string
}

const MassInquiries = () => {
  const [data, setData] = useState<Mass_Inquiries[]>([])
  const [showModal, setShowModal] = useState(false);
  const [recordToDelete, ] = useState<string | null>(null);

  useEffect(() => {
    async function getInquiries() {
      const response = await axios.get(`https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/massInquiries/listofInquire`)
      const inquries = await response.data;
      setData(inquries)
    }
    getInquiries();
    return;
  }, [data.length])


  // const handleDeleteConfirmation = (recordId: string) => {
  //   setRecordToDelete(recordId);
  //   setShowModal(true);
  // };


  async function deleteRecord(id: string) {
    await axios.delete(`http://localhost:5000/api/massInquiries/reject/${id}`)
      .then(() => {
        console.log('data has been deleted');
        // You may want to update your data state here
      })
      .catch(err => console.log(err));
    const newData = data.filter((el) => el._id !== id);
    setData(newData);
    toast.success('Successfully Reject inquiries');
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

  // function formatTime(date: Date | string) {
  //   if (typeof date === 'string') {
  //     date = new Date(date);
  //   }

  //   const monthNames = ["January", "February", "March", "April", "May", "June",
  //     "July", "August", "September", "October", "November", "December"];

  //   const day = date.getDate();
  //   const month = monthNames[date.getMonth()];
  //   const year = date.getFullYear();

  //   const hours = date.getHours() % 12 || 12; // Get 12-hour format
  //   const minutes = date.getMinutes().toString().padStart(2, '0');
  //   const amPm = date.getHours() >= 12 ? 'PM' : 'AM';

  //   return ` ${hours}:${minutes} ${amPm}`;
  // }
  
  return (
    <>
    <Breadcrumb pageName='Mass Inquiries'/>
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-semibold text-black dark:text-white xl:pl-11">
                {(`Name`).toUpperCase()}
              </th>
              <th className="min-w-[150px] py-4 px-4 font-semibold text-black dark:text-white">
                {(`Date`).toUpperCase()}
              </th>
              {/* <th className="min-w-[150px] py-4 px-4 font-semibold text-black dark:text-white">
                Time
              </th> */}
              <th className="min-w-[150px] py-4 px-4 font-semibold text-black dark:text-white">
                {(`Mass type`).toUpperCase()}
              </th>
              {/* <th className="min-w-[150px] py-4 px-4 font-semibold text-black dark:text-white">
                Date Inquire
              </th> */}
              {/* <th className="py-4 px-4 font-semibold text-black dark:text-white">
                Actions
              </th> */}
            </tr>
          </thead>
          <tbody className='dark:bg-boxdark'>
          {data.length > 0 ? (
            data.map((data, index) => (
              <tr key={index}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {data.name.toUpperCase()}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{formatDateTime(data.date).toUpperCase()}</p>
                </td>
                {/* <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-4.5">
                  <h5 className="font-medium text-black dark:text-white">
                    {data.time}
                  </h5>
                </td> */}
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-4.5">
                  <h5 className="font-medium text-black dark:text-white">
                    {data.masstype.toUpperCase()}
                  </h5>
                </td>
                {/* <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-4.5">
                  <h5 className="font-medium text-black dark:text-white">
                    {formatDateTime(data.createdAt)}
                  </h5>
                </td> */}
                {/* <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button className="hover:text-primary">
                      <Link to={`/systemAdmin/ViewInquiriesInfo/${data._id}`}>
                          <GoEye size={20} />
                      </Link>
                    </button>
                    <button onClick={() => { handleDeleteConfirmation(data._id); }} className="text-danger">
                      <MdCancel size={20}/>
                    </button>
                  </div>
                </td> */}
              </tr>
              ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center">
                    <EmptyInquiries/>
                  </td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    </div>
    {showModal && (
        <RejectMass
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onDeleteConfirmed={(recordId) => {
            deleteRecord(recordId);
            setShowModal(false);
          }}
          recordId={recordToDelete}
        />
      )}
    </>
  )
}

export default MassInquiries