import { FormEvent, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import GroomForm from "./Groom";
import BrideForm from "./BrideForm";
import DatePicker from "./DatePicker";
import { useMultistepForm } from "./useMultistepForm";
import Review from "./Review";
import Success from "../../components/modal/Success";
import { useNavigate, useParams } from "react-router-dom";
import TermCondition from "../../../../components/modal/TermCondition";
// import lourdes from "../../assets/wedding.jpg";
import wedding2 from "../../assets/WeddingForm.jpg";
import image1 from "../../assets/Carousel.jpg";
import image2 from "../../assets/slider.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type FormData = {
  email: string;
  phoneNumber: string;
  groomName: string;
  groomAge: string;
  groomLastName: string;
  groomMiddleName: string;
  brideName: string;
  brideAge: string;
  Brideemail: string;
  BridephoneNumber: string;
  brideLastName: string;
  brideMiddleName: string;
  item: string;
  isCheckboxChecked: boolean;
  start: Date | string;
};

const reserve: FormData = {
  email: "",
  phoneNumber: "",
  groomName: "",
  groomAge: "",
  groomLastName: "",
  groomMiddleName: "",

  brideName: "",
  brideAge: "",
  Brideemail: "",
  BridephoneNumber: "",
  brideLastName: "",
  brideMiddleName: "",
  item: "",
  isCheckboxChecked: false,
  start: '',
};

