// import { BsCheckLg } from 'react-icons/bs'
// import { GoEye } from "react-icons/go";
// import { MdCancel } from "react-icons/md";
import Breadcrumb from '../../../../components/breadcrumbs/Breadcrum';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useState, useEffect } from 'react'
import BaptismalEmpty from '../../../../../weddingAdmin/components/other/BaptismalEmpty';
// import { Link } from 'react-router-dom';
import RejectBaptismal from '../../../../../weddingAdmin/components/modal/RejectBaptismal/RejectBaptismal';

type Baptismal_Inquiries = {
  _id: string,
  dateofBaptismal: string,
  name: string,
  lname: string,
  email: string,
  dateofBirth: string,
  birthPlace: string,
 

  currentAddress: string,
  fatherName: string,
  fatherBirthOfPlace: string,
  motherName: string,
  mothertherBirthOfPlace: string,
  marriedPlace: string,
  createdAt:string
}

const baptismalInquiries = () => {
  const [data, setData] = useState<Baptismal_Inquiries[]>([])
  const [inquireToDelete, ] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getInquiries() {
      const response = await axios.get(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//api/baptismalInquiries`)
      const inquries = await response.data;
      setData(inquries)
    }
    getInquiries();
    return;
  }, [data.length])



  // const handleInquieConfirmation = (inquireId: string) => {
  //   setInquireToDelete(inquireId);
  //   setShowModal(true);
  // };


  async function deleteRecord(id: string) {
    await axios.delete(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//api/baptismalInquiries/reject/`+id)
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
  return (
    <>
    <Breadcrumb pageName='Baptismal Inquiries'/>
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-bold text-black dark:text-white xl:pl-11">
                Name to be baptized
              </th>
              <th className="min-w-[150px] py-4 px-4 font-bold text-black dark:text-white">
                Father Name
              </th>
              <th className="min-w-[150px] py-4 px-4 font-bold text-black dark:text-white">
                Mother Name
              </th>
              <th className="min-w-[150px] py-4 px-4 font-bold text-black dark:text-white">
                Date Inquire
              </th>
              {/* <th className="py-4 px-4 font-medium text-black dark:text-white">
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
                  <p className="text-black dark:text-white">{data.fatherName.toUpperCase()}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-4.5">
                  <h5 className="font-medium text-black dark:text-white">
                    {data.motherName.toUpperCase()}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-4.5">
                  <h5 className="font-medium text-black dark:text-white">
                    {formatDateTime(data.createdAt).toUpperCase()}
                  </h5>
                </td>
                {/* <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button className="hover:text-primary">
                    <Link to={`/systemAdmin/BaptismalInfo/${data._id}`}>
                      <GoEye size={20}/>
                    </Link>
                    </button>
                    <button onClick={() => { handleInquieConfirmation(data._id); }} className="text-danger">
                      <MdCancel size={20}/>
                    </button>
                  </div>
                </td> */}
              </tr>
              ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center">
                    <BaptismalEmpty/>
                  </td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    </div>
    {showModal && (
        <RejectBaptismal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onDeleteConfirmed={(inquireId) => {
            deleteRecord(inquireId);
            setShowModal(false);
          }}
          inquireId={inquireToDelete}
        />
      )}
    </>
  );
};

export default baptismalInquiries;
