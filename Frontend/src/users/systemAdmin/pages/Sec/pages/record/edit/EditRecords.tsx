import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import {FormEvent, useState} from 'react'
import { editMultistepForm } from './EditMultiform'
import EditMain from './EditMain'
import EditOther from './EditOther'
import {useEffect} from 'react'
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
  godMother: string;
  godFather: string;
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
  godMother: '',
  godFather: '',
};

const EdiRecord = () => {
  const [data ,setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return {
        ...prev, ...fields
      }
    })
  }
const {id} = useParams()
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = editMultistepForm([
    <EditMain {...data} updateFields={updateFields}/>,
    <EditOther {...data} updateFields={updateFields}/>,
  ])
    const navigate = useNavigate();
    useEffect(() => {
      axios.get(`https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/BaptismalRecords/SingleUserUpdate/`+id)
        .then(res => {
          console.log(res);
          setData(prev => ({
            ...prev,
            dateofBaptismal: res.data.dateofBaptismal,
            name: res.data.name,
            dateofBirth: res.data.dateofBirth,
            birthPlace: res.data.birthPlace,
            cellphoneNumber: res.data.cellphoneNumber,
            currentAddress: res.data.currentAddress,
            fatherName: res.data.fatherName,
            motherName: res.data.motherName,
            fatherBirthOfPlace: res.data.fatherBirthOfPlace,
            marriedPlace: res.data.marriedPlace,
            motherBirthOfPlace: res.data.motherBirthOfPlace,
            priestWhoBaptized: res.data.priestWhoBaptized,
            godMother: res.data.godMother,
            godFather: res.data.godFather,
          }));
        })
        .catch(err => console.log(err));
    }, [id]);
    
    const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const recordData = data;

    try {
      const res = await axios.put('https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/BaptismalRecords/updateBaptismalRecords/'+id, recordData);
      console.log(res);
      toast.success('Successfully update record');
      navigate('/systemAdmin/BaptismalRecord');
    } catch (error) {
      console.error(error);
      toast.error('Failed to update record');
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

export default EdiRecord