import about from '../../assets/4 (1).jpg'

const Abouts = () => {
  return (
    <>
    <section id='about' className="bg-white">
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div data-aos="fade-right" data-aos-offset="300" data-aos-duration="800" data-aos-easing="ease-in-sine" className="max-w-lg">
                <h2 className="text-3xl font-extrabold text-black sm:text-4xl">About Us</h2>
                <p className="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                    eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                    Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                    malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
                
            </div>
            <div data-aos="fade-left" data-aos-offset="300" data-aos-duration="800" data-aos-easing="ease-in-sine" className="mt-12 md:mt-0">
                <img src={about} alt="About Us Image" className="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Abouts