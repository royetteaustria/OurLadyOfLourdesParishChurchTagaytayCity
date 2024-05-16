import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const Data = {
  bridealreadyBaptist: "",
  bridealreadyKumpil: "",
  Bride_Cannonical_Interview: "",
  weddingStatus: "",
  groomalreadyBaptist: "",
  groomalreadyKumpil: "",
  groom_Cannonical_Interview: "",
};

const UpdateWeddingClient = () => {
  const [data, setData] = useState(Data);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the server and set it to the state
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/WeddingClient/singleClient/${id}`);
        setData(response.data);
      } catch (err) {
        console.log(err);
        toast.error("Failed to fetch data");
      }
    };
    fetchData();
  }, [id]);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const client = {
      bridealreadyBaptist: data.bridealreadyBaptist,
      bridealreadyKumpil: data.bridealreadyKumpil,
      Bride_Cannonical_Interview: data.Bride_Cannonical_Interview,
      weddingStatus: data.weddingStatus,
      groomalreadyBaptist: data.groomalreadyBaptist,
      groomalreadyKumpil: data.groomalreadyKumpil,
      groom_Cannonical_Interview: data.groom_Cannonical_Interview,
    };

    try {
      const response = await axios.put(
        `http://localhost:5000/api/WeddingClient/update/${id}`,
        client
      );
      console.log(response);
      toast.success("Successfully Update");
      navigate("/weddingAdmin/Client");
    } catch (err) {
      console.log(err);
      toast.error("Failed to Update");
    }
  };

  return (
    <div className="mx-auto max-w-full">
      <div className="grid grid-cols-1 gap-8">
        <div className="col-span-5 xl:col-span-3">
          <div className="rounded-sm   bg-white  dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
              <div className="mb-4.5">
                <div className="py-6 border-b mb-2 text-black dark:text-white font-semibold">
                  <h1>Update Status</h1>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Wedding Status
                    </label>
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                      <select
                        value={data.weddingStatus}
                        onChange={(e) => setData({ ...data, weddingStatus: e.target.value })}
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus-border-primary active-border-primary dark-border-form-strokedark dark-bg-form-input dark-focus-border-primary"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Cancel">Cancel</option>
                        <option value="Complete"
                        disabled={data.bridealreadyKumpil === 'No' || data.groomalreadyKumpil === 'No' || data.Bride_Cannonical_Interview === 'Pending' || data.bridealreadyBaptist === 'No' || data.groomalreadyBaptist === 'No' || data.groom_Cannonical_Interview === 'Pending'} 
                        className={data.bridealreadyKumpil === 'No' || data.groomalreadyKumpil === 'No' || data.Bride_Cannonical_Interview === 'Pending' || data.bridealreadyBaptist === 'No' || data.groomalreadyBaptist === 'No' || data.groom_Cannonical_Interview === 'Pending' ? 'cursor-not-allowed' : 'cursor-pointer'}
                        >Complete</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Groom Canonical Interview
                    </label>
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                      <select
                        value={data.groom_Cannonical_Interview}
                        onChange={(e) => setData({ ...data, groom_Cannonical_Interview: e.target.value })}
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus-border-primary active-border-primary dark-border-form-strokedark dark-bg-form-input dark-focus-border-primary"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Complete">Complete</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Bride Canonical Interview
                    </label>
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                      <select
                        value={data.Bride_Cannonical_Interview}
                        onChange={(e) => setData({ ...data, Bride_Cannonical_Interview: e.target.value })}
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus-border-primary active-border-primary dark-border-form-strokedark dark-bg-form-input dark-focus-border-primary"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Complete">Complete</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Groom Already Baptized
                    </label>
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                      <select
                        value={data.groomalreadyBaptist}
                        onChange={(e) => setData({ ...data, groomalreadyBaptist: e.target.value })}
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus-border-primary active-border-primary dark-border-form-strokedark dark-bg-form-input dark-focus-border-primary"
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Bride Already Baptized
                    </label>
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                      <select
                        value={data.bridealreadyBaptist}
                        onChange={(e) => setData({ ...data, bridealreadyBaptist: e.target.value })}
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus-border-primary active-border-primary dark-border-form-strokedark dark-bg-form-input dark-focus-border-primary"
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Groom Have Sacrament of confirmation
                    </label>
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                      <select
                        value={data.groomalreadyKumpil}
                        onChange={(e) => setData({ ...data, groomalreadyKumpil: e.target.value })}
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus-border-primary active-border-primary dark-border-form-strokedark dark-bg-form-input dark-focus-border-primary"
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Bride Have a sacrament of confirmation
                    </label>
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                      <select
                        value={data.bridealreadyKumpil}
                        onChange={(e) => setData({ ...data, bridealreadyKumpil: e.target.value })}
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus-border-primary active-border-primary dark-border-form-strokedark dark-bg-form-input dark-focus-border-primary"
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="rounded-sm px-4 py-3 text-center w-full bg-primary items-end text-white"
                  >
                    <p className="text-center">Update</p>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateWeddingClient;
