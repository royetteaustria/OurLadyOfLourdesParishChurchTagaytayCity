import Breadcrumb from "../../components/breadcrumbs/Breadcrum";
import axios from "axios";
import { useState, useEffect } from "react";
import EmptyStatesUsers from "../../components/other/EmptyUsers";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

type Users = {
  _id: string
  username: string;
  email: string;
  role: string;
  status: string;
};

function ListofAdmin() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState<Users[]>([]);

  useEffect(() => {
    async function getUsers() {
      const response = await axios.get(`https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/userRoutes/listofusers`);
      const records = response.data;
      setData(records);
    }
    getUsers();
  }, []);

  return (
    <>
      <Breadcrumb pageName="Admin accounts" />
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          
          <div className="flex justify-between items-end py-4">
          <div className="hidden sm:block mr-24 w-1/3 p-2">
            <form>
              <div className="relative">
                <span className="absolute top-1/2 left-2 -translate-y-1/2">
                  <CiSearch size={20}/>
                </span>
                <input
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search user..."
                  className="w-full bg-white bg-opacity dark:bg-boxdark rounded-sm h-10 pr-4 pl-9 focus:outline-none text-black"
                />
              </div>
            </form>
          </div>
            <Link to="/systemAdmin/AddAccount">
              <button className={data.length > 0 ? "p-2 bg-primary text-white mb-4" : 'hidden'}>Add account</button>
            </Link>
            
          </div>
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-bold text-black dark:text-white xl:pl-11">
                {(`User Name`).toUpperCase()}
              </th>
              <th className="min-w-[150px] py-4 px-4 font-bold text-black dark:text-white">
                {(`Email`).toUpperCase()}
              </th>
              <th className="min-w-[150px] py-4 px-4 font-bold text-black dark:text-white">
                {(`Role`).toUpperCase()}
              </th>
              <th className="min-w-[120px] py-4 px-4 font-bold text-black dark:text-white">
                {(`Status`).toUpperCase()}
              </th>
              <th className="py-4 px-4 font-bold text-black dark:text-white">
                {(`Actions`).toUpperCase()}
              </th>
            </tr>
          </thead>
          <tbody className='dark:bg-boxdark'>
            {data.filter(user => user.username.toLowerCase().includes(search.toLowerCase())).length > 0 ? (
              data.filter(user => user.username.toLowerCase().includes(search.toLowerCase())).map((user, index) => (
                <tr key={index}>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      {user.username.toUpperCase()}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">{user.email}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">{user.role.toUpperCase()}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className={`inline-flex rounded ${user.status === "Active" ? "text-success" : user.status === "InActive" ? " text-danger" : ""}`}>
                      {user.status.toUpperCase()}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5">
                      <button type='button' className="text-primary">
                        <Link to={`/systemAdmin/UpdateAccount/${user._id}`}><FaRegEdit size={15}/></Link>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center">
                  <EmptyStatesUsers/>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListofAdmin;
