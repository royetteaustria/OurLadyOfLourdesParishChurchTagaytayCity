import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const INITIAL_DATA = {
  dateofBaptismal: '',
  name: '',
  dateofBirth: '',
  birthPlace: '',
  cellphoneNumber: '',
  currentAddress: '',
  fatherName: '',
  fatherBirthOfPlace: '',
  motherName: '',
  motherBirthOfPlace: '',
  marriedPlace: '',
  priestWhoBaptized: 'Rev. Fr. Arnold M. Montel',
  godMother: [''],
  godFather: [''],
};

const ViewInfoRecord = () => {
  const {id} = useParams();
    const [data, setData] = useState(INITIAL_DATA)
    
    useEffect(() => {
      axios.get(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app/api/BaptismalRecords/SingleUserUpdate/`+id)
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
    }, []);
  return (
    <>
      <div className="bg-white p-6 dark:bg-boxdark dark:text-bodydark1">
      <div className="px-4 sm:px-0 ml-6">
        <h3 className="text-base dark:text-bodydark1 font-semibold leading-7 text-black">Baptismal Information</h3>
      </div>
      <div className="ml-6 mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
        <div  className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Name</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.name}</dd>
          </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Date of birth</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.dateofBirth}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Birth Place</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.birthPlace}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold dark:text-bodydark1 leading-6 text-black">Cellphone number</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{data.cellphoneNumber}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Current Address</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.currentAddress}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Father name</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.fatherName}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Father birth of place</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.fatherBirthOfPlace}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Mother name</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.motherName}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Mother birth of place</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.motherBirthOfPlace}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Married Place</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.marriedPlace}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Date of Baptismal</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.dateofBaptismal}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Priest who baptized</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{data.priestWhoBaptized}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">God mother</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">
          {data.godMother.map((godMother, index) => (
          <div key={index}>{godMother}</div>
          ))}
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">God father</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">
          {data.godFather.map((godFather, index) => (
                  <div key={index}>{godFather}</div>
                ))}
          </dd>
        </div>
      </dl>
      </div>
    </div>
    </>
  )
}

export default ViewInfoRecord