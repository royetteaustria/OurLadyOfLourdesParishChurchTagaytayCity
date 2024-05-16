import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
// import { RiArrowDropDownLine } from "react-icons/ri";
import Success from "../../components/modal/Success";
import lourdes from "../../assets/mass.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/Mass1.jpg";
import image2 from "../../assets/Mass2.jpg";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Mass = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [masstype, setMasstype] = useState(
    "Thanks giving and Special intension"
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const MasslInquiries = {
      date: date,
      // time: time,
      masstype: masstype,
      name: name,
      lastName: lastName,
      email: email,
    };
    try {
      const res = await axios.post(
        `https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/massInquiries/create`,
        MasslInquiries
      );
      console.log(res);
      toast.success("Successfully Inquire");
      setFormSubmitted(true);
    } catch (error) {
      toast.error("Something went wrong");
    }
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

  const disAble = () => {
    if (name === lastName) {
      return true;
    }
  };
  const filterTime = (time: Date): boolean => {
    const selectedTime = time.getHours();
    const selectedMinutes = time.getMinutes();
    const selectedDay = time.getDay();

    function isFirstSaturdayOfMonth(date: Date): boolean {
        // Get the first day of the month
        const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);

        // If the first day of the month is Saturday, return true
        if (firstDayOfMonth.getDay() === 6) {
            return true;
        }

        // Otherwise, get the date of the first Saturday
        const dayOfWeek = firstDayOfMonth.getDay();
        const daysToAddForSaturday = (dayOfWeek === 0) ? 6 : 6 - dayOfWeek;
        const firstSaturdayOfMonth = new Date(firstDayOfMonth.getFullYear(), firstDayOfMonth.getMonth(), firstDayOfMonth.getDate() + daysToAddForSaturday);

        // Check if the given date matches the first Saturday of the month
        return date.getDate() === firstSaturdayOfMonth.getDate();
    }

    if (selectedDay === 0) {
        // Sunday
        const times = [
            { hour: 7, minute: 0 },
            { hour: 8, minute: 30 },
            { hour: 10, minute: 0 },
            { hour: 12, minute: 0 },
            { hour: 16, minute: 0 },
            { hour: 18, minute: 0 }
        ];
        return times.some(t => t.hour === selectedTime && t.minute === selectedMinutes);
    } else if (selectedDay === 6) {
        // Saturday
        if (isFirstSaturdayOfMonth(time)) {
            const times = [
                { hour: 6, minute: 30 }, // First Saturday (corrected time)
                { hour: 12, minute: 0 }, // First Saturday
                { hour: 18, minute: 0 }  // First Saturday
            ];
            return times.some(t => t.hour === selectedTime && t.minute === selectedMinutes);
        } else {
            const times = [
                { hour: 6, minute: 15 }, // Other Saturdays
                { hour: 12, minute: 0 }, // Other Saturdays
                { hour: 18, minute: 0 }  // Other Saturdays
            ];
            return times.some(t => t.hour === selectedTime && t.minute === selectedMinutes);
        }
    } else if (selectedDay >= 1 && selectedDay <= 3) {
        // Monday to Wednesday
        return selectedTime === 17 && selectedMinutes === 30;
    } else if (selectedDay === 4 || selectedDay === 5) {
        // Thursday and Friday
        const times = [
            { hour: 17, minute: 30 },
            { hour: 6, minute: 15 },
        ];
        return times.some(t => t.hour === selectedTime && t.minute === selectedMinutes);
    }

    return false;
};


