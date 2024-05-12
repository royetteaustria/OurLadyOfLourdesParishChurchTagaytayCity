import Breadcrumb from '../../../../components/breadcrumbs/Breadcrum'
import CardOne from '../../../../../weddingAdmin/components/cards/CardOne'
import CardTwo from '../../../../../weddingAdmin/components/cards/CardTwo'
import CardThree from '../../../../../weddingAdmin/components/cards/CardThree'
import ChartOne from '../../../../../weddingAdmin/components/charts/ChartOne'

const WeddingMainDashboard = () => {
  return (
    <>
    <Breadcrumb pageName="Dashboard" />
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
         <ChartOne />
        {/* { <ChartTwo />
        <ChartThree />
        <MapOne /> */} 
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-1 2xl:gap-7.5 ">
        
        {/* <CardThree /> */}
      </div>

        <div className="col-span-12 xl:col-span-8">
          {/* <TableOne /> */}
        </div>
        {/* <ChatCard /> */}
      </div>
    </>
  )
}

export default WeddingMainDashboard