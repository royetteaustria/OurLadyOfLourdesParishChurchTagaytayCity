import toast from 'react-hot-toast'
import { FormEvent, useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Breadcrumb from '../../components/breadcrumbs/Breadcrum'
import AddRecordModal from '../../components/modal/NavigateToAddRecord/AddRecordModal'

const Data = {
  status: '',
  seminar: ''
}

const UpdateBaptismalClient = () => {
  const [data, setData] = useState(Data)
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams()

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await axios.get(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app/api/BaptismalClient/singleClient/`+id)
        setData(response.data)
      } catch (err) {
        console.log(err);
        toast.error("Failed to fetch data");
      }
    };
    fetchData();
  },[id])
  const update = async (e: FormEvent) => {
    e.preventDefault()
    const client = {
      status: data.status,
      seminar: data.seminar
    }
    try {
      const response = await axios.put(
        `https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app/api/BaptismalClient/update/${id}`,
         client
         );
      console.log(response)
      toast.success('Successfully updated')
      if(data.status === 'Complete') {
        setShowModal(true)
      } else {
        navigate('/weddingAdmin/baptismalClient')
      }
    } catch(err) {
      console.log(err);
      toast.error("Failed to Update");
    }
  }

  const navigateToAddRecord = () => {
    navigate(`/ParishSecretary/Addrecord/${id}`);
  };
  return (
    <>
    <Breadcrumb pageName='Update Baptismal  Client'/>
    <div className="mx-auto max-w-full">
      <div className="grid grid-cols-1 gap-8">
        <div className="col-span-5 xl:col-span-3">
          <div className="rounded-sm   bg-white  dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
              <form onSubmit={update}>
              <div className="mb-4.5">
                <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Status
                </label>
                dsadsaxcvbnm
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                <select value={data.status} 
                onChange={(e) => setData({ ...data, status: e.target.value })}
                 className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus-border-primary active-border-primary dark-border-form-strokedark dark-bg-form-input dark-focus-border-primary">
                  <option value="Pending">Pending</option>
                  <option value="Complete">Complete</option>
                  <option value="Cancel">Cancel</option>
                </select>
                </div>
                </div>

                <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Seminar Attended
                </label>
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                <select value={data.seminar}
                 onChange={(e) => setData({ ...data, seminar: e.target.value })}
                className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus-border-primary active-border-primary dark-border-form-strokedark dark-bg-form-input dark-focus-border-primary">
                  <option value="Pending">Pending</option>
                  <option value="Complete">Complete</option>
                </select>
                </div>
                </div>
                </div>
                <span className='w-full'>
                <button type="submit" className="rounded-sm px-4 py-2 bg-primary flex justify-end w-full items-end text-white">
                  Update
                </button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
      <span className="z-50">
    {showModal && (
      <AddRecordModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        NavigateToAddRecord={navigateToAddRecord} // Pass NavigateToAddRecord function
        inquireId={id}
        TextDialog="This Client has completed all the steps of the baptismal. Now it's time to add this client to records."
      />
    )}
    </span>
    </>
  )
}

export default UpdateBaptismalClient