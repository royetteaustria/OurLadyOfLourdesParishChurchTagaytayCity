import Breadcrumb from '../../../components/breadcrumbs/Breadcrum';
import { Link } from 'react-router-dom';

import { AdvancedCalendar } from './CalendarReservation/components';

const BaptismalReservation = () => {
  
  return (
    <>
    <div className="">
      <div className="flex justify-between m-4">
        <Breadcrumb pageName="Baptismal Reservation"/>
        <button className="bg-primary h-12 w-36 text-white rounded-sm">
          <Link to='/weddingAdmin/addBaptismalReservation'>Add Reservation</Link>
        </button>
      </div>
      <div className='flex justify-between px-90 items-start content-start'>
        <div className=''>
          <span className='size-12 p-2 px-4 ml-4 bg-[#b6f4b2]'></span>
          <span className='text-black ml-2  dark:text-white'>-Available</span>
        </div>
        <div className=''>
          <span className='size-4 p-2 px-4 ml-4 bg-primary'></span>
          <span className='text-black ml-3 dark:text-white'>-Appointed</span>
        </div>
        <div className=''>
          <span className='size-4 p-2 px-4 ml-4 bg-[#f9d9b1]'></span>
          <span className='text-black ml-3  dark:text-white'>-Pending</span>
        </div>
        <div className=''>
          <span className='size-4 p-2 px-4 ml-4 bg-danger bg-opacity-70'></span>
          <span className='text-black ml-3  dark:text-white'>-Not Available</span>
        </div>
      </div>
      <div style={{ height: "95vh" }} className=" p-4 h-full">
        <AdvancedCalendar/>
      </div>
    </div>
    
  </>
  )
}

export default BaptismalReservation

// import Breadcrumb from '../../../components/breadcrumbs/Breadcrum';
// import { Link } from 'react-router-dom';

// import { AdvancedCalendar } from './CalendarReservation/components';

// const Reservation = () => {
  
//   return (
//     <>
//     <div className="">
//       <div className="flex justify-between m-4">
//         <Breadcrumb pageName="Manage Reservation"/>
//         <button className="bg-primary h-12 w-36 text-white rounded-sm">
//           <Link to='/weddingAdmin/addReservation'>Add Reservation</Link>
//         </button>
//       </div>
//       <div style={{ height: "95vh" }} className="shadow-2xl p-4">
//         <AdvancedCalendar/>
//       </div>
//     </div>
    
//   </>
//   )
// }

// export default Reservation