import axios from 'axios';
import { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import lourdes from '../users/client/assets/BackgroundLogin.jpg'

const NewPass = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPasssword] = useState('')
  const navigate = useNavigate();
  const {id, token} = useParams();

  axios.defaults.withCredentials = true;
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
        toast.error("Password does not match");
        return; // Stop execution if passwords don't match
    }

    try {
      const passwordRegex = /^(?=.*[0-9])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters long and contain at least one number and one special character."
      );
      return;
    }
        const response = await axios.post(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app/api/UserRoutes/reset-password/${id}/${token}`, { password });
        
        if (response.data.Status === "Success") {
            navigate('/signIn');
        } else {
          toast.error('Token has expire')
            // Handle other possible response statuses
        }
    } catch (err) {
        console.error("An error occurred:", err);
        // Handle error - show error message to user, etc.
    }
};


  return (
    <>
    <section className="bg-gray-50 dark:bg-black flex items-center justify-center h-screen">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${lourdes})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // 0.5 represents 50% opacity
            filter: "blur(4px)", // Adjust the blur value as needed
          }}
        />
        <div className="z-10 bg-white bg-opacity-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 w-full">
          <div className="w-full bg-white bg-opacity-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-white">
                Change Password
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                  <input type="password" placeholder="Enter password" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required  onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confrim Password</label>
                  <input 
                  value={confirmPassword}
                   onChange={(e) => setConfirmPasssword(e.target.value)}
                  type="password" placeholder="Re-type password" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" required/>
                </div>
                <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Reset password
                </button>
              </form>
              <Toaster/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NewPass