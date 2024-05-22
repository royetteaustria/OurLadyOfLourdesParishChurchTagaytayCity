import { Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react';
import moment from 'moment';
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";

interface Reservation {
  start: Date;
  end: Date;
  Status?: string;
  _id: string,
}

interface ViewModalProps {
  event: Reservation;
  onDeleteEvent: (eventId: string) => void;
  onClose: () => void;
}

const ViewModal: React.FC<ViewModalProps> = ({ event, onClose }) => {
  // const navigate = useNavigate();
  // const GoToEditEvent = () => {
  //   navigate(`/systemAdmin/editReservation/${event._id}`);
  // }

  // async function handleDeleteEvent() {
  //   try {
  //     await axios.delete(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app/api/CalendarReservation/delete/${event._id}`);
  //     toast.success('Successfully deleted');
  //     onDeleteEvent(event._id);
  //     onClose();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
  return (
    <Transition.Root show={!!event} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-black bg-opacity-50" />
          </Transition.Child>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div data-aos="zoom-in" className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    {/* You can add an icon here if needed */}
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-xl leading-6 font-semibold text-primary">
                      Reservation Details
                    </Dialog.Title>
                    <div className="mt-2 pt-2">
                      <p> Status: </p>
                      <p className={event.Status === 'Available' ?`bg-success rounded-lg px-2 w-24 bg-opacity-80 text-white text-md py-2 font-semibold` : event.Status === 'Not Available' ? `bg-danger rounded-lg px-2 w-32 bg-opacity-80 text-white text-md py-2 font-semibold` : event.Status === 'Pending' ?`bg-warning w-24 rounded-lg p-2 bg-opacity-80 text-black text-md py-2 font-semibold`: ''}><span className="font-normal">{event.Status}</span></p>
                      <p className="text-black text-md py-2 font-semibold"> Start: <span className="font-normal">{moment(event.start).format("YYYY-MM-DD HH:mm")}</span></p>
                      <p className="text-black text-md py-2 font-semibold"> End: <span className="font-normal">{moment(event.end).format("YYYY-MM-DD HH:mm")}</span></p>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                
                <button
                  type="button"
                  className="w-full inline-flex mb-4 justify-center rounded-md border border-primary shadow-sm px-4 py-2 text-base font-medium text-black hover:bg-red-700 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default ViewModal;