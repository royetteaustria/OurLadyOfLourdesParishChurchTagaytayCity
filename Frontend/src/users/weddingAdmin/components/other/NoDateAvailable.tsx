import { Link } from "react-router-dom"
import { AiOutlinePlusCircle } from 'react-icons/ai'
const NoDateAvailable = () => {
  return (
    
  <div className="max-w-4xl mx-auto px-10 py-4 dark:bg-boxdark bg-white rounded-lg -ml-5">
    <div className="flex flex-col justify-center items-center pl-52">
      <div className="flex justify-center items-center">
        <img className="w-64 h-64"
          src="https://res.cloudinary.com/daqsjyrgg/image/upload/v1690257804/jjqw2hfv0t6karxdeq1s.svg"
          alt="image empty states" />
      </div>
      <h1 className="text-gray-700 font-medium text-2xl text-center mb-3">No Date Available</h1>
      <div className="flex flex-col justify-center">
        <Link to='/weddingAdmin/addReports'>
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded bg-primary">
            <span className="w-6 h-6 items-center mt-2"><AiOutlinePlusCircle size={18}/></span>
            Set date
          </button>
        </Link>
      </div>
    </div>
  </div>
  
  )
}

export default NoDateAvailable