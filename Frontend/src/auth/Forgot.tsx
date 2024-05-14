import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import lourdes from '../users/client/assets/4890914.jpg'

const Forgot = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()
    
    const handleSubmit = async(e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const res = await axios.post('https://our-lady-of-lourdes-parish-church-tagaytay-city.vercel.app/api/UserRoutes/forgot-password', {email});
            if(res.data.Status === "Success") {
                navigate('/EmailVerified');
            } else if (res.data.Status === "User not existed") {
                setError('User not found');
            }
        } catch (err) {
            console.log(err);
            setError('An error occurred. Please try again.');
        }
    }

    return (
        <>
        <section className="bg-gray-50 dark:bg-gray-900 "
        style={{
            backgroundImage: `url(${lourdes})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)' // 0.5 represents 50% opacity
          }}>
            <div 
            data-aos="fade-right" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500" 
            className="flex flex-col items-center justify-center h-screen px-6 py-8 mx-auto lg:py-0">
                <div className="w-full bg-white bg-opacity-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-white">
                            Verify your email address
                        </h1>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block mb-2 text-sm  text-black font-medium dark:text-white">Email address</label>
                                <input
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter email"
                                    required
                                />
                                <div className="mt-4">
                                    <p className={error ? 'text-danger' : 'hidden'}>{error}</p>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Verify Email
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Forgot;
