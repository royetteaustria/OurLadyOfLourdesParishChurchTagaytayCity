import axios from "axios";
import { useState, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import Success from "../../components/modal/Success";
import { useNavigate } from "react-router-dom";
import { useMultistepForm } from "../wedding/useMultistepForm";
import TermCondition from "../../../../components/modal/TermCondition";
import { BaptismalForm } from "./BaptismalForm";
import { AdvancedCalendar } from "./BaptismalReservation/CalendarReservation/components";
import ReviewReservation from "./ReviewReservation";
import baptise from "../../assets/BAPTIZE.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/Baptise1.jpg";
import image2 from "../../assets/Baptise2.jpg";
type FormData = {
  start: Date | string;
  name: string
  lname: string
  email: string
  dateofBirth: string
  birthPlace: string
  cellphoneNumber: string
  currentAddress: string
  fatherName: string
  fatherBirthOfPlace: string
  motherName: string
  motherBirthOfPlace: string
  marriedPlace: string
  baptismalType: string
  isCheckboxChecked: Boolean;
};

const reserve: FormData = {
  start: '',
  name: "",
  lname: "",
  email: "",
  dateofBirth: "",
  birthPlace: "",
  cellphoneNumber: "",
  currentAddress: "",
  fatherName: "",
  fatherBirthOfPlace: "",
  motherName: "",
  motherBirthOfPlace: "",
  isCheckboxChecked: false,
  marriedPlace: "",
  baptismalType: "",
};

const Baptismal = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [data, setData] = useState(reserve);
  // const [selectedDate, setSelectedDate] = useState("");

  // const handleDateSelected = (date: string) => {
  //   setSelectedDate(date);
  // };

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return {
        ...prev,
        ...fields,
      };
    });
  }

  const { step, currentStepIndex, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <TermCondition
        isCheckboxChecked={isCheckboxChecked}
        setIsCheckboxChecked={setIsCheckboxChecked}
        updateFields={updateFields}
      />,
      <AdvancedCalendar {...data} updateFields={updateFields}/>,
      <BaptismalForm {...data} updateFields={updateFields} />,
      <ReviewReservation data={data} />,
    ]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const recordData = data;

    try {
      const res = await axios.post(
        `https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app/api/baptismalInquiries/createInquiries`,
        recordData
      );
      // await axios.put(
      //   `https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app/api/baptismalInquiries/updateSlot/${data.start}`,)
      console.log(res);
      toast.success("Successfully Inquire");
      setFormSubmitted(true);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    next();
  };

  const cancel = () => {
    navigate("/reservation");
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Ito ang nag-e-enable ng auto-play
    autoplaySpeed: 3000, // Bilis ng pag-slide sa milliseconds
    arrows: false,
  };
  return (
    <>
      <div className="flex flex-row h-screen lg:py-12 xl:py-12 md:py-8 justify-center">
        {currentStepIndex !== 1 && (
          <div className="w-1/2 relative hidden md:block">
            <Slider {...settings}>
              <div className="h-[40.5rem] relative">
                <img
                  src={baptise}
                  alt=""
                  className="h-full w-full object-cover blur-sm"
                />
              </div>
              <div className="h-[40.5rem] relative">
                <img
                  src={image1}
                  alt=""
                  className="h-full w-full object-cover blur-sm"
                />
              </div>
              <div className="h-[40.5rem] relative">
                <img
                  src={image2}
                  alt=""
                  className="h-full w-full object-cover blur-sm"
                />
              </div>
            </Slider>
            <div className="absolute inset-0 bg-black bg-opacity-20">
              <h1 className="text-white text-center font-semibold text-3xl mt-12">
                Baptismal Inquiries
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
                    View Available Date and Time
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
                    Input Information
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
                    Review Information
                  </h3>
                </div>
              </div>
              <div className="p-14 flex justify-center text-xl">
                <p className="text-white">
                  You can reserve a special baptismal if the slot available is 5, except sunday
                </p>
              </div>
            </div>
          </div>
        )}

        <div
          className={`${
            currentStepIndex === 1
              ? "w-2/3"
              : "fixed-height-container bg-white overflow-auto flex" // Nabago
          }`}
        >
          {formSubmitted ? (
            <Success onClose={() => setFormSubmitted(false)} />
          ) : (
            <div className="mx-auto max-w-270">
              <div className="rounded-sm bg-white ">
                {step}
                <form onSubmit={handleSubmit}>
                  <div className="flex justify-end py-16 gap-4.5 mb-12 mr-8">
                    {!isFirstStep && (
                      // Back button
                      <button
                        onClick={() => back()}
                        className={`flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 mt-6 ${
                          isFirstStep ? "hidden" : ""
                        }`}
                        type="button"
                      >
                        Back
                      </button>
                    )}

                    {/* cancel button */}
                    <button
                      type="button"
                      onClick={cancel}
                      className={
                        isFirstStep
                          ? "flex justify-center rounded bg-white py-2 px-6 font-medium text-black border border-danger hover:shadow-1 hover:bg-danger hover:text-white mt-6"
                          : "hidden"
                      }
                    >
                      Cancel
                    </button>
                    {/* next or sumbmit button */}
                    <button
                      className={`flex justify-center rounded py-2 px-6 font-medium hover:shadow-1 mt-6 ${
                        isFirstStep && !isCheckboxChecked
                          ? "bg-black bg-opacity-20 text-black text-opacity-30"
                          : "bg-primary text-gray"
                      }`}
                      type="button"
                      onClick={isLastStep ? handleSubmit : next}
                      disabled={
                        (isFirstStep && !isCheckboxChecked) ||
                        (currentStepIndex === 2 &&
                          (data.baptismalType === "" ||
                            data.name === "" ||
                            data.lname === "" ||
                            data.email === "" ||
                            data.dateofBirth === "" ||
                            data.birthPlace === "" ||
                            data.cellphoneNumber === "" ||
                            data.currentAddress === "" ||
                            data.fatherName === "" ||
                            data.fatherBirthOfPlace === "" ||
                            data.motherName === "" ||
                            data.motherBirthOfPlace === "" ||
                            data.marriedPlace === ""))
                      }
                    >
                      {isLastStep ? "Reserve" : "Next"}
                    </button>
                  </div>
                </form>
                <Toaster />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Baptismal;
