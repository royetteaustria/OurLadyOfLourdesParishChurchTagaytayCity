import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import ReactToPrint from "react-to-print";

const WeddingRecord = {
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
  priestWhoMarried: '',
}

const InfoRecords = () => {
  const componentRef = useRef(null);
  const { id } = useParams();
  const [record, setRecord] = useState(WeddingRecord);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/WeddingRecords/SingleUser/`+id)
      .then(res => {
        console.log(res);
        setRecord(prev => ({
          ...prev,
          groomName: res.data.groomName,
          groomBirth: res.data.groomBirth,
          groomPlaceofBirth: res.data.groomPlaceofBirth,
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
          brideBirth: res.data.brideBirth,
          bridePlaceofBirth: res.data.bridePlaceofBirth,
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
  }, []);

  return (
    <>
    {/* <div>
    <ReactToPrint 
    trigger={() => <button className='ml-0 mb-6 p-2 bg-primary  text-white rounded-sm'>Print record</button>}
    content={() => componentRef.current}
    documentTitle='Records info'
    pageStyle='print'
    />
    </div> */}
    <div ref={componentRef} className="bg-white p-6 dark:bg-boxdark dark:text-bodydark1">
    <div className="px-4 sm:px-0 ml-6">
      <h3 className="text-base dark:text-bodydark1 font-semibold leading-7 text-black">Couple Information</h3>
      <p className="mt-1 dark:text-bodydark1 max-w-2xl text-sm leading-6 text-gray-500">Personal details of groom and bride.</p>
    </div>
    <h1 className="mt-6 lg:ml-6 md:ml-6 sm:ml-6 xsm:ml-8 max-xsm:ml-8  dark:text-bodydark1 text-black font-bold">Groom Information</h1>
    <div className="ml-6 mt-6 border-t border-gray-100">
      <dl className="divide-y divide-gray-100">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Groom Name</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{record.groomName}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Date of birth</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{record.groomBirth}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Place of birth</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{record.groomPlaceofBirth}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold dark:text-bodydark1 leading-6 text-black">Sex</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{record.groomSex}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Citezenship</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.groomCitezenship}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Residence</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.groomResidence}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Religion</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.groomReligion}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Civil Status</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.groomCivilStatus}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Father Name</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.groomNameofFather}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Father Citezenship</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.groomFatherCitezenship}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Mother Name(Maiden)</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.groomNameofMother}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Mother Citezenship</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.groomMotherCitezenship}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Name of Person who gave consent or advice</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.groomNameOfPersonWhoGaveConcent}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Relationship of Person who gave consent or advice</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.groomNameOfPersonWhoGaveConcentRelationship}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Residence of Person who gave consent or advice</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.groomPersonWhoGaveConcentResidence}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm mt-8 font-semibold leading-6 dark:text-bodydark1 text-black">Bride Information</dt>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">Bride Name</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{record.brideName}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Date of birth</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{record.brideBirth}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Place of birth</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{record.bridePlaceofBirth}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold dark:text-bodydark1 leading-6 text-black">Sex</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">{record.brideSex}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Citezenship</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.brideCitezenship}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Residence</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.brideResidence}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Religion</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.brideReligion}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Civil Status</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.brideCivilStatus}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Father Name</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.brideNameofFather}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Father Citezenship</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.brideFatherCitezenship}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Mother Name(Maiden)</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.brideNameofMother}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Mother Citezenship</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.brideMotherCitezenship}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Name of Person who gave consent or advice</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.brideNameOfPersonWhoGaveConcent}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Relationship of Person who gave consent or advice</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.brideNameOfPersonWhoGaveConcentRelationship}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Residence of Person who gave consent or advice</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.bridePersonWhoGaveConcentResidence}</dd>
        </div>

        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm mt-8 font-bold leading-6 dark:text-bodydark1 text-black">Other Information</dt>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Registry No</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.RegistryNo}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Province</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.Province}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">City/Municipality</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.City_Municipality}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Place of marriage(Church)</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.placeOfMarriage}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Date of marraige</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.dateOfMarriage}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Time of marriage</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.timeOfMarriage}</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">Priest who marriage</dt>
          <dd className="lg:ml-48 md:ml-48 sm:ml-48 mt-1 text-sm leading-6 text-black dark:text-bodydark1 sm:col-span-2 sm:mt-0">{record.priestWhoMarried}</dd>
        </div>
      </dl>
    </div>
  </div>
    </>
  )
}

export default InfoRecords