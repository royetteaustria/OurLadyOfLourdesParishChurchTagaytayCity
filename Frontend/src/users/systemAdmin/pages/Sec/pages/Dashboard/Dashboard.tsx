import CardOne from '../../../../../secretary/components/cards/CardOne'
import CardThree from '../../../../../secretary/components/cards/CardThree'
import CardTwo from '../../../../../secretary/components/cards/CardTwo'
import ChartOne from '../../../../../secretary/components/charts/ChartOne'

const MainDashboard = () => {
  return (
    <>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree/>
        {/* <CardThree /> */}
        {/* <CardFour /> */}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
         <ChartOne />
        {/* { <ChartTwo />
        <ChartThree />
        <MapOne /> */} 
        <div className="col-span-12 xl:col-span-8">
          {/* <TableOne /> */}
        </div>
        {/* <ChatCard /> */}
      </div>
    </>
  )
}

export default MainDashboard