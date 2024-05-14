// import React from 'react'
// import FillOut from '../../assets/Fill out-amico.png'
import WeddingReserve from './WeddingReserve'
// import lourdes from '../../assets/5217466.jpg'
import background from '../../assets/Background.jpg'

const FinalForm = () => {
  return (
    <>
    <div className='size-full xl:px-8 lg:px-32 md:px-6'
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
            <WeddingReserve />
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
    </>
  )
}

export default FinalForm