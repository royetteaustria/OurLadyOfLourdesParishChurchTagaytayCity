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
  start: Date | string;
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

  start: '',
};
const AcceptWedding = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [GroomName, setGroomName] = useState(data.groomName);
  const [BrideName, setBrideName] = useState(data.brideName);
  const [BrideLastName, setBrideLastName] = useState(data.brideLastName)
  const [GroomLastName, setGroomLastName] = useState(data.groomLastName)
  const [DateOfWedding, setDateOfWedding] = useState(data.start);
  // const [Rites, setRites] = useState('');
  // const [GuestPriest, setGuestPriest] = useState('');
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
        .get(`https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/weddingInquiries/Info/` + id)
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
            start: res.data.start,
          }));
          setGroomName(res.data.groomName); // Update GroomName state
          setBrideName(res.data.brideName); // Update BrideName state
          setGroomLastName(res.data.groomLastName); // Update GroomName state
          setBrideLastName(res.data.brideLastName); // Update BrideName state
        })
        .catch((err) => console.log(err));
    }, [id]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const recordData = data;
    const reportData = {
      GroomName: GroomName,
      BrideName: BrideName,
      DateOfWedding: data.start,
      GroomLastName: GroomLastName,
      BrideLastName: BrideLastName
    };
    try {
     axios.post("https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/ReportModule/create", reportData);
      const res = await axios.post(
        "https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/WeddingClient/accept",
        recordData
      );
      // await axios.put(`https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/WeddingClient/update/${data.start}`)
      await axios.delete(
        `https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/weddingInquiries/reject/${id}`
      );
      console.log(res);
      toast.success("Successfully Accept Inquiries");
      navigate("/weddingAdmin/Client");
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
            {/* <input
              type="text"
              name="GroomName"
              required
              value={data.groomName}
              // onChange={(e) => setGroomName(e.target.value)}
              placeholder="Enter Groom name"
              className="hidden w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            /> */}
            <input
              type="text"
              name="GroomName"
              required
              value={GroomName}
              onChange={(e) => setGroomName(e.target.value)}
              placeholder="Enter Groom name"
              className="hidden w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            />
            <input
              type="text"
              name="GroomName"
              required
              value={BrideName}
              onChange={(e) => setBrideName(e.target.value)}
              placeholder="Enter Groom name"
              className="hidden w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            />
            <input
              type="text"
              name="Groom Last name"
              required
              value={GroomLastName}
              onChange={(e) => setGroomLastName(e.target.value)}
              placeholder="Enter Groom name"
              className="hidden w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            />
            <input
              type="text"
              name="Bride Lastname"
              required
              value={BrideLastName}
              onChange={(e) => setBrideLastName(e.target.value)}
              placeholder="Enter Groom name"
              className="hidden w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            />
            <input
              type="date"
              name="DateOfwedding"
              required
              value={DateOfWedding.toString()}
              onChange={(e) => setDateOfWedding(e.target.value)}
              placeholder="Enter Groom name"
              className="hidden w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            />

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