const WeddingReserve = () => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const {start} = useParams()
  const [data, setData] = useState(reserve);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();
  const groomAgeAsNumber = parseInt(data.groomAge);
  const brideAgeAsNumber = parseInt(data.brideAge);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return {
        ...prev,
        ...fields,
      };
    });
  }

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <TermCondition
        isCheckboxChecked={isCheckboxChecked}
        setIsCheckboxChecked={setIsCheckboxChecked}
        updateFields={updateFields}
      />,
      <DatePicker {...data} updateFields={updateFields} />,
      <GroomForm {...data} updateFields={updateFields} />,
      <BrideForm {...data} updateFields={updateFields} />,
      <Review data={data} />,
    ]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const recordData = data;

    try {
      const res = await axios.post(
        `https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/weddingInquiries/create`,
        recordData
      );
      await axios.put(`https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/weddingInquiries/update/${data.start}`)
      console.log(res);
      toast.success("Successfully Reserve");
      setFormSubmitted(true);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
    // Move the next() call inside the try block, so it only proceeds to the next step if the API call is successful
    next();
  };

  const cancel = () => {
    navigate("/reservation");
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Ito ang nag-e-enable ng auto-play
    autoplaySpeed: 2000, // Bilis ng pag-slide sa milliseconds
  };
  return (
    <>
      <div className="flex flex-row h-screen lg:py-12 xl:py-12 md:py-8 justify-center">
        <div className="w-1/2 relative hidden md:block">
          <Slider {...settings}>
            <div className="md:h-[35rem] xl:h-[40.4rem] relative blur-sm">
              <img
                src={wedding2}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="md:h-[35rem] xl:h-[40.4rem] relative blur-sm">
              <img src={image2} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="md:h-[35rem] xl:h-[40.4rem] relative blur-sm">
              <img src={image1} alt="" className="h-full w-full object-cover" />
            </div>
          </Slider>
          <div className="absolute inset-0 bg-[#B5651d] bg-opacity-5">
            <h1 className="text-white text-center font-semibold text-3xl mt-12">
              Wedding Inquiries
            </h1>
            <div className="flex flex-col justify-center items-center content-center p-8 gap-2">
              <div>
                <h3
                  className={`flex items-center justify-center h-8 text-xl${
                    currentStepIndex === 0
                      ? " text-white bg-[#B5651d] bg-opacity-80 rounded-sm shrink-0 px-2 py-5"
                      : " rounded-full shrink-0 dark:border-gray-400 text-white text-opacity-70"
                  }`}
                >
                  Privacy and Policy
                </h3>
              </div>
              <div>
                <h3
                  className={`flex items-center justify-center h-8 text-xl${
                    currentStepIndex === 1
                      ? " text-white bg-[#B5651d] bg-opacity-80 rounded-sm shrink-0 px-2 py-5"
                      : " rounded-full shrink-0 dark:border-gray-400 text-white text-opacity-70"
                  }`}
                >
                  Select Date and Time
                </h3>
              </div>
              <div>
                <h3
                  className={`flex items-center justify-center h-8 text-xl${
                    currentStepIndex === 2
                      ? " text-white bg-[#B5651d] bg-opacity-80 rounded-sm shrink-0 px-2 py-5"
                      : " rounded-full shrink-0 dark:border-gray-400 text-white text-opacity-70"
                  }`}
                >
                  Groom Information
                </h3>
              </div>
              <div>
                <h3
                  className={`flex items-center justify-center h-8 text-xl${
                    currentStepIndex === 3
                      ? " text-white bg-[#B5651d] bg-opacity-80 rounded-sm shrink-0 px-2 py-5"
                      : " rounded-full shrink-0 dark:border-gray-400 text-white text-opacity-70"
                  }`}
                >
                  Bride Information
                </h3>
              </div>
              <div>
                <h3
                  className={`flex items-center justify-center h-8 text-xl${
                    isLastStep
                      ? " text-white bg-[#B5651d] bg-opacity-80 rounded-sm shrink-0 px-2 py-5"
                      : " rounded-full shrink-0 dark:border-gray-400 text-white text-opacity-70"
                  }`}
                >
                  Review Information
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed-height-container bg-white overflow-auto flex w-full md:w-1/2">
          {formSubmitted ? (
            <Success onClose={() => setFormSubmitted(false)} />
          ) : (
            <div className="mx-auto w-full">
              <div className="rounded-sm bg-white">
                {step}
                <form onSubmit={onSubmit}>
                  <div className="flex justify-end py-16 gap-4.5 mb-12 mr-8">
                    {/* Back Button */}
                    {!isFirstStep && (
                      <button
                        onClick={() => back()}
                        className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white mt-38"
                        type="button"
                      >
                        Back
                      </button>
                    )}

                    {/* Cancel Button */}
                    <button
                      type="button"
                      onClick={cancel}
                      className={
                        isFirstStep
                          ? "flex justify-center rounded bg-white py-2 px-6 font-medium text-black border border-danger hover:shadow-1 hover:bg-danger hover:text-white mt-38"
                          : "hidden"
                      }
                    >
                      Cancel
                    </button>
                    {/* Next or Submit Button */}
                    <button
                      className={`flex justify-center rounded py-2 px-6 font-medium hover:shadow-1  ${
                        isFirstStep && !isCheckboxChecked
                          ? "bg-primary bg-opacity-90 text-white text-opacity-30"
                          : "bg-primary text-gray"
                      } ${
                        (isFirstStep && !isCheckboxChecked) ||
                        (currentStepIndex === 1 && (data.start === '')) ||
                        (currentStepIndex === 2 &&
                          (data.groomName === "" ||
                            data.email === "" ||
                            data.groomAge === "" ||
                            groomAgeAsNumber < 18 ||
                            data.groomLastName === "" ||
                            data.groomMiddleName === "")) ||
                        (currentStepIndex === 3 &&
                          (data.brideName === "" ||
                            data.brideAge === "" ||
                            brideAgeAsNumber < 18 ||
                            data.brideLastName === "" ||
                            data.brideMiddleName === ""))
                          ? "bg-opacity-80 cursor-not-allowed"
                          : ""
                      }`}
                      type="button"
                      onClick={
                        isLastStep
                          ? onSubmit
                          : () => {
                            if (
                              (currentStepIndex === 2 &&
                                (data.groomName === "" ||
                                  data.email === "" ||
                                  data.groomAge === "" ||
                                  groomAgeAsNumber < 18 ||
                                  data.groomLastName === "" ||
                                  data.groomMiddleName === "")) ||
                                  (currentStepIndex === 1 && (data.start === '')) ||
                              (currentStepIndex === 3 &&
                                (data.brideName === "" ||
                                  data.brideAge === "" ||
                                  brideAgeAsNumber < 18 ||
                                  data.brideLastName === "" ||
                                  data.brideMiddleName === ""))
                            ) {
                              return;
                            }
                            next();
                          }
                      }
                      disabled={
                        (isFirstStep && !isCheckboxChecked) ||
                        (currentStepIndex === 2 &&
                          (data.groomName === "" ||
                            data.email === "" ||
                            data.groomAge === "" ||
                            groomAgeAsNumber < 18 ||
                            data.groomLastName === "" ||
                            data.groomMiddleName === "")) ||
                            (currentStepIndex === 1 && (data.start === '')) ||
                        (currentStepIndex === 3 &&
                          (data.brideName === "" ||
                            data.brideAge === "" ||
                            brideAgeAsNumber < 18 ||
                            data.brideLastName === "" ||
                            data.brideMiddleName === ""))
                      }
                    >
                      {isLastStep ? "Reserve" : "Next"}
                    </button>
                  </div>
                </form>
              </div>
              <Toaster />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WeddingReserve;
