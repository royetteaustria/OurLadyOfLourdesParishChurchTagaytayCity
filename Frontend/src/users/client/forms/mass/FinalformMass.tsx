// import React from 'react'
import Mass from './Massform'
import background from '../../assets/Background.jpg'
const FinalformMass = () => {
  return (
    <div className='size-full flex bg-[#fbeede] px-12 border'
    style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
        {/* <h1 className='text-xl font-semibold text-black flex text-center'>Wedding Form</h1> */}
        <div className='flex-1 overflow-auto'>
          {/* Wrap WeddingReserve component in a container div */}
          <div className='size-full justify-center'>
            <Mass />
          </div>
        </div>
        {/* <div className='flex-1 max-w- mx-auto p-12 border'>
          <img
            src={FillOut}
            alt=""
            className="w-full h-auto object-contain"
          />
        </div> */}
      </div>
  )
}

export default FinalformMass