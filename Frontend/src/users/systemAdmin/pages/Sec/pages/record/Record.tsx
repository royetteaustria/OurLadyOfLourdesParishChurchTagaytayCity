import EmptyStates from '../../../../components/empty/EmptyStates';
import { AiOutlineEye } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { FiEdit2 } from 'react-icons/fi'
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
// import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import Breadcrumb from '../../../../components/breadcrumbs/Breadcrum';
import { DateRange } from 'react-date-range';
import DeleteBaptismalDialog from '../../../../../secretary/components/modal/DeleteRecord/DeleleteConfirmationRecord';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

type BaptismalRecord = {
  _id: string,
  name: string,
  dateofBaptismal: string,
}

const BaptismRecord = ({}) => {
  const [data, setData] = useState<BaptismalRecord[]>([]);
  const [alldata, setAllData] = useState<BaptismalRecord[]>([]);
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false);
  const [recordToDelete, setRecordToDelete] = useState<string | null>(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    async function getRecords() {
      const res = await axios.get(`https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/BaptismalRecords/bapstismalRecordList`)
      const records = await res.data;
      setData(records)
      setAllData(res.data)
    }
    getRecords()
  },[])

  const handleDeleteConfirmation = (recordId: string) => {
    setRecordToDelete(recordId);
    setShowModal(true);
  };

  const handleSelect = (date: any) => {
    const filtered = alldata.filter((data) => {
      const dataDate = new Date(data.dateofBaptismal);
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

  async function deleteRecord(id: string) {
    await axios.delete(`http://localhost:5000/api/BaptismalRecords/deletebaptismalRecords/${id}`)
      .then(() => {
        console.log('data has been deleted');
        // You may want to update your data state here
      })
      .catch(err => console.log(err));
    const newData = data.filter((el) => el._id !== id);
    setData(newData);
    toast.success('Successfully Delete Record');
  }

  const goToAddRecord = () => {
    navigate('/systemAdmin/AddBaptismalrecord')
  }

  return (
    <>
    <div className="ml-6">
    <Breadcrumb pageName="Baptismal Record"/>
    </div>
    <div className="w-full sm:px-6 ">
      <div className="px-4 md:px-10 py-4 md:py-7 text-black dark:text-white bg-white rounded-tl-lg rounded-tr-lg dark:bg-boxdark" >
          <div className="sm:flex items-center justify-between bg-gray-2 border-b border-[#eee] p-4 dark:bg-meta-4 dark:border-strokedark">
          <button onClick={handleToggle} className={'mr-4 mt-6  mb-6 p-2 bg-primary text-white rounded-sm'}>
                {open ? 'Hide Filter' : 'Filter Date'}
              </button>
              {open && (
                <div className="absolute -ml-4 left-0 z-10 xsm:ml-10 sm:top-70 sm:ml-16 md:top-70 md:ml-24 xl:ml-24 xl:top-70 lg:top-70 lg:ml-24 bg-white shadow p-4 rounded">
                  <DateRange ranges={[{ startDate, endDate, key: 'selection' }]} onChange={handleSelect} />
                </div>
              )}
            <div className="hidden sm:block">
          <form>
            <div className="relative">
              <span className="absolute top-1/2 left-2 -translate-y-1/2">
                <CiSearch size={20}/>
              </span>

              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search record..."
                className="w-full bg-black bg-opacity-5 dark:bg-boxdark rounded-sm h-10 pr-4 pl-9 focus:outline-none"
              />
            </div>
          </form>
        </div>
          <div className={data.length > 0 ? 'inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-primary focus:outline-none rounded' : 'hidden'}>
            <button onClick={goToAddRecord}>
              <p className="text-sm font-medium leading-none text-white">Add record</p>
            </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto dark:bg-boxdark">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800 bg-gray-2 dark:bg-meta-4">
                <th className="font-medium text-black dark:text-white text-left pl-24">Name</th>
                <th className="font-medium text-black dark:text-white text-left pl-12">Date of Baptismal</th>
                <th className="font-medium text-black dark:text-white text-left pl-12">Actions</th>
              </tr>
              </thead>
              <tbody className="w-full ">
              {data.length > 0 ? (
                data.filter((record) => {
                  if (search.toLowerCase() === '') {
                    return true;
                  }
                  const lowercaseSearch = search.toLowerCase();
                  const lowercaseName = record.name.toLowerCase();
                  const lowercaseDate = record.dateofBaptismal.toLowerCase();
    
                  return (
                    lowercaseName.includes(lowercaseSearch) ||
                    lowercaseDate.includes(lowercaseSearch)
                  )
                }).map((record) => (
                  <tr key={record._id} className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-[#eee] dark:border-strokedark dark:bg-boxdark">
                    <td className="pl-4 ">
                      <div className="flex items-center">
                        <div className="pl-20">
                          <p className="font-normal text-black dark:text-white">{record.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="pl-12">
                      <div className="flex items-center">
                        <div className="pl-0">
                          <p className="font-normal text-black dark:text-white">{record.dateofBaptismal}</p>
                        </div>
                      </div>
                    </td>
                    
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <button className="hover:text-primary">
                          <Link to={`/systemAdmin/ViewRecordInfo/${record._id}`}>
                            <AiOutlineEye size={20} />
                          </Link>
                        </button>
                          <button className="text-warning">
                            <Link to={`/systemAdmin/EdiRecord/${record._id}`}><FiEdit2 /></Link>
                          </button>
                          <button
                            onClick={() => { handleDeleteConfirmation(record._id); }}
                            // Assuming 'record' has an 'id' property
                            className="text-danger"
                          >
                            <BsTrash size={20} />
                          </button>
                          
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center">
                    <EmptyStates description={'Lets Create the record for our couple'} navigate={'/systemAdmin/AddBaptismalrecord'} Title={'records'}/>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
      </div>
    </div>
    {showModal && (
        <DeleteBaptismalDialog
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

export default BaptismRecord