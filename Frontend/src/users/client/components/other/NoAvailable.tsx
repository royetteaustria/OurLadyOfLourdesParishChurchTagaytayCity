import Sorry from '../../assets/Feeling sorry-rafiki.png'

const NoAvailable = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
        <div className="max-w-xl px-5 text-center">
          <h2 className="mb-2 text-xl font-bold text-primary">No Available Wedding Slot for this date</h2>
          <p className="mb-2 text-lg text-black">Note: <span className='text-danger'>Don't go to the Wedding office if haven't available date you preffered</span></p>
          <img src={Sorry} alt="Email Logo"/>
        </div>
      </div>
  )
}

export default NoAvailable