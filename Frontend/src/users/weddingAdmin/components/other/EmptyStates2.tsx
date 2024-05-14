import { Link } from "react-router-dom"
import { AiOutlinePlusCircle } from 'react-icons/ai'

const EmptyStates2 = () => {
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const d = new Date();
  let month = months[d.getMonth()];
  // const y = new Date();
  return (
    
  <div className="max-w-4xl mx-auto px-10 py-4 dark:bg-boxdark bg-white rounded-lg">
    <div className="flex flex-col justify-center items-center pl-52">
      <div className="flex justify-center items-center">
        <img className="w-64 h-64"
          src="https://res.cloudinary.com/daqsjyrgg/image/upload/v1690257804/jjqw2hfv0t6karxdeq1s.svg"
          alt="image empty states" />
      </div>
      <h1 className="text-gray-700 font-medium text-2xl text-center mb-3">No reports yet</h1>
      <p className="text-gray-500 text-center mb-6">Let's Create the report for this month of {month}</p>
      <div className="flex flex-col justify-center">
        <Link to='/weddingAdmin/addreports'>
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded bg-primary">
            <span className="w-6 h-6 items-center mt-2"><AiOutlinePlusCircle size={18}/></span>
            Add report
          </button>
        </Link>
      </div>
    </div>
  </div>
  
  )
}

export default EmptyStates2