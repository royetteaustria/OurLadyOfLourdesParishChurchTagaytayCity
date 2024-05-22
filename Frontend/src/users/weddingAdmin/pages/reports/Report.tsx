import EmptyStates2 from '../../components/other/EmptyStates2';
// import ReactToPrint from 'react-to-print';
// import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react';
import axios from 'axios'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css fil
import { DateRange } from 'react-date-range';
import jsPDF from 'jspdf';
// import { BsTrash } from 'react-icons/bs'
// import { FaRegEdit } from "react-icons/fa";
// import toast from 'react-hot-toast';

type Reports = {
  _id: string
  GroomName: string;
  BrideName: string;
  DateOfWedding: string;
  BrideLastName: string;
  GroomLastName: string;
  // TimeOfWedding: string;
  // Rites: string;
  // GuestPriest: string;
};

const Report = () => {
  // create state for getting the data
  const [data, setData] = useState<Reports[]>([]);
  // const {id} = useParams()
  const [alldata, setAllData] = useState<Reports[]>([]);
  const [startDate, setStartDate] = useState<Date>(new Date(new Date().getFullYear(), new Date().getMonth(), 1));
  const [endDate, setEndDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const d = new Date();
  let month : Date | string = months[d.getMonth()];
  const y = new Date();
  let year = y.getUTCFullYear();
  const componentRef = useRef(null);
  
  const [, setReportPdfBlob] = useState<Blob | null>(null);

  useEffect(() => {
    async function getReports() {
      const response = await axios.get(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app/api/ReportModule/listofReport`);
      const currentMonthReports = response.data.filter((report: { DateOfWedding:  Date; }) => {
        const reportDate = new Date(report.DateOfWedding);
        return reportDate.getMonth() === new Date().getMonth() && reportDate.getFullYear() === new Date().getFullYear();
      });
      setData(currentMonthReports);
      setAllData(response.data);
    }
    getReports();
    return;
  }, []);

  

    function formatDateTime(date: Date | string) {
      if (typeof date === 'string') {
        date = new Date(date);
      }
  
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
  
      const day = date.getDate();
      const month = monthNames[date.getMonth()];
      const year = date.getFullYear();
  
      const hours = date.getHours() % 12 || 12; // Get 12-hour format
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const amPm = date.getHours() >= 12 ? 'PM' : 'AM';
  
      return `${month} ${day}, ${year} ${hours}:${minutes} ${amPm}`;
    }
    const handleSelect = (date: any) => {
      const filtered = alldata.filter((data) => {
        const dataDate = new Date(data.DateOfWedding);
        return (
          dataDate >= date.selection.startDate &&
          dataDate <= date.selection.endDate
        );
      });
    
      setStartDate(date.selection.startDate);
      setEndDate(date.selection.endDate);
      setData(filtered);
    };

    const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      key: 'selection'
    }
    const handleToggle = () => {
      setOpen(!open);
    };
    const handleGeneratePdf = async () => {
      const doc  = new jsPDF();
      let a : Number  = 7;
      let b : Number  = 71;
      let c : Number  = 127;
      // let d : Number  = 110;
      // let e : Number  = 131;
      // let f : Number  = 150;
      
      // Add table headers
      doc.text(`Wedding Report for ${month} ${year}`, parseFloat(a.toString()), 15);
      doc.setFontSize(10);
      doc.save(`Wedding Report for ${month} ${year}`);
      const headers = ['Groom Name', 'Bride Name', 'Date of Marriage'];
      doc.text(headers.join('                                           '), parseInt(a.toString(), 10), 25);
      
      // Add table data
      let y: number = 35;

      data.forEach((report) => {
        doc.text(`${report.GroomName} ${report.GroomLastName}`, parseFloat(a.toString()), y);
        doc.text(`${report.BrideName} ${report.BrideLastName}`, parseFloat(b.toString()), y);
        doc.text(formatDateTime(report.DateOfWedding), parseFloat(c.toString()), y);
        // doc.text(report.TimeOfWedding, parseFloat(d.toString()), y);
        // doc.text(report.Rites, parseFloat(e.toString()), y);
        // doc.text(report.GuestPriest, parseFloat(f.toString()), y);
        y += 10; // Increment y for the next line
      });
  
      const pdfBlob = doc.output('blob');
      setReportPdfBlob(pdfBlob);
  
      // Open the PDF in a new tab
      const url = URL.createObjectURL(pdfBlob);
      window.open(url, '_blank');
    };
    
    
    
  return (
    <>
    <div className='flex mr-6'>
    <button onClick={handleToggle} className={'ml-6 mb-6 p-2 bg-primary  text-white rounded-sm'}>
        {open ? 'Hide Date' : 'Select Date'}
    </button>
      {/* for print button */}
      {/* <ReactToPrint
        trigger={() => <button className={'ml-6 mb-6 p-2 bg-primary  text-white rounded-sm'}>Print report</button>}
        content={() => componentRef.current}
        documentTitle={`Report of this month of ${month}`}
        pageStyle='print'
      /> */}
        {/* to add report button */}
        
      {/* <Link to='/weddingAdmin/addreports'>
        <button className={'ml-6 mb-6 p-2 bg-primary text-white rounded-sm'}>Add report</button>
      </Link> */}
      <button onClick={handleGeneratePdf} className={'ml-6 mb-6 p-2 bg-primary  text-white rounded-sm'}>
        Print Report
      </button>
    </div>
    <div ref={componentRef} className="w-full sm:px-6 ">
      {/* DateRangePicker - Render only if 'open' is true */}
        {open && (
          <div className='mt-2 mb-4 absolute bg-black sm:w-0 md:w-0 lg:w-0 xl:w-0'>
            <DateRange
              ranges={[selectionRange]}
              onChange={handleSelect}
            />
          </div>
        )}
      <div className="px-4 md:px-10 py-4 md:py-7 text-black dark:text-white bg-white rounded-tl-lg rounded-tr-lg dark:bg-boxdark" >
          <div className="sm:flex items-center justify-between bg-gray-2 border-b border-[#eee] p-4 dark:bg-meta-4 dark:border-strokedark">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-meduim leading-normal text-gray-800">Wedding Reports of this month of {month} {year}</p>
          </div>
      </div>
      <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto dark:bg-boxdark">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="h-16 w-full text-sm leading-none text-gray-800 bg-gray-2 dark:bg-meta-4">
              <th className="font-bold text-black dark:text-white text-left pl-4">{(`Groom name`).toUpperCase()}</th>
              <th className="font-bold text-black dark:text-white text-left pl-8">{(`Bride name`).toUpperCase()}</th>
              <th className="font-bold text-black dark:text-white text-left pl-12">{(`Date of marriage`).toUpperCase()}</th>
              {/* <th className="font-bold text-black dark:text-white text-left pl-8">{(`Time`).toUpperCase()}</th> */}
              {/* <th className="font-bold text-black dark:text-white text-left pl-14">{(`Rites`).toUpperCase()}</th>
              <th className="font-bold text-black dark:text-white text-left pl-12">{(`Guest Priest`).toUpperCase()}</th>
              <th className="font-bold text-black dark:text-white text-left pl-2">{(`Action`).toUpperCase()}</th> */}
            </tr>
          </thead>
            <tbody className="w-full ">
              {data.length > 0 ? (
                data.map((report) => (
                  <tr key={report._id} className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-[#eee] dark:border-strokedark dark:bg-boxdark">
                    <td className="pl-4 ">
                      <div className="flex items-center">
                        <div className="pl-0 inline-flex">
                          <button className='hidden'>Edit</button>
                          <p className="font-normal text-black dark:text-white">{`${report.GroomName.toUpperCase()} ${report.GroomLastName.toUpperCase()}`}</p>
                        </div>
                      </div>
                    </td>
                    <td className="pl-12">
                      <div className="flex items-center">
                        <div className="pl-0">
                          <p className="font-normal text-black dark:text-white">{`${report.BrideName.toUpperCase()} ${report.BrideLastName.toUpperCase()}`}</p>
                        </div>
                      </div>
                    </td>
                    <td className="pl-12">
                      <p className="font-normal text-black dark:text-white">{formatDateTime(report.DateOfWedding).toUpperCase() }</p>
                    </td>
      
                    {/* <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="font-normal ml-8 text-black dark:text-white">{report.Rites.toUpperCase() === '' ? 'Rites is to be determined' : report.Rites.toUpperCase()}</p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="font-normal ml-6 text-black dark:text-white">{report.GuestPriest.toUpperCase() === '' ? 'Guest priest is to be determined' : report.GuestPriest.toUpperCase()}</p>
                    </td> */}
                    {/* <td className={"border-b border-[#eee] py-5 px-4 dark:border-strokedark"}>
                      <Link to={`/weddingAdmin/editReport/${report._id}`}><FaRegEdit size={20} style={{color: '#3C50E0'}}/></Link>
                    </td> */}
                  </tr>
                ))
              ) : (
              <tr>
                <td colSpan={4} className="text-center">
                  <EmptyStates2/>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Report