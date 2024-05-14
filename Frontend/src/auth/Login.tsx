import axios from 'axios';
import { useState, FormEvent} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import lourdes from '../users/client/assets/4890914.jpg'
import logo from '../users/client/assets/Frame_13-removebg-preview.png'
import Text from '../users/client/assets/TV_-_1-removebg-preview.png'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const credentials = { email, password };
  
    try {
      const { data } = await axios.post('http://our-lady-of-lourdes-parish-church-tagaytay-city.vercel.app/api/UserRoutes/login', credentials);
      console.log('Login API Response:', data);
  
      // Check the response data and handle the login process
      if (data.role === 'Event Administrator') {
        // Store the user's role and token in the browser's local storage or a cookie
        localStorage.setItem('userRole', data.role);
        localStorage.setItem('authToken', data.token);
        navigate('/WeddingAdmin/Dashboard');
      } else if (data.role === 'System Administrator') {
        localStorage.setItem('userRole', data.role);
        localStorage.setItem('authToken', data.token);
        navigate('/systemAdmin/listOfUser');
      } else if (data.role === 'Parish Secretary') {
        localStorage.setItem('userRole', data.role);
        localStorage.setItem('authToken', data.token);
        navigate('/ParishSecretary/Dashboard');
      } else {
        toast.error('Wrong email or password');
      }
    } catch (err) {
      console.log(err);
      toast.error('Invalid email or password');
    }
  };
  
  //'http://localhost:5000/api/UserRoutes/login'
  return (
    <>
    <section className="bg-gray-50 dark:bg-gray-900 "
    style={{
      backgroundImage: `url(${lourdes})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)' // 0.5 represents 50% opacity
    }}
    >
        <div
        data-aos="fade-right" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500" 
        className="flex flex-col items-center justify-center h-screen px-6 py-8 mx-auto lg:py-0">
          <div
          
          className="w-full bg-white bg-opacity-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4  sm:p-8">
              <div className='flex justify-between  w-full'>
                <div className='size-10 mr-10'>
                  <img src={logo} className='h-20 w-50' alt="" />
                </div>
                <div className='w-4/5 flex justify-center'>
                <img src={Text} alt="" className='size-full'/>
                {/* <p>Our Lady of Lourdes</p> <br />
                <p>Parish Church</p> */}
                </div>
              </div>
              
              <form  className="space-y-4" onSubmit={submitHandler}>
              <div>
                  <p className="text-sm font-satoshi font-normal leading-tight tracking-tight text-black dark:text-white">
                  Sign in to your account
                </p>
                </div>
                <div>
                  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter email" required/>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required/>
                </div>
                <div className="flex items-center justify-between">
                  <Link to='/emailverification'><p className="text-sm font-medium text-primary hover:underline dark:text-primary">Forgot password?</p></Link>
                </div>
                <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
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

export default Login