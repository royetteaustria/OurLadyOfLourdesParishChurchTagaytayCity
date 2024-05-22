import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import {FormEvent, useState} from 'react'
import { useMultistepForm } from './useMultiform'
import MainRecord from './MainRecord'
import OtherRecord from './OtherRecord'

type FormData = {
  dateofBaptismal: string;
  name: string;
  dateofBirth: string;
  birthPlace: string;
  cellphoneNumber: string;
  currentAddress: string;
  fatherName: string;
  fatherBirthOfPlace: string;
  motherName: string;
  motherBirthOfPlace: string; // Fix typo here
  marriedPlace: string;
  priestWhoBaptized: string;
  godMother: string[];
  godFather: string[];
};

const INITIAL_DATA: FormData = {
  dateofBaptismal: '',
  name: '',
  dateofBirth: '',
  birthPlace: '',
  cellphoneNumber: '',
  currentAddress: '',
  fatherName: '',
  fatherBirthOfPlace: '',
  motherName: '',
  motherBirthOfPlace: '', // Fix typo here
  marriedPlace: '',
  priestWhoBaptized: 'Rev. Fr. Arnold M. Montel',
  godMother: [''],  
  godFather: [''],
};

const AddRecord = () => {
  const [data ,setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return {
        ...prev, ...fields
      }
    })
  }
  
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <MainRecord {...data} updateFields={updateFields}/>,
    <OtherRecord {...data} updateFields={updateFields}/>,
  ])
    const navigate = useNavigate();
  
    const onSubmit = async (e: FormEvent) => {
      e.preventDefault();
      const recordData = data;
    
      try {
        const res = await axios.post('https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//api/BaptismalRecords/create', recordData);
        console.log(res);
        toast.success('Successfully added record');
        navigate('/systemAdmin/BaptismalRecord');
        
        // Move next() inside the try block to ensure it's called only if the API call succeeds
        next();
      } catch (error) {
        console.error(error);
        toast.error('Please input all the fields');
      }
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
              {isLastStep ? "Add record" : 'Next'}
            </button>
          </div>
        </form>
        </div>
      </div>
    </>
  )
}

export default AddRecord