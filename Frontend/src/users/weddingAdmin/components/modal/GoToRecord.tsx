import  { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ModalLoader from "../../../client/components/common/ModalLoader";

interface SuccessProps {
  onClose: () => void;
}

const GoToRecord: React.FC<SuccessProps> = ({ onClose }) => {
  const [modalOpen, setModalOpen] = useState(false); // Start with modal closed
  const modal = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate a 1-second loading delay
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
      setModalOpen(true); // After the loading delay, open the modal
    }, 1500);

    // Cleanup the timeout on component unmount or if modal is opened before the timeout
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }) => {
      if (!modal.current) return;
      if (!modalOpen || modal.current.contains(target as Node)) return;

      // Check if the click occurred outside the modal, then navigate to '/'
      if (target instanceof Element && !modal.current.contains(target)) {
        navigate("/weddingAdmin/Client");
      }

      setModalOpen(false);
      onClose(); // Close the modal and reset the formSubmitted state
    };

    document.addEventListener("click", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  }, [modalOpen, onClose, navigate]);

  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
      onClose(); // Close the modal and reset the formSubmitted state
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [modalOpen, onClose]);

  const Button = () => {
    navigate("/weddingAdmin/Client");
  };

const GoToRecord = () => {
    navigate('/weddingAdmin/addrecords')
}

  return (
    <div
      className={`fixed left-0 top-0 z-50 flex h-full min-h-screen w-full items-center justify-center px-4 py-5`}
      style={{
        backdropFilter: modalOpen ? "blur(8px)" : "none",
        backgroundColor: modalOpen ? "rgba(0, 0, 0, 0.5)" : "transparent",
        transition: "background-color 0.3s, backdrop-filter 0.3s",
      }}
    >
      {loading && <ModalLoader />} {/* Show loader while loading */}
      {modalOpen && (
        <div
          ref={modal}
          onFocus={() => setModalOpen(true)}
          onBlur={() => setModalOpen(false)}
          className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
        >
          <span
            className={`mx-auto mb-6 flex items-center justify-center h-10 w-10 rounded-full bg-success bg-opacity-30`}
          >
            <FaCheck size={20} style={{ color: "#219653" }} />
          </span>
          <h3 className="pb-[18px] text-xl font-semibold text-black dark:text-white sm:text-2xl">
            Successfully Complete!
          </h3>

          <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
            This client is complete all the process of wedding. You want to add now this client on record?
          </p>
          <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md bg-primary px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              onClick={GoToRecord}
            >
              Add
            </button>
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 border border-primary sm:mt-0 sm:w-auto"
              onClick={Button}
            >
              Maybe later
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoToRecord;
