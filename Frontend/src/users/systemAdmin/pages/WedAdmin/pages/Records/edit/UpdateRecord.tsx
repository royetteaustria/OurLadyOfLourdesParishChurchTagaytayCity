import { editMultiForm } from './editMultiForm'
import EditBrideForm from './EditBride'
import EditGroomForm from './EditGroom'
import EditOtherInfoRecord from './EditOtherInfo'
import {FormEvent, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import Breadcrumb from '../../../../../components/breadcrumbs/Breadcrum'

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

const EditRecords = () => {
  const [data ,setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return {
        ...prev, ...fields
      }
    })
  }
  const {id} = useParams()
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = editMultiForm([
    <EditGroomForm {...data} updateFields={updateFields}/>,
    <EditBrideForm {...data} updateFields={updateFields}/>,
    <EditOtherInfoRecord {...data} updateFields={updateFields}/>,
    
  ])
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//api/WeddingRecords/SingleUser/`+id)
      .then(res => {
        console.log(res);
        setData(prev => ({
          ...prev,
          groomName: res.data.groomName,
          groomPlaceofBirth: res.data.groomPlaceofBirth,
          groomBirth: res.data.groomBirth,
          groomSex: res.data.groomSex,
          groomCitezenship: res.data.groomCitezenship,
          groomResidence: res.data.groomResidence,
          groomReligion: res.data.groomReligion,
          groomCivilStatus: res.data.groomCivilStatus,
          groomNameofFather: res.data.groomNameofFather,
          groomFatherCitezenship: res.data.groomFatherCitezenship,
          groomNameofMother: res.data.groomNameofMother,
          groomMotherCitezenship: res.data.groomMotherCitezenship,
          groomNameOfPersonWhoGaveConcent: res.data.groomNameOfPersonWhoGaveConcent,
          groomNameOfPersonWhoGaveConcentRelationship: res.data.groomNameOfPersonWhoGaveConcentRelationship,
          groomPersonWhoGaveConcentResidence: res.data.groomPersonWhoGaveConcentResidence,

          brideName: res.data.brideName,
          bridePlaceofBirth: res.data.bridePlaceofBirth,
          brideBirth: res.data.brideBirth,
          brideSex: res.data.brideSex,
          brideCitezenship: res.data.brideCitezenship,
          brideResidence: res.data.brideResidence,
          brideReligion: res.data.brideReligion,
          brideCivilStatus: res.data.brideCivilStatus,
          brideNameofFather: res.data.brideNameofFather,
          brideFatherCitezenship: res.data.brideFatherCitezenship,
          brideNameofMother: res.data.brideNameofMother,
          brideMotherCitezenship: res.data.brideMotherCitezenship,
          brideNameOfPersonWhoGaveConcent: res.data.brideNameOfPersonWhoGaveConcent,
          brideNameOfPersonWhoGaveConcentRelationship: res.data.brideNameOfPersonWhoGaveConcentRelationship,
          bridePersonWhoGaveConcentResidence: res.data.bridePersonWhoGaveConcentResidence,

          RegistryNo: res.data.RegistryNo,
          Province: res.data.Province,
          City_Municipality: res.data.City_Municipality,
          placeOfMarriage: res.data.placeOfMarriage,
          dateOfMarriage: res.data.dateOfMarriage,
          timeOfMarriage: res.data.timeOfMarriage,
          priestWhoMarried: res.data.priestWhoMarried,
        }));
      })
      .catch(err => console.log(err));
  }, [id]);
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const recordData = data;

    try {
      const res = await axios.put('https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//api/WeddingRecords/updaterecords/'+id, recordData);
      console.log(res);
      toast.success('Successfully update record');
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
    <div className='pl-14'>
    <Breadcrumb pageName='Update Wedding Record'/>  
    </div>
    
      <div className="mx-auto max-w-270">
        <div className="h-1 dark:bg-neutral-600 mb-6">
        <h1>Page {currentStepIndex + 1}/ {steps.length}</h1>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        {step}
        <form onSubmit={onSubmit}>
          <div className="flex justify-end gap-4.5 mb-12 mr-8">
            {!isFirstStep && <button
             onClick={() => { // Scroll to the top of the screen
              back();
            }}
              className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
              type="button"
            >
              Back
            </button>}
            <button
              className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1"
              type="button"
              onClick={isLastStep ? onSubmit : next} // Use onSubmit when it's the last step
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

export default EditRecords