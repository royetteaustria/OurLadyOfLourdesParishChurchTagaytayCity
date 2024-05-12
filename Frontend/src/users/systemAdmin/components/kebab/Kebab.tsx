import { useState } from 'react';
import { CiMenuKebab } from 'react-icons/ci';

const Kebab = () => {
  const [show, setShow] = useState<number | null>(null); // Initialize show as number or null
  return (
    <div>
      {show === 0 ? (
        <button onClick={() => setShow(null)} className="focus:outline-none pl-0">
          <CiMenuKebab />
        </button>
      ) : (
        <button onClick={() => setShow(0)} className="focus:outline-none pl-0">
          <CiMenuKebab />
        </button>
      )}
      {show === 0 && (
        <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-32 text-left dark:bg-meta-4 dark:text-white">
          <div className="text-xs w-full hover:text-primary py-4 px-4 cursor-pointer ">
            <button>Active</button>
          </div>
          <div className="text-xs w-full hover:text-primary py-4 px-4 cursor-pointer ">
          <button>InActive</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Kebab;
