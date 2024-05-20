import toast from 'react-hot-toast'
import { FormEvent, useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Breadcrumb from '../../../../components/breadcrumbs/Breadcrum'

const UpdateBaptismalClient = () => {
  const [status, setStatus] = useState('')
  const [description, setDescription] = useState('')
  
  const navigate = useNavigate();
  const {id} = useParams()

  useEffect(() => {
    axios.get(`https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/BaptismalClient/singleClient/`+id)
    .then(res => {
      console.log(res)
      setDescription(res.data.description)
      setStatus(res.data.status)
    })
    .catch(err => {
      console.log(err)
    })
  },[])
  const update = (e: FormEvent) => {
    e.preventDefault();
    axios.put(`https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/BaptismalClient/update/${id}`, {
      status,
      description
    })
    .then(res => {
      console.log(res)
      navigate('/systemAdmin/baptismalClient')
      toast.success('Successfully update')
    })
    .catch(err => {
      console.log(err)
      toast.error('Failed to update')
    })
  }
  return (
    <>
    <Breadcrumb pageName='UpdateBaptismalClient'/>
    <div className="mx-auto max-w-full">
      <div className="grid grid-cols-1 gap-8">
        <div className="col-span-5 xl:col-span-3">
          <div className="rounded-sm   bg-white  dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
              <form onSubmit={update}>
              {/* <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Description
                </label>
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                <select value={description} onChange={e => setDescription(e.target.value)} className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus-border-primary active-border-primary dark-border-form-strokedark dark-bg-form-input dark-focus-border-primary">
                  <option value="Pending">Pending</option>
                  <option value="Complete">Complete</option>
                </select>
                </div> */}
                <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Status
                </label>
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                <select value={status} onChange={e => setStatus(e.target.value)} className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus-border-primary active-border-primary dark-border-form-strokedark dark-bg-form-input dark-focus-border-primary">
                  <option value="InComplete">InComplete</option>
                  <option value="Complete">Complete</option>
                </select>
                {/* </div> */}
                </div>
                </div>
                <button type="submit" className="rounded-sm px-4 py-2 bg-primary flex justify-end items-end text-white">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default UpdateBaptismalClient