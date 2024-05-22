import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import toast from "react-hot-toast";

const UpdateAccount = () => {
    const {id, token} = useParams();
    const[username, setUsername] = useState('')
    const[status, setStatus] = useState('')
    const [role, setRole] = useState('System Admin')
    const navigate = useNavigate()

    const updateUser = {
      username: username,
      status: status,
      role: role
    }

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    
      try {
        const res = await axios.put(
          `https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//api/UserRoutes/updateUser/${id}/${token}`,
          updateUser
        );
        console.log(res);
        toast.success('Successfully update account');
        navigate('/systemAdmin/listOfUser');
      } catch (err: any) { // Catch block takes any type of error
        if (err.response && err.response.data && err.response.data.message) {
          // Check if the error message matches the expected message
          if (err.response.data.message === 'System Administrator account already exists') {
            toast.error(err.response.data.message);
          } else {
            toast.error('Failed to update account');
          }
        } else {
          console.error(err);
          toast.error('Failed to update account');
        }
      }
    };


    useEffect(() => {
      axios.get(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//api/UserRoutes/getInfo/`+ id)
      .then(res => {
        const data = res.data;
        setUsername(data.username)
        setStatus(data.status)
        setRole(data.role)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    },[id])

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white justify-between">
            Update account
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
                Status
              </label>
              <div className="relative z-20 bg-transparent dark:bg-form-input">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus-border-primary"
              >
                <option value="Active">Active</option>
                <option value="InActive">InActive</option>
              </select>
              </div>
            </div>
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Select Role
              </label>
              <div className="relative z-20 bg-transparent dark:bg-form-input">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="relative p-4 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus-border-primary"
              >
                <option className="text-lg" value="System Administrator">System Administrator</option>
                <option className="text-lg" value="Event Administrator">Event Administrator</option>
                <option className="text-lg" value="Parish Secretary">Parish Secretary</option>
              </select>
              </div>
            </div>
            <button
            type="submit"
            className="flex w-full justify-center rounded bg-primary p-3 mt-4 font-medium text-gray">
              Save
            </button>
          </div>
        </form>
        </div>
    </>
  )
}

export default UpdateAccount