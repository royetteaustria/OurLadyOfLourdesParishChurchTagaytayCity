import  { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ModalLoader from "../common/ModalLoader";

interface SuccessProps {
  onClose: () => void;
}

const Success: React.FC<SuccessProps> = ({ onClose }) => {
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
        navigate("/");
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
    setModalOpen(false);
    onClose();
    navigate("/");
  };

  return (
    <div
      className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center px-4 py-5`}
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
            Successfully Inquired
          </h3>

          <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
          Your inquiries have been submitted.  An email for your booking confirmation will be sent to you once your inquiries have been accepted. Thank you !
          </p>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3">
              <button
                onClick={Button}
                className="block w-full rounded-md border border-stroke p-3 text-center text-white bg-primary font-medium text-dark transition"
              >
                Go back to homepage
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Success;
