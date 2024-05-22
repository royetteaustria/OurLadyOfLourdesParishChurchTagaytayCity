import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

interface AddRecordModalDialogProps {
  isOpen: boolean;
  onClose: () => void;
  TextDialog: string;
  inquireId: string | undefined | null; // Change type to string | undefined
  NavigateToAddRecord: (recordId: string) => void;
}

const AddRecordModal = ({
  isOpen,
  onClose,
  TextDialog,
  inquireId,
  NavigateToAddRecord,
}: AddRecordModalDialogProps) => {

  const handleClick = () => {
    if (inquireId) { // Check if inquireId is defined
      NavigateToAddRecord(inquireId);
    }
  };
  const handleDialogClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>) => {
    event.stopPropagation(); // Prevent closing the modal when clicking inside it
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
    <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={onClose}>
      <div className="flex items-center justify-center min-h-screen" onClick={handleDialogClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="relative bg-white rounded-lg w-96 p-4 px-2">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-success">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
              <Dialog.Title as="h3" className="text-lg font-medium text-success text-opacity-80">
                Step Complete
              </Dialog.Title>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                {TextDialog}
              </p>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-success border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                onClick={handleClick} // Use handleClick function
              >
                Add
              </button>
            </div>
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition.Root>
  )
}

export default AddRecordModal
