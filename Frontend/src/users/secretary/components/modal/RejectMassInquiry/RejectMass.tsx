import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

interface RejectMassDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onDeleteConfirmed: (recordId: string) => void;
  recordId: string | null;
}

const RejectMass = ({
  isOpen,
  onClose,
  onDeleteConfirmed,
  recordId,
}: RejectMassDialogProps) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={onClose}>
        <div className="flex items-center justify-center min-h-screen">
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
            <div className="relative bg-white rounded-lg w-96 p-4">
              <div className="flex items-center">
                <ExclamationTriangleIcon className="h-8 w-8 text-danger text-opacity-80 mr-2 p-1 bg-danger rounded-full bg-opacity-20" aria-hidden="true" />
                <Dialog.Title as="h3" className="text-lg font-medium text-danger text-opacity-80">
                  Reject Inquiry
                </Dialog.Title>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  Are you sure you want to reject this inquiry? This action cannot be undone.
                </p>
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-black border border-primary rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-danger border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                  onClick={() => onDeleteConfirmed(recordId!)}
                >
                  Reject
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default RejectMass;