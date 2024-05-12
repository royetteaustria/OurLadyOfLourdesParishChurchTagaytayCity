import { Link } from "react-router-dom"
import { AdvancedCalendar } from "./Components"
import Breadcrumb from "../../../components/breadcrumbs/Breadcrum"

const SetAppointment = () => {
  return (
    <>
    <div className="">
      <div className="flex justify-between m-4">
        <Breadcrumb pageName="Scheduler"/>
        <button className="bg-primary h-12 w-36 text-white rounded-sm">
          <Link to='/weddingAdmin/AddEvent'>Add appointment</Link>
        </button>
      </div>
      <div style={{ height: "95vh" }} className="p-4">
        <AdvancedCalendar/>
      </div>
    </div>
    </>
  )
}

export default SetAppointment