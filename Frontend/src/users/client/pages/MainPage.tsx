import { HomePage } from "./home/Home"
import { Location } from "./location/Location"
import Services from "./Services/Services"
import Step from "./steps/Step"



const MainPage = () => {
  return (
    <>
    <div className="">
    <HomePage/>
    <Services/>
    <Step/>
    <Location/>
    </div>
    </>
  )
}

export default MainPage