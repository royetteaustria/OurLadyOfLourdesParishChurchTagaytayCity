import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';
// import ChartClone from './FakeChart';

const options: ApexOptions = {
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: 'straight',
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: '#fff',
    strokeColors: ['#3056D3', '#80CAEE'],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: 'category',
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: '0px',
      },
    },
    min: 0,
    max: 100,
  },
};

const FakeChart: React.FC = () => {
  const [selectedYear,] = useState<number | null>(null);
  const [weddingData, setWeddingData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app/api/WeddingRecords/weddingRecordsList'
        );
        setWeddingData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const year = parseInt(event.target.value);
  //   setSelectedYear(year);
  // };

  const PlaceholderComponent = () => {
    return <div>No data available</div>;
  };

  const filteredData = selectedYear
    ? weddingData.filter((data) => new Date(data.dateOfMarriage).getFullYear() === selectedYear)
    : weddingData;

  const monthCounts = Array.from({ length: 12 }, () => 0);

  filteredData.forEach((data) => {
    const index = new Date(data.dateOfMarriage).getMonth();
    monthCounts[index]++;
  });

  const seriesData = [
    {
      name: '',
      data: monthCounts,
    },
  ];

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full flex justify-between">
              <p className="font-semibold text-primary"></p>
              {/* <select
                className="text-sm font-medium justify-end content-end "
                value={selectedYear || ""}
                onChange={handleYearChange}
              >
                {[...new Set(weddingData.map((data) => new Date(data.dateOfMarriage).getFullYear()))]
                  .sort((a, b) => a - b)
                  .map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
              </select> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id="chartOne" className="-ml-5">
          {weddingData.length > 0 ? <ReactApexChart
            options={options}
            series={seriesData}
            type="area"
            height={350}
          /> : <PlaceholderComponent/>}
        </div>
      </div>
    </div>
  );
};

export default FakeChart;