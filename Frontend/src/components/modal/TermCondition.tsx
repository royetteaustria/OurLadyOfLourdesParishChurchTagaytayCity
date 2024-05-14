// import { useState } from "react"

type TermConditionProps = {
  isCheckboxChecked: boolean;
  setIsCheckboxChecked: React.Dispatch<React.SetStateAction<boolean>>;
  updateFields: (fields: Partial<TermConditionProps>) => void
};

export function TermCondition ({isCheckboxChecked, setIsCheckboxChecked}: TermConditionProps) {

  // const [seeMore, setSeeMore] = useState(false)

  // const handleClick = () => {
  //   window.scrollTo(0, 0);
  //   setSeeMore(!seeMore)
  // }

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
    // Pass the updated state to the parent component
  };

  return (
    <div className="px-12 py-12 text-black max-w-270 bg-transparent" data-aos="fade-right">
      <div className="px-4 sm:px-0 border-b">
        <h3 className="text-xl font-semibold leading-7 text-black mb-4">Privacy Policy</h3>
      </div>
      <div className="py-12">
        <ul className="m-4">
          <li>
            <h1 className="text-md font-semibold text-black">1. Accepting of Terms</h1>
            <p className="mt-2 ml-4">By accessing and using the Online Reservation system provided by Our Lady Of Lourdes Parish Church, you agree to comply with and be bound by this Terms and conditions</p>
          </li>
          
          
              <li className="mt-6">
                <h1 className="text-md font-semibold text-black">2. Use of Information</h1>
                <span className="space-y-4">
                  <ol className="mt-2 ml-4">
                  Use of Information 
                  Our website only collects general  information from clients upon submitting inquiries . The collected information is exclusive , and can only be viewed by the Parish staff who will review your inquiry and manage reservation. 
                  </ol>
                </span>
              </li>
              <li className="mt-6">
                <h1 className="text-md font-semibold text-black">3. Reservation phase</h1>
                <span className="space-y-4">
                  <ol className="mt-2 ml-4">
                  Clients must provide responsible and reliable information needed when booking a reservation.
                  </ol>
                </span>
              </li>
              
              <div className="flex justify-start p-4 text-black mt-4">
                <span className="mr-4">
                  <input type="checkbox" onChange={handleCheckboxChange} checked={isCheckboxChecked}/>
                </span>
                <p className="text-md">I agree with the terms and condition policy </p>
              </div>
        </ul>
        
      </div>
    </div>
  )
}

export default TermCondition
