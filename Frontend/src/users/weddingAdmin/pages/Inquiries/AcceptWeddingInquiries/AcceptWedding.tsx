import { useMultistepForm } from "../../../../client/forms/wedding/useMultistepForm";
import GroomForm from "./Groom/GroomForm";
import BrideForm from "./Bride/BrideForm";
import { useState, useEffect, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Breadcrumb from "../../../components/breadcrumbs/Breadcrum";
import toast from "react-hot-toast";

type FormData = {
  email: string;
  phoneNumber: string;
  groomName: string;
  groomAge: string;
  groomLastName: string;
  groomMiddleName: string;
  groomBaptizedAt: string;
  groomAddress: string;
  groomNameOfParishChurch: string;
  groomaddressOfParishChurch: string;
  groomFatherName: string;
  groomMotherName: string;
  groomalreadyBaptist: string;
  groomalreadyKumpil: string;

  Brideemail: string;
  BridephoneNumber: string;
  brideName: string;
  brideAge: string;
  brideLastName: string;
  brideMiddleName: string;
  brideBaptizedAt: string;
  brideAddress: string;
  brideNameOfParishChurch: string;
  brideaddressOfParishChurch: string;
  brideFatherName: string;
  brideMotherName: string;
  bridealreadyBaptist: string;
  bridealreadyKumpil: string;
  start: Date;
};

const INITIAL_DATA: FormData = {
  email: "",
  phoneNumber: "",
  groomName: "",
  groomAge: "",
  groomLastName: "",
  groomMiddleName: "",
  groomBaptizedAt: "",
  groomAddress: "",
  groomNameOfParishChurch: "",
  groomaddressOfParishChurch: "",
  groomFatherName: "",
  groomMotherName: "",
  groomalreadyBaptist: "",
  groomalreadyKumpil: "",

  Brideemail: "",
  BridephoneNumber: "",
  brideName: "",
  brideAge: "",
  brideLastName: "",
  brideMiddleName: "",
  brideBaptizedAt: "",
  brideAddress: "",
  brideNameOfParishChurch: "",
  brideaddressOfParishChurch: "",
  brideFatherName: "",
  brideMotherName: "",
  bridealreadyBaptist: "",
  bridealreadyKumpil: "",

  start: new Date(),
};
const AcceptWedding = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const { id } = useParams();
  const navigate = useNavigate();

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
    ]);

  useEffect(() => {
    axios
    .get(`http://localhost:5000/api/weddingInquiries/Info/` + id)
      .then((res) => {
        console.log(res);
        setData((prev) => ({
          ...prev,
          email: res.data.email,
          phoneNumber: res.data.phoneNumber,
          groomName: res.data.groomName,
          groomAge: res.data.groomAge,
          groomLastName: res.data.groomLastName,
          groomMiddleName: res.data.groomMiddleName,

          Brideemail: res.data.Brideemail,
          BridephoneNumber: res.data.BridephoneNumber,
          brideName: res.data.brideName,
          brideAge: res.data.brideAge,
          brideLastName: res.data.brideLastName,
          brideMiddleName: res.data.brideMiddleName,
          start: res.data.start
        }));
      })
      .catch((err) => console.log(err));
  }, [id]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const recordData = data;

    try {
      const res = await axios.post(
        "http://localhost:5000/api/WeddingClient/accept/" ,
        recordData
      );
      await axios.delete(
        `http://localhost:5000/api/weddingInquiries/reject/${id}`
      );
      console.log(res);
      toast.success("Successfully Accept Inquiries");
      navigate("/weddingAdmin/Client")
    } catch (error) {
      console.error(error);
      toast.error("Please input all the fields");
    }

    // Move the next() call inside the try block, so it only proceeds to the next step if the API call is successful
    next();
  };
  return (
    <>
      <div className="pl-8">
        <Breadcrumb pageName="Accepting Client" />
      </div>

      <div className="mx-auto max-w-270">
        <div className="h-1 dark:bg-neutral-600 mb-6">
          <h1>
            Page {currentStepIndex + 1}/ {steps.length}
          </h1>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          {step}
          <form onSubmit={onSubmit}>
            <div className="flex justify-end gap-4.5 mb-12 mr-8">
              {!isFirstStep && (
                <button
                  onClick={() => {
                    // Scroll to the top of the screen
                    back();
                  }}
                  className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                  type="button"
                >
                  Back
                </button>
              )}
              <button
                className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1"
                type="button"
                onClick={isLastStep ? onSubmit : next} // Use onSubmit when it's the last step
              >
                {isLastStep ? "Accept" : "Next"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AcceptWedding;
