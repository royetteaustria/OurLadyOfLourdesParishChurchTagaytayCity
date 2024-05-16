import Breadcrumb from "../../components/breadcrumbs/Breadcrum";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AddAccount = () => {
  const[ email, setEmail ] = useState('');
  const[ password, setPassword ] = useState('');
  const[ confirmPassword, setconfirmPassword ] = useState('');
  const[ username, setUsername ] = useState('');
  const[ role, setRole ] = useState('System Administrator');
  const navigate = useNavigate();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Password does not match');
      return; // Stop the submission if passwords don't match
    }

    // Create a data object with the user information
    const userData = {
      email: email,
      password: password,
      username: username,
      role: role,
    };
    const passwordRegex = /^(?=.*[0-9])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters long and contain at least one number and one special character."
      );
      return;
    }
    axios.post(`https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/userRoutes/register`, userData)
      .then((res) => {
        console.log(res);
        toast.success('Successfully added account');
        navigate('/systemAdmin/listOfUser');
      })
      .catch((err : any) => {
        console.log(err);
        if(err.response && err.response.data && err.response.data.message) {
          if(err.response.data.message === 'System Administrator account already exist'){
            toast.error(err.response.message)
          } else {
            toast.error('System Administrator account already exist');
          }
        } else {
          console.error(err);
          toast.error('Failed to add account');
        }
      });
  };
  return (
    <>
      <Breadcrumb pageName="Add Account" />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white justify-between">
                Add admin account
              </h3>
            </div>
            <form onSubmit={submitHandler}>
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={ (e) => setPassword(e.target.value)}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                
                <div className="mb-5.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Re-type Password
                  </label>
                  <input
                    type="password"
                    placeholder="Re-enter password"
                    value={confirmPassword}
                    onChange={ (e) => setconfirmPassword(e.target.value)}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Select Role
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus-border-primary"
                  >
                    <option value="System Administrator">System Administrator</option>
                    <option value="Event Administrator">Event Administrator</option>
                    <option value="Parish Secretary">Parish Secretary</option>
                  </select>
                  </div>
                </div>
                <button
                type="submit"
                className="flex w-full justify-center rounded bg-primary p-3 mt-4 font-medium text-gray">
                  Add account
                </button>
              </div>
            </form>
            <Toaster/>
          </div>
    </>
  );
};

export default AddAccount;
