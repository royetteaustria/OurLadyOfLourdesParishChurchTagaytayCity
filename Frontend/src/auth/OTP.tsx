import { Link } from "react-router-dom"

const OTP = () => {
  return (
    <>
    <div data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500" className="w-full max-w-md relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto mt-32"
    >
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16 ">
            <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                <div className="flex flex-col items-center justify-center text-center space-y-2">
                    <div className="font-semibold text-3xl text-black">
                        <p>Email Verification</p>
                    </div>
                    <div className="flex flex-row text-sm font-medium text-gray-400">
                        <p>We have sent a code to your email ba**@dipainhouse.com</p>
                     </div>
                </div>
                <div>
                    <form action="" method="post">
                        <div className="flex flex-col space-y-16">
                            <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                <div className="w-16 h-16 ">
                                    <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-primary" type="text" name="" id="" maxLength={1}/>
                                 </div>
                                <div className="w-16 h-16 ">
                                    <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-primary" type="text" name="" id="" maxLength={1}/>
                                </div>
                                <div className="w-16 h-16 ">
                                    <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-primary" type="text" name="" id="" maxLength={1}/>
                                </div>
                                <div className="w-16 h-16 ">
                                    <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-primary" type="text" name="" id="" maxLength={1}/>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-5">
                                <div>
                                    <Link to='/NewPassword'>
                                    <button
                                    type="submit"
                                    className="flex flex-row items-center justify-center text-center w-full border rounded-md outline-none py-4 bg-primary border-none text-white text-md shadow-md"
                                    >
                                        Verify Account
                                    </button>
                                    </Link>
                                </div>
                                <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                    <p>Didn't recieve code?</p> <a className="flex flex-row items-center text-primary" href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default OTP