import { Link } from 'react-router-dom'
import mass from '../../assets/mass.jpg'
const MassPage = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-gray">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
                Mass Intentions Reservation
              </h2>
              <p className="text-base text-black md:text-lg">
              Mass intentions reservation is a service in the Church that a Priest may be requested to offer a Mass for a specific intention, even when one cannot be physically present at the Mass.
              </p>
              <ul className="mt-4">
                <li>
                <Link to="/massform" className="text-lg text-primary font-medium">Inquire now</Link>
                </li>
              </ul>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={mass}
              alt=""
            />
          </div>
        </div>
      </div>
  )
}

export default MassPage