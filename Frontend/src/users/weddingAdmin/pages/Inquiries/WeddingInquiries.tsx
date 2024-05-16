import { GoEye } from "react-icons/go";
import { MdCancel } from "react-icons/md";
import Breadcrumb from '../../components/breadcrumbs/Breadcrum';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import InquiriesEmpty from '../../components/other/InquiriesEmpty';
import toast from 'react-hot-toast';
import RejectWedding from "../../components/modal/RejectWedding/RejectWedding";

type Wedding_Inquiries = {
  _id: string,
  groomName: string,
  groomAge: string,
  groomBaptizedAt: string,
  groomAddress: string,
  groomNameOfParishChurch: string,
  groomaddressOfParishChurch: string,
  groomFatherName: string,
  groomMotherName: string,
  groomalreadyBaptist: string,
  groomalreadyKumpil: string,

  brideName: string,
  brideAge: string,
  brideBaptizedAt: string,
  brideAddress: string,
  brideNameOfParishChurch: string,
  brideaddressOfParishChurch: string,
  brideFatherName: string,
  brideMotherName: string,
  bridealreadyBaptist: string,
  bridealreadyKumpil: string,
  time: string,
  start: string,
  createdAt:string
  brideLastName: string;
  brideMiddleName: string;
  groomLastName: string;
  groomMiddleName: string;
}

const WeddingInquiries = () => {
  const [data, setData] = useState<Wedding_Inquiries[]>([])
  const [inquireToDelete, setInquireToDelete] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    async function getInquiries() {
      const response = await axios.get(`http://localhost:5000/api/weddingInquiries/listWeddingInquiries`)
      const inquries = await response.data;
      
      setData(inquries)
    }
    getInquiries();
    return;
  }, [data.length])

  const handleInquieConfirmation = (inquireId: string) => {
    setInquireToDelete(inquireId);
    setShowModal(true);
  };
  
  async function deleteRecord(id: string) {
    await axios.delete(`https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/weddingInquiries/reject/${id}`)
      .then(() => {
        console.log('data has been deleted');
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

    return `${month.toUpperCase()} ${day}, ${year} ${hours}:${minutes} ${amPm}`;
  }
  return (
    <>
    <Breadcrumb pageName='Wedding Inquiries'/>
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-semibold text-black dark:text-white xl:pl-11">
                {(`Groom Name`).toLocaleUpperCase()}
              </th>
              <th className="min-w-[150px] py-4 px-4 font-semibold text-black dark:text-white">
                {(`Bride Name`).toLocaleUpperCase()}
              </th>
              <th className="min-w-[150px] py-4 px-4 font-semibold text-black dark:text-white">
                {(`Date of wedding`).toLocaleUpperCase()}
              </th>
              {/* <th className="min-w-[150px] py-4 px-4 font-semibold text-black dark:text-white">
                Time of wedding
              </th> */}
              <th className="py-4 px-4 font-semibold text-black dark:text-white">
                {(`Actions`).toLocaleUpperCase()}
              </th>
            </tr>
          </thead>
          <tbody className='dark:bg-boxdark'>
            {data.length >0 ? (
              data.map((data, index) => (
                <tr key={index}>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      {data.groomName.toUpperCase()} {data.groomLastName.toUpperCase()}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">{data.brideName.toUpperCase()} {data.brideLastName.toUpperCase()}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-4.5">
                    <h5 className="font-medium text-black dark:text-white">
                      {formatDateTime(data.start)}
                    </h5>
                  </td>
                  {/* <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-4.5">
                    <h5 className="font-medium text-black dark:text-white">
                      {data.time}
                    </h5>
                  </td> */}
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5">
                      <button className="hover:text-primary">
                        <Link to={`/weddingAdmin/WeddingInquiriesInfo/${data._id}`}>
                        <GoEye size={20} />
                        </Link>
                      </button>
                      {/* <button
                        className="text-success">
                        <BsCheckLg size={20}/>
                      </button> */}
                      <button onClick={() => { handleInquieConfirmation(data._id); }} className="text-danger">
                      <MdCancel size={20}/>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ): (
              <tr>
                  <td colSpan={6} className="text-center">
                    <InquiriesEmpty/>
                  </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    {showModal && (
        <RejectWedding
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

export default WeddingInquiries;
