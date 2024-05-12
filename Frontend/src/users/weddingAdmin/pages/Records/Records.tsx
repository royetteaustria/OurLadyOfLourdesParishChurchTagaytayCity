import { Link } from "react-router-dom";
import { AiOutlineEye } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { useEffect, useState } from "react";
import EmptyStates from "../../components/other/EmptyStates";
import axios from "axios";
import toast from 'react-hot-toast';
import { CiSearch } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import DeleteWeddingDialog from "../../components/modal/DeleteRecord/DeleteWeddingRecord";
import Breadcrumb from "../../components/breadcrumbs/Breadcrum";

type WeddingRecord = {
  _id: string
  groomName: string;
  brideName: string;
  dateOfMarriage: string;
};

const Records = () => {
  const [data, setData] = useState<WeddingRecord[]>([]);
  const [search, setSearch] = useState('');
  const [alldata, setAllData] = useState<WeddingRecord[]>([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [recordToDelete, setRecordToDelete] = useState<string | null>(null);

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
  

  useEffect(() => {
    async function getRecords() {
      const response = await axios.get(`http://localhost:5000/api/WeddingRecords/weddingRecordsList`)
      setData(response.data)
      setAllData(response.data)
    }
    getRecords()  ;
  },[]);

  const handleSelect = (date: any) => {
    const filtered = alldata.filter((data) => {
      const dataDate = new Date(data.dateOfMarriage);
      return (
        dataDate >= date.selection.startDate &&
        dataDate <= date.selection.endDate
      );
    });
  
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    setData(filtered);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleDeleteConfirmation = (recordId: string) => {
    setRecordToDelete(recordId);
    setShowModal(true);
  };

  async function deleteRecord(id: string) {
    await axios.delete(`http://localhost:5000/api/WeddingRecords/deleteRecords/${id}`)
      .then(() => {
        console.log('data has been deleted');
      })
      .catch(err => console.log(err));
    const newData = data.filter((el) => el._id !== id);
    setData(newData);
    toast.success('Successfully Delete Record');
  }

  return (
    <>
    <div className="ml-4 px-3">
    <Breadcrumb pageName="Records"/>
    </div>
      <div className="w-full sm:px-6">
        <div className="px-4 md:px-10 py-4 md:py-7 text-black dark:text-white bg-white rounded-tl-lg rounded-tr-lg dark:bg-boxdark">
          <div  className="sm:flex items-center justify-between bg-gray-2 border-b border-[#eee] p-4 dark:bg-meta-4 dark:border-strokedark">
            <div className="sm:flex items-center">
              <button onClick={handleToggle} className={'mr-4 mt-6  mb-6 p-2 bg-primary text-white rounded-sm'}>
                {open ? 'Hide Filter' : 'Filter Date'}
              </button>
              {open && (
                <div className="absolute -ml-4 left-0 z-10 xsm:ml-10 sm:top-70 sm:ml-16 md:top-70 md:ml-24 xl:ml-24 xl:top-70 lg:top-70 lg:ml-24 bg-white shadow p-4 rounded">
                  <DateRange ranges={[{ startDate, endDate, key: 'selection' }]} onChange={handleSelect} />
                </div>
              )}
              <form>
                <div className="relative">
                 <span className="absolute top-1/2 left-2 -translate-y-1/2">
                   <CiSearch size={20}/>
                  </span>
                  <input
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search record..."
                    className="w-full bg-white dark:bg-boxdark rounded-sm h-10 pr-4 pl-9 focus:outline-none"
                  />
                </div>
              </form>
            </div>
            <div className={data.length > 0 ? 'inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-primary focus:outline-none rounded' : 'hidden'}>
              <button>
                <Link to='/weddingAdmin/addrecords'><p className="text-sm font-medium leading-none text-white">Add record</p></Link>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto dark:bg-boxdark">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800 bg-gray-2 dark:bg-meta-4">
                <th className="text-black dark:text-white text-left font-bold pl-4">{(`Groom name`).toLocaleUpperCase()}</th>
                <th className="text-black dark:text-white text-left font-bold pl-12">{(`Bride name`).toLocaleUpperCase()}</th>
                <th className="text-black dark:text-white text-left font-bold pl-12">{(`Date of marriage`).toLocaleUpperCase()}</th>
                <th className="text-black dark:text-white text-left font-bold pl-4">{(`Actions`).toLocaleUpperCase()}</th>
              </tr>
            </thead>
            <tbody className="w-full ">
              {data.length > 0 ? (
                data.filter((record) => {
                  if (search.toLowerCase() === '') {
                    return true;
                  }
                  const lowercaseSearch = search.toLowerCase();
                  const lowercaseName = record.groomName.toLowerCase();
                  const lowercaseDate = record.brideName.toLowerCase();
                  return (
                    lowercaseName.includes(lowercaseSearch) ||
                    lowercaseDate.includes(lowercaseSearch)
                  );
                }).map((record) => (
                  <tr key={record._id} className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-[#eee] dark:border-strokedark dark:bg-boxdark">
                    <td className="pl-4">
                      <div className="flex items-center">
                        <div className="pl-0">
                          <p className="font-normal text-black dark:text-white">{record.groomName.toLocaleUpperCase()}</p>
                        </div>
                      </div>
                    </td>
                    <td className="pl-12">
                      <div className="flex items-center">
                        <div className="pl-0">
                          <p className="font-normal text-black dark:text-white">{record.brideName.toLocaleUpperCase()}</p>
                        </div>
                      </div>
                    </td>
                    <td className="pl-12">
                      <p className="font-normal text-black dark:text-white">{formatDateTime(record.dateOfMarriage).toLocaleUpperCase()}</p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <button className="hover:text-primary">
                          <Link to={`/weddingAdmin/Info/${record._id}`}>
                            <AiOutlineEye size={20} />
                          </Link>
                        </button>
                        {/* <button className="text-warning">
                          <Link to={`/weddingAdmin/editRecords/${record._id}`}><FaRegEdit size={20} style={{color: '#3C50E0'}}/></Link>
                        </button>
                        <button
                          onClick={() => handleDeleteConfirmation(record._id)}
                          className="text-danger"
                        >
                          <BsTrash size={20} />
                        </button> */}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center">
                    <EmptyStates/>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {showModal && (
        <DeleteWeddingDialog
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
  );
};

export default Records;