const filterDate = (date : Date) => {
    const currentDate = new Date();
    return date >= currentDate;
};

  // const buttonClass = disAble() ? "bg-opacity-60" : "";

  return (
    <>
      <div className="flex flex-row h-screen lg:py-12 xl:py-12 md:py-8 justify-center">
      <div className="w-1/2 relative hidden md:block">
          <Slider {...settings}>
            <div className="h-[40.5rem] relative">
              <img src={image1} alt="" className="h-full w-full object-cover blur-sm" />
            </div>
            <div className="h-[40.5rem] relative">
              <img src={image2} alt="" className="h-full w-full object-cover blur-sm" />
            </div>
            <div className="h-[40.5rem] relative">
              <img
                src={lourdes}
                alt=""
                className="h-full w-full object-cover blur-sm"
              />
            </div>
          </Slider>
          <div className="absolute inset-0 bg-black bg-opacity-40">
            <h1 className="text-white text-center text-3xl mt-4">
              Mass Schedule
            </h1>
            <ul className="text-white p-12 text-center justify-center flex space-x-10">
              <span>
                <h1 className="text-xl font-semibold">Sunday</h1>
                <li>7:00 am</li>
                <li>8:30 am</li>
                <li>10:00 am</li>
                <li>12:00 nn</li>
                <li>4:00 pm</li>
                <li>6:00 pm</li>
              </span>
              <span>
                <h1 className="text-xl font-semibold">Monday to Friday</h1>
                <li>5:30 pm</li>
              </span>
              <span>
                <h1 className="text-xl font-semibold">Saturday</h1>
                <li>6:30 am (Every First Saturday)</li>
                <li>12:00 nn</li>
                <li>6:00 pm (Anticipated Mass)</li>
              </span>
              <span>
                <h1 className="text-xl font-semibold">Thursday to Saturday</h1>
                <li>6:15 am (Sanctuario - Old Church Except 1st Saturday)</li>
              </span>
              <span>
                <h1 className="text-xl font-semibold">Friday & Wednesday</h1>
                <li>5:00 pm Schedule of Confession (New church)</li>
              </span>
            </ul>
          </div>
        </div>
        <div className="fixed-height-container bg-white overflow-auto flex w-full md:w-1/2">
          {formSubmitted ? (
            <Success onClose={() => setFormSubmitted(false)} />
          ) : (
            <div className="mx-auto max-w-270">
              <h1 className="text-black text-center font-semibold text-3xl mt-4 p-4">
                Mass Inquiries
              </h1>
              <div className="flex flex-col gap-9">
                {/* <!-- Contact Form --> */}
                <div className="rounded-sm ml-6 bg-white ">
                  <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                    <h3 className="font-medium text-black ">
                      Input the information below
                    </h3>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="p-6.5">
                      <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                        <div className="w-full">
                          <label className="mb-2.5 block text-black dark:text-white">
                            First Name
                          </label>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="First name"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        </div>
                        <div className="w-full">
                          <label className="mb-2.5 block text-black dark:text-white">
                            Last Name
                          </label>
                          <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last name"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        </div>
                      </div>
                      {name.trim() === lastName.trim() &&
                        lastName.trim().length > 0 && (
                          <p className="text-danger text-sm mt-1">
                            The last name and first name cannot be the same.
                          </p>
                        )}
                      <div className="w-full mb-2 mt-2">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="email"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>
                      <div className="mb-5.5 w-full">
                        <label className="mb-3 block text-black dark:text-white">
                          Date of Mass
                        </label>
                        <div className="relative">
                          <ReactDatePicker
                            className="ring-1 text-lg font-medium text-black w-full"
                            placeholderText="Select date"
                            selected={date}
                            onChange={(date) => setDate(date)}
                            minDate={new Date()}
                            showTimeSelect
                            dateFormat="MMMM d, yyyy h:mm aa"
                            filterTime={filterTime}
                            filterDate={filterDate}
                            timeIntervals={15}
                          />
                        </div>
                      </div>
                      {/* <div className="mb-5.5">
                    <label className="mb-3 block text-black dark:text-white">
                    Time of mass
                    </label>
                    <div className="relative">
                    <input
                      type="time"
                      name=""
                      required
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div> */}
                      <div className="mb-4.5">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Mass type
                        </label>
                        <div className="relative bg-transparent dark:bg-form-input">
                          <select
                            value={masstype}
                            onChange={(e) => setMasstype(e.target.value)}
                            className="relative w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus-border-primary"
                          >
                            <option value="Thanks giving and Special intension">
                              Thanks giving and Special intension
                            </option>
                            <option value="Healing and recovery">
                              Healing and recovery
                            </option>
                            <option value="Eternal repose of the souls">
                              Eternal repose of the souls
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="flex justify-end mt-16">
                        <button
                          onClick={() => navigate(-1)}
                          className="rounded bg-transparent p-3 font-medium mr-2 text-black border border-primary"
                        >
                          Cancel
                        </button>
                        <button
                          disabled={disAble()}
                          className={
                            disAble()
                              ? "rounded bg-primary bg-opacity-70 p-3 font-medium text-gray"
                              : "rounded bg-primary  p-3 font-medium text-gray"
                          }
                        >
                          Reserve
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Mass;
