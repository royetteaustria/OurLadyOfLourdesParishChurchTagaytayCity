import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import Breadcrumb from "../../../../components/breadcrumbs/Breadcrum";

const AddReport = () => {
  const [GroomName, setGroomName] = useState('');
  const [BrideName, setBrideName] = useState('');
  const [DateOfWedding, setDateOfWedding] = useState('');
  const [TimeOfWedding, setTimeOfWedding] = useState('8:30 am');
  const [Rites, setRites] = useState('Tagalog');
  const [GuestPriest, setGuestPriest] = useState('Rev. Fr. Arnold M. Montella');

  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const reportData ={
      GroomName: GroomName,
      BrideName: BrideName,
      DateOfWedding: DateOfWedding,
      TimeOfWedding: TimeOfWedding,
      Rites: Rites,
      GuestPriest: GuestPriest
    };
    axios.post('https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app/api/ReportModule/create', reportData)
      .then(res => {
        console.log(res)
        toast.success('Successfully added report');
        navigate('/systemAdmin/reports');
      })
      .catch(err => {
        console.log(err);
        toast.error('Failed to add report');
      });
  }

  return (
    <>
    <Breadcrumb pageName="Add report"/>
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Please input the information below
              </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Groom Name
                  </label>
                  <input
                    type="text"
                    name="GroomName"
                    required
                    value={GroomName}
                    onChange={(e) => setGroomName(e.target.value)}
                    placeholder="Enter Groom name"
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Bride Name
                  </label>
                  <input
                    type="text"
                    name="BrideName"
                    value={BrideName}
                    onChange={(e) => setBrideName(e.target.value)}
                    placeholder="Enter Bride name"
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                   
                  />
                </div>
                <div className="mb-5.5">
                    <label className="mb-3 block text-black dark:text-white">
                      Date of Marriage
                    </label>
                    <div className="relative">
                    <input
                      type="date"
                      name="DateOfWedding"
                      required
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      value={DateOfWedding}
                      onChange={(e) => setDateOfWedding(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Time of Marriage
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                  <select value={TimeOfWedding} onChange={(e) => setTimeOfWedding(e.target.value)} className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus-border-primary">
                    <option value="8:30 am">8:30 am</option>
                    <option value="10:30 am">10:30 am</option>
                    <option value="12:30 pm">12:30 pm</option>
                    <option value="2:30 pm">2:30 pm</option>
                    <option value="4:30 pm">4:30 pm</option>
                  </select>
                  </div>
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Rites
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                  <select value={Rites} onChange={(e) => setRites(e.target.value)} className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus-border-primary">
                    <option value="Tagalog">Tagalog</option>
                    <option value="English">English</option>
                  </select>
                  </div>
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Guest Priest
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                  <select value={GuestPriest} onChange={(e) => setGuestPriest(e.target.value)}className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus-border-primary active-border-primary dark-border-form-strokedark dark-bg-form-input dark-focus-border-primary">
                    <option value="Rev. Fr. Arnold M. Montella">Rev. Fr. Arnold M. Montella</option>
                    <option value="Rev. Fr. Eugenio Juanito P. Lopez">Rev. Fr. Eugenio Juanito P. Lopez</option>
                    <option value="Rev. Fr. Rolando B. Datu">Rev. Fr. Rolando B. Datu</option>
                    <option value="Rev. Fr. Zacarias M Parra">Rev. Fr. Zacarias M Parra</option>
                  </select>
                  </div>
                </div>
                <button 
                type="submit"
                className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                  Add Report
                </button>
              </div>
            </form>
            <Toaster/>
          </div>
        </div> 
      </div>
    </>
  );
}

export default AddReport;
