import Cards from "./Cards"

const Services = () => {
  return (
    <div id="services"className="w-full bg-white px-32 py-16 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-full md:px-24 lg:px-8 lg:py-20">
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div>
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-black uppercase rounded-full bg-teal-accent-400">
          Our
        </p>
      </div>
      <h2 className="text-primary1 max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          <span className="relative text-primary">Services</span>
        </span>{' '}
        <span className="text-black">Provided to you</span>
      </h2>
      {/* <p className="text-base text-black md:text-lg">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque rem aperiam, eaque ipsa quae.
      </p> */}
    </div>
    <div className="grid gap-8 px-32 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
      <Cards/>
    </div>
  </div>
  )
}

export default Services