import toast from 'react-hot-toast'
import { FormEvent, useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Breadcrumb from '../../../../components/breadcrumbs/Breadcrum'
import { ClientEditMultiForm } from './ClientMultiForm'
import GroomUpdateClient from './CoupleUpdate/GroomUpdateClient'
import BrideUpdateClient from './CoupleUpdate/BrideUpdateClient'
import Other from './CoupleUpdate/Other'
import GoToRecord from '../../../../../weddingAdmin/components/modal/GoToRecord'

type FormData = {
  paymentStatus: string,
  weddingStatus: string,
  groomlreadyBaptist: string,
  groomlreadyKumpil: string,
  bridealreadyBaptist: string,
  bridealreadyKumpil: string,

  Groom_Baptismal_Certificate: string,
  Groom_Confirmation_Certificate: string,
  Groom_Birth_Certificate: string,
  Groom_CeNomar_Civil_Married: string,
  Groom_Cannonical_Application: string,
  Groom_Cannonical_Interview: string,
  Groom_Id_Picture: string,
  Groom_Marriage_Banns: string,
  Groom_Banns_Reply: string,
  Groom_Pre_Cana: string,
  Groom_Marriage_Contract: string,

  Bride_Baptismal_Certificate: string,
  Bride_Confirmation_Certificate: string,
  Bride_Birth_Certificate: string,
  Bride_CeNomar_Civil_Married: string,
  Bride_Cannonical_Application: string,
  Bride_Cannonical_Interview: string,
  Bride_Id_Picture: string,
  Bride_Marriage_Banns: string,
  Bride_Banns_Reply: string,
  Bride_Pre_Cana: string,
  Bride_Marriage_Contract: string,

  PartialPaid: string,
  LastPaid: string
}

const INITIAL_DATA: FormData = {
  paymentStatus: '',
  weddingStatus: '',
  groomlreadyBaptist: '',
  groomlreadyKumpil: '',
  bridealreadyBaptist: '',
  bridealreadyKumpil: '',

  Groom_Baptismal_Certificate: '',
  Groom_Confirmation_Certificate: '',
  Groom_Birth_Certificate: '',
  Groom_CeNomar_Civil_Married: '',
  Groom_Cannonical_Application: '',
  Groom_Cannonical_Interview: '',
  Groom_Id_Picture: '',
  Groom_Marriage_Banns: '',
  Groom_Banns_Reply: '',
  Groom_Pre_Cana: '',
  Groom_Marriage_Contract: '',

  Bride_Baptismal_Certificate: '',
  Bride_Confirmation_Certificate: '',
  Bride_Birth_Certificate: '',
  Bride_CeNomar_Civil_Married: '',
  Bride_Cannonical_Application: '',
  Bride_Cannonical_Interview: '',
  Bride_Id_Picture: '',
  Bride_Marriage_Banns: '',
  Bride_Banns_Reply: '',
  Bride_Pre_Cana: '',
  Bride_Marriage_Contract: '',

  PartialPaid: '',
  LastPaid: ''
}

const UpdateWeddingClient = () => {
  const [data, setData] = useState(INITIAL_DATA)
  const [showModal, setShowModal] = useState(false)

  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return {
        ...prev, ...fields
      }
    })
  }
  
  const navigate = useNavigate()
  const {id} = useParams();

  useEffect (() => {
    axios.get(`http://localhost:5000/api/WeddingClient/singleClient/`+id)
    .then(res => {
      console.log(res)
      setData(prev => ({
        ...prev,
      paymentStatus: res.data.paymentStatus,
      weddingStatus:res.data.weddingStatus,
      groomlreadyBaptist: res.data.groomalreadyBaptist,
      groomalreadyKumpil: res.data.groomalreadyKumpil,
      bridealreadyBaptist: res.data.bridealreadyBaptist,
      bridealreadyKumpil: res.data.bridealreadyKumpil,
    
      Groom_Baptismal_Certificate: res.data.Groom_Baptismal_Certificate,
      Groom_Confirmation_Certificate: res.data.Groom_Confirmation_Certificate,
      Groom_Birth_Certificate: res.data.Groom_Birth_Certificate,
      Groom_CeNomar_Civil_Married: res.data.Groom_CeNomar_Civil_Married,
      Groom_Cannonical_Application: res.data.Groom_Cannonical_Application,
      Groom_Cannonical_Interview: res.data.Groom_Cannonical_Interview,
      Groom_Id_Picture: res.data.Groom_Id_Picture,
      Groom_Marriage_Banns: res.data.Groom_Marriage_Banns,
      Groom_Banns_Reply: res.data.Groom_Banns_Reply,
      Groom_Pre_Cana: res.data.Groom_Pre_Cana,
      Groom_Marriage_Contract: res.data.Groom_Marriage_Contract,

      Bride_Baptismal_Certificate: res.data.Bride_Baptismal_Certificate,
      Bride_Confirmation_Certificate: res.data.Bride_Confirmation_Certificate,
      Bride_Birth_Certificate: res.data.Bride_Birth_Certificate,
      Bride_CeNomar_Civil_Married: res.data.Bride_CeNomar_Civil_Married,
      Bride_Cannonical_Application: res.data.Bride_Cannonical_Application,
      Bride_Cannonical_Interview: res.data.Bride_Cannonical_Interview,
      Bride_Id_Picture: res.data.Bride_Id_Picture,
      Bride_Marriage_Banns: res.data.Bride_Marriage_Banns,
      Bride_Banns_Reply: res.data.Bride_Banns_Reply,
      Bride_Pre_Cana: res.data.Bride_Pre_Cana,
      Bride_Marriage_Contract: res.data.Bride_Marriage_Contract,

      PartialPaid: res.data.PartialPaid,
      LastPaid: res.data.LastPaid
      }))
      
    })
    .catch(err => {
      console.log(err)
    })
  },[])
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = ClientEditMultiForm([
    <GroomUpdateClient {...data} updateFields={updateFields}/>,
    <BrideUpdateClient {...data} updateFields={updateFields}/>,
    <Other {...data} updateFields={updateFields}/>,
  ])
  const update = (e: FormEvent) => {
    e.preventDefault()
    axios.put(`http://localhost:5000/api/WeddingClient/update/`+id, data)
    .then(res => {
      console.log(res)
      if (data.weddingStatus === 'Complete') {
        setShowModal(true); // Show the modal
      } else {
        navigate('/systemAdmin/WeddingClient');
        toast.success('Successfully update');
      }

    })
    .catch(err => {
      console.log(err)
      toast.error('Failed to update')
    })
  }
  
  return (
    <>
    <Breadcrumb pageName='Update Client'/>
    {showModal && <GoToRecord onClose={function (): void {
        throw new Error('Function not implemented.')
      } }/>}
      <div className="mx-auto max-w-full">
      <div className="h-1 dark:bg-neutral-600 mb-6">
        <h1>Page {currentStepIndex + 1}/ {steps.length}</h1>
      </div>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      {step}
      <form onSubmit={update}>
        <div className="flex justify-end gap-4.5 mb-12 mr-8">
          {!isFirstStep && <button
           onClick={() => { // Scroll to the top of the screen
            back();
          }}
            className="flex justify-center rounded border border-stroke py-2 mt-6 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
            type="button"
          >
            Back
          </button>}
          <button
            className="flex justify-center rounded bg-primary py-2 px-6 mt-6 font-medium text-gray hover:shadow-1"
            type="button"
            onClick={isLastStep ? update : next} // Use onSubmit when it's the last step
          >
            {isLastStep ? "Update" : 'Next'}
          </button>
        </div>
      </form>
      </div>
    </div>
    </>
  )
}

export default UpdateWeddingClient