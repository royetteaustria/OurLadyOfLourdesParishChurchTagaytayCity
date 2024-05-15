import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Link }from 'react-scroll'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import navicon from '../../../../assets/Icon__2_-removebg-preview.png'
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 py-5 mx-auto sm:w-xl md:w-full bg-white bg-opacity-90 w-full lg:w-full md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <a
          href="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
        >
          <span className=" text-xl sm:ml-0 xsm:ml-0 md:ml-0 lg:ml-18 xl:ml-18 font-bold tracking-wide text-black uppercase">
          <img src={navicon} alt="" className='h-[4.5rem]'/>
          </span>
        </a>
        <ul className="flex items-center space-x-8 lg:flex  mr-22 ">
          <li className='cursor-pointer hover:text-primary'>
            <Link to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li className='cursor-pointer hover:text-primary'>
            <Link to="services" smooth={true} duration={500}>Services</Link>
          </li>
          <li className='cursor-pointer hover:text-primary'>
            <Link to="location" smooth={true} duration={500}>Location</Link>
          </li>
          <li className='hover:text-primary'>
            <NavLink to="/reservation">Reservation</NavLink>
          </li>
          <li className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
            <NavLink to="/signIn">Sign in</NavLink>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline "
            onClick={() => setIsMenuOpen(true)}
          >
            <RxHamburgerMenu size={20} style={{ color: '#3C50E0'}}/>
          </button>
          {isMenuOpen && (
            <div data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="300"
            data-aos-duration="300" className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                     <span className=" text-xl sm:ml-0 xsm:ml-0 md:ml-0 lg:ml-18 xl:ml-18 font-bold tracking-wide text-black uppercase">
                      Lourdes <span className='text-primary'>Church</span>
                    </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <IoMdClose size={20} style={{ color: '#3C50E0'}}/>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li className='cursor-pointer hover:text-primary'>
                      <Link to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li className='cursor-pointer hover:text-primary'>
                      <Link to="services" smooth={true} duration={500}>Services</Link>
                    </li>
                    <li className='cursor-pointer hover:text-primary'>
                      <Link to="location" smooth={true} duration={500}>Location</Link>
                    </li>
                    <li className='hover:text-primary'>
                      <NavLink to="/reservation">Reservation</NavLink>
                    </li>
                    <li className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                      <NavLink to="/signIn">Sign in</NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};