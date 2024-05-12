import { FaRegCalendar } from "react-icons/fa";
import { FaRegHandPointer } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";

const Step = () => {
  return (
    <>
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24 bg-white">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div data-aos="fade-up" data-aos-duration="2000" className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How to reserve a slot?</h2>
            {/* <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p> */}
        </div>

        <ul  className="max-w-md mx-auto mt-16 space-y-12">
            {/* First Step */}
            <li  className="relative flex items-start">
                <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>
                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                    <FaRegCalendar size={30} style={{ color: '#3C50E0' }}/>
                </div>
                <div className="ml-6">
                    <h3 className="text-lg font-semibold text-black">Go to reservation page</h3>
                    {/* <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> */}
                </div>
            </li>
                {/* Second Step */}
            <li className="relative flex items-start">
                <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                    <FaRegHandPointer size={30} style={{ color: '#3C50E0' }}/>
                </div>
                <div className="ml-6">
                    <h3 className="text-lg font-semibold text-black">Choose type of reservation</h3>
                    {/* <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> */}
                </div>
            </li>
                {/* Third Step */}
            <li className="relative flex items-start">
            <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>
                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                    <IoNewspaperOutline size={30} style={{ color: '#3C50E0' }}/>
                </div>
                <div className="ml-6">
                    <h3 className="text-lg font-semibold text-black">Fill up the form</h3>
                    {/* <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> */}
                </div>
            </li>
                {/* Last Step */}
            <li className="relative flex items-start">
                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                    <FiSend size={30} style={{ color: '#3C50E0' }}/>
                </div>
                <div className="ml-6">
                    <h3 className="text-lg font-semibold text-black">Submit the form</h3>
                    {/* <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> */}
                </div>
            </li>
        </ul>
    </div>
</section>

    </>
  )
}

export default Step