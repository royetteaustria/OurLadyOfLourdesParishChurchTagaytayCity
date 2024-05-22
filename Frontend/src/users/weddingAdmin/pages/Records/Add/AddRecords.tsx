import { useMultistepForm } from "./useMultistepForm";
import GroomForm from "./GroomForm";
import BrideForm from "./BrideForm";
import { OtherInfoRecord } from "./OtherInfo";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

type FormData = {
  groomName: string;
  groomMiddleName: string;
  groomLastName: string;
  groomBirth: string;
  groomPlaceofBirth: string;
  groomCitezenship: string;
  groomAddress: string;
  groomReligion: string;
  groomCivilStatus: string;
  groomFatherName: string;
  groomFatherCitezenship: string;
  groomMotherName: string;
  groomMotherCitezenship: string;
  groomNameOfPersonWhoGaveConcent: string;
  groomNameOfPersonWhoGaveConcentRelationship: string;
  groomPersonWhoGaveConcentResidence: string;

  //bride
  brideName: string;
  brideMiddleName: string;
  brideLastName: string;
  brideBirth: string;
  bridePlaceofBirth: string;
  brideCitezenship: string;
  brideAddress: string;
  brideReligion: string;
  brideCivilStatus: string;
  brideFatherName: string;
  brideFatherCitezenship: string;
  brideMotherName: string;
  brideMotherCitezenship: string;
  brideNameOfPersonWhoGaveConcent: string;
  brideNameOfPersonWhoGaveConcentRelationship: string;
  bridePersonWhoGaveConcentResidence: string;

  //other info
  RegistryNo: string;
  Province: string;
  City_Municipality: string;
  placeOfMarriage: string;
  start: string;
  
  priestWhoMarried: string
};

const INITIAL_DATA: FormData = {
  groomName: '',
  groomMiddleName: '',
  groomLastName: '',
  groomBirth: '',
  groomPlaceofBirth: '',
  groomCitezenship: '',
  groomAddress: '',
  groomReligion: '',
  groomCivilStatus: '',
  groomFatherName: '',
  groomFatherCitezenship: '',
  groomMotherName: '',
  groomMotherCitezenship: '',
  groomNameOfPersonWhoGaveConcent: '',
  groomNameOfPersonWhoGaveConcentRelationship: '',
  groomPersonWhoGaveConcentResidence: '',

  //bride
  brideName: '',
  brideMiddleName: '',
  brideLastName: '',
  brideBirth: '',
  bridePlaceofBirth: '',
  brideCitezenship: '',
  brideAddress: '',
  brideReligion: '',
  brideCivilStatus: '',
  brideFatherName: '',
  brideFatherCitezenship: '',
  brideMotherName: '',
  brideMotherCitezenship: '',
  brideNameOfPersonWhoGaveConcent: '',
  brideNameOfPersonWhoGaveConcentRelationship: '',
  bridePersonWhoGaveConcentResidence: '',

  //other info
  RegistryNo: '',
  Province: '',
  City_Municipality: '',
  placeOfMarriage: '',
  start: '',
  
  priestWhoMarried: '', }

const AddRecords = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const { id } = useParams();
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return {
        ...prev,
        ...fields,
      };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <GroomForm {...data} updateFields={updateFields} />,
      <BrideForm {...data} updateFields={updateFields} />,
      <OtherInfoRecord {...data} updateFields={updateFields} />,
    ]);
  const navigate = useNavigate();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const recordData = data;

    try {
      const res = await axios.post(
        "https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//api/WeddingRecords/create",
        recordData
      );
      console.log(res);
      toast.success("Successfully added record");
      navigate("/weddingAdmin/records");
    } catch (error) {
      console.error(error);
      toast.error("Please input all the fields");
    }

    // Move the next() call inside the try block, so it only proceeds to the next step if the API call is successful
    next();
  };
  useEffect(() => {
    axios
      .get(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//api/WeddingClient/singleClient/` + id)
      .then((res) => {
        console.log(res);
        setData((prev) => ({
          ...prev,
          _id: res.data._id,
          email: res.data.email,
          phoneNumber: res.data.phoneNumber,
          groomName: res.data.groomName,
          groomMiddleName: res.data.groomMiddleName,
          groomLastName: res.data.groomLastName,
          groomAge: res.data.groomAge,
          groomBaptizedAt: res.data.groomBaptizedAt,
          groomAddress: res.data.groomAddress,
          groomNameOfParishChurch: res.data.groomNameOfParishChurch,
          groomaddressOfParishChurch: res.data.groomaddressOfParishChurch,
          groomFatherName: res.data.groomFatherName,
          groomMotherName: res.data.groomMotherName,
          groomalreadyBaptist: res.data.groomalreadyBaptist,
          groomalreadyKumpil: res.data.groomalreadyKumpil,
          Brideemail: res.data.Brideemail,
          brideLastName: res.data.brideLastName,
          brideMiddleName: res.data.brideMiddleName,
          brideName: res.data.brideName,
          brideAge: res.data.brideAge,
          brideBaptizedAt: res.data.brideBaptizedAt,
          brideAddress: res.data.brideAddress,
          brideNameOfParishChurch: res.data.brideNameOfParishChurch,
          brideaddressOfParishChurch: res.data.brideaddressOfParishChurch,
          brideFatherName: res.data.brideFatherName,
          brideMotherName: res.data.brideMotherName,
          bridealreadyBaptist: res.data.bridealreadyBaptist,
          bridealreadyKumpil: res.data.bridealreadyKumpil,
          weddingStatus: res.data.weddingStatus,
          start: res.data.start,
        }));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="mx-auto max-w-270">
        <div className="h-1 dark:bg-neutral-600 mb-6">
          <h1>
            Page {currentStepIndex + 1}/ {steps.length}
          </h1>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          {step}
          <form onSubmit={onSubmit}>
            <div className="flex  justify-end gap-4.5 mb-12 mr-8">
              {!isFirstStep && (
                <button
                  onClick={() => {
                    back();
                  }}
                  className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                  type="button"
                >
                  Back
                </button>
              )}
              <button
                className={
                  isFirstStep
                    ? "flex justify-center w-full rounded bg-primary py-3 px-6 ml-8 font-medium text-gray hover:shadow-1"
                    : currentStepIndex === 1
                    ? "flex justify-center rounded bg-primary py-3 px-6 ml-8 font-medium text-gray hover:shadow-1"
                    : "flex justify-center rounded bg-primary py-3 px-6 ml-8 font-medium text-gray hover:shadow-1"
                }
                type="button"
                onClick={isLastStep ? onSubmit : next} // Use onSubmit when it's the last step
              >
                {isLastStep ? "Add record" : "Next"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddRecords;
