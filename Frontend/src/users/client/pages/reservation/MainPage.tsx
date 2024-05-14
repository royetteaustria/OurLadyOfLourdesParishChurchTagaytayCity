import MassPage from "./MassPage"
import BaptismalPage from "./BaptismalPage"
import { WeddingPage } from "./WeddingPage"
import { SecondNav } from "../../components/nav/SecondNav"
// import background from '../../assets/4890914.jpg'
const MainPageReservation = () => {
  return (
    <>
    <div className="w-full justify-center ">
      <SecondNav/>
      <WeddingPage/>
      <BaptismalPage/>
      <MassPage/>
    </div>
    </>

  )
}

export default MainPageReservation