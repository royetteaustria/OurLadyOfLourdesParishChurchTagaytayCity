// import About from "./About"
// import Abouts from "./Abouts"
const Main = () => {
  return (
    <>
    <section className="pt-12 pb-12 sm:pb-16 lg:pt-8 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                <div data-aos="fade-right" data-aos-offset="300" data-aos-duration="800" data-aos-easing="ease-in-sine">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold leading-tight text-black sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">A special credit card made for Developers.</h1>
                        <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</p>
                    </div>

                    <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                        <div className="flex items-center">
                            <p className="text-3xl font-medium text-black sm:text-4xl font-pj">2943</p>
                            <p className="ml-3 text-sm text-black font-pj">Cards<br />Delivered</p>
                        </div>

                        <div className="hidden sm:block">
                            <svg className="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                                <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                                <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                                <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                                <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                            </svg>
                        </div>

                        <div className="flex items-center">
                            <p className="text-3xl font-medium text-black sm:text-4xl font-pj">$1M+</p>
                            <p className="ml-3 text-sm text-black font-pj">Transaction<br />Completed</p>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-offset="300" data-aos-duration="800" data-aos-easing="ease-in-sine">
                    <img className="w-full" src="https://d33wubrfki0l68.cloudfront.net/d6f1462500f7670e0db6b76b35054a081679a5a0/0ce15/images/hero/5.1/illustration.png" alt="" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Main