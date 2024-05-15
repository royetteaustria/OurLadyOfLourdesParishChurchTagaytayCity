// import lourdes1 from '../../assets/lourdes.jpeg'
import lourdes2 from "../../assets/lourdes2-transformed.jpeg";
// import { Link } from 'react-router-dom';
export const HomePage = () => {
  return (
    <>
      <div
        id="home"
        className="relative bg-white pb-[110px] pt-[120px] px-8 dark:bg-dark lg:pt-[150px]"
      >
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-5/12">
              <div
                className="hero-content"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="800"
                data-aos-easing="ease-in-sine"
              >
                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-black dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  Our <br />
                  Lady of Lourdes <br />
                  Parish Church.
                </h1>
                <p className="mb-8 max-w-[480px] text-black text-body-color dark:text-dark-6">
                  Our Lady of Lourdes Parish Church in Tagaytay is a popular
                  choice for weddings due to its convenient location near
                  Rotonda and charming atmosphere, making it perfect for family
                  celebrations.
                </p>
                {/* <ul className="flex flex-wrap items-center">
                  <li className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7">
                  <Link to='/reservation'>
                      Reserve now
                    </Link>
                  </li>
                  
                </ul> */}
              </div>
            </div>
            <div className="hidden  lg:block lg:w-1/12"></div>
            <div className="w-full lg:w-6/12">
              <div  data-aos="fade-left" data-aos-offset="300" data-aos-duration="800" data-aos-easing="ease-in-sine" className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src={lourdes2}
                    alt="hero"
                    className="max-w-full lg:ml-auto rounded-tl-[120px] h-full"
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
