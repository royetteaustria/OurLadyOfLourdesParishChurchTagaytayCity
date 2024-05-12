import { useMultistepForm } from './useMultistepForm'
import GroomForm from './GroomForm'
import BrideForm from './BrideForm'
import { OtherInfoRecord } from './OtherInfo'
import {FormEvent, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

type FormData = {
  groomName: string,
  groomBirth: string,
  groomPlaceofBirth: string,
  groomSex: string,
  groomCitezenship: string,
  groomResidence: string,
  groomReligion: string,
  groomCivilStatus: string,
  groomNameofFather: string,
  groomFatherCitezenship: string,
  groomNameofMother: string,
  groomMotherCitezenship: string,
  groomNameOfPersonWhoGaveConcent: string,
  groomNameOfPersonWhoGaveConcentRelationship: string,
  groomPersonWhoGaveConcentResidence: string,

  brideName: string,
  brideBirth: string,
  bridePlaceofBirth: string,
  brideSex: string,
  brideCitezenship: string,
  brideResidence: string,
  brideReligion: string,
  brideCivilStatus: string,
  brideNameofFather: string,
  brideFatherCitezenship: string,
  brideNameofMother: string,
  brideMotherCitezenship: string,
  brideNameOfPersonWhoGaveConcent: string,
  brideNameOfPersonWhoGaveConcentRelationship: string,
  bridePersonWhoGaveConcentResidence: string,

  RegistryNo: string
  Province: string
  City_Municipality: string
  placeOfMarriage: string
  dateOfMarriage: string
  timeOfMarriage: string
  priestWhoMarried: string
}

const INITIAL_DATA: FormData = {
  groomName: '',
  groomBirth: '',
  groomPlaceofBirth: '',
  groomSex: '',
  groomCitezenship: '',
  groomResidence: '',
  groomReligion: '',
  groomCivilStatus: '',
  groomNameofFather: '',
  groomFatherCitezenship: '',
  groomNameofMother: '',
  groomMotherCitezenship: '',
  groomNameOfPersonWhoGaveConcent: '',
  groomNameOfPersonWhoGaveConcentRelationship: '',
  groomPersonWhoGaveConcentResidence: '',

  brideName: '',
  brideBirth: '',
  bridePlaceofBirth: '',
  brideSex: '',
  brideCitezenship: '',
  brideResidence: '',
  brideReligion: '',
  brideCivilStatus: '',
  brideNameofFather: '',
  brideFatherCitezenship: '',
  brideNameofMother: '',
  brideMotherCitezenship: '',
  brideNameOfPersonWhoGaveConcent: '',
  brideNameOfPersonWhoGaveConcentRelationship: '',
  bridePersonWhoGaveConcentResidence: '',

  RegistryNo: '',
  Province: '',
  City_Municipality: '',
  placeOfMarriage: '',
  dateOfMarriage: '',
  timeOfMarriage: '',
  priestWhoMarried: 'Rev. Fr. Arnold M. Montella',
}

const AddWeddingRecords = () => {
  const [data ,setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return {
        ...prev, ...fields
      }
    })
  }
  
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <GroomForm {...data} updateFields={updateFields}/>,
    <BrideForm {...data} updateFields={updateFields}/>,
    <OtherInfoRecord {...data} updateFields={updateFields}/>,
    
  ])
  const navigate = useNavigate();
  
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const recordData = data;
    
    try {
      const res = await axios.post('http://localhost:5000/api/WeddingRecords/create', recordData);
      console.log(res);
      toast.success('Successfully added record');
      navigate('/systemAdmin/WeddingRecord');
    } catch (error) {
      console.error(error);
      toast.error('Please input all the fields');
    }
  
    // Move the next() call inside the try block, so it only proceeds to the next step if the API call is successful
    next();
  };
  
  return (
    <>
      <div className="mx-auto max-w-270">
        <div className="h-1 dark:bg-neutral-600 mb-6">
          <h1>Page {currentStepIndex + 1}/ {steps.length}</h1>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          {step}
          <form onSubmit={onSubmit}>
            <div className="flex justify-end gap-4.5 mb-12 mr-8">
              {!isFirstStep &&
              <button
              onClick={() => { 
              back();
              }}
              className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
              type="button">
              Back
            </button>}
            <button
            className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1"
            type="button"
            onClick={isLastStep ? onSubmit : next} // Use onSubmit when it's the last step
            >
              {isLastStep ? "Add record" : 'Next'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddWeddingRecords