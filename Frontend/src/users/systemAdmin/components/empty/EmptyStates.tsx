import { Link } from "react-router-dom"
// import { AiOutlinePlusCircle } from 'react-icons/ai'

type empty = {
    navigate: string;
    Title: string;
    description: string
}

const EmptyStates = ({navigate, Title, description} : empty) => {
  
  return (
    
  <div className="max-w-4xl mx-auto px-10 xl:justify-center flex xl:items-center content-center xl:ml-50 md:ml-32 lg:ml-32  dark:bg-boxdark bg-white rounded-lg ">
    <div className="flex flex-col justify-center items-center">

      <div className="flex justify-center items-center">
        <img className="w-64 h-64"
          src="https://res.cloudinary.com/daqsjyrgg/image/upload/v1690257804/jjqw2hfv0t6karxdeq1s.svg"
          alt="image empty states" />
      </div>
      <h1 className="text-gray-700 font-medium text-2xl text-center mb-3">No haven't {Title}</h1>
      <p className="text-gray-500 text-center mb-6">{description}</p>
      <div className="flex flex-col justify-center">
        <Link to={navigate}>
          {/* <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded bg-primary">
            <span className="w-6 h-6 items-center mt-2"><AiOutlinePlusCircle size={18}/></span>
            Add records
          </button> */}
        </Link>
      </div>
    </div>
  </div>
  
  )
}

export default EmptyStates