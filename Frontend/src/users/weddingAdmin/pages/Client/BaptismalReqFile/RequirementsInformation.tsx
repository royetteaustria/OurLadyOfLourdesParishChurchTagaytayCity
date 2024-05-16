import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../../components/breadcrumbs/Breadcrum";

const Data = {
  name: "",
  lname: "",
  birthCertificate: "",
  MarriageContract: "",
  FatherBaptismalCerticate: "",
  MotherBaptismalCerticate: "",
  ParishPermit: "",
};
const RequirementsInformation = () => {
  const { id } = useParams();
  const [data, setData] = useState(Data);

  useEffect(() => {
    axios
      .get(`https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/BaptismalReq/${id}`)
      .then((res) => {
        console.log(res);
        setData((prev) => ({
          ...prev,
          name: res.data.name,
          lname: res.data.lname,
          birthCertificate: res.data.birthCertificate,
          MarriageContract: res.data.MarriageContract,
          FatherBaptismalCerticate: res.data.FatherBaptismalCerticate,
          MotherBaptismalCerticate: res.data.MotherBaptismalCerticate,
          ParishPermit:res.data.ParishPermit
        }));
      })
      .catch((err) => console.log(err));
  }, []);

  const handleViewFile = (fileUrl: string) => {
    window.open(fileUrl, "_blank");
  };
  return (
    <>
      <Breadcrumb pageName="Requirements Info" />
      <div className="bg-white p-6 dark:bg-boxdark dark:text-bodydark1">
        <div className="ml-6 mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">
                Name
              </dt>
              <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
                {data.name} {data.lname}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
                Baptismal Certificate
              </dt>
              <dd
                className={
                  data.birthCertificate === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.birthCertificate.length > 0 ? (
                  `${data.birthCertificate}`
                ) : (
                  <p className="text-danger">No Uploaded file</p>
                )}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/uploads/${data.birthCertificate}`
                        )
                      }
                      className={
                        data.birthCertificate.length === 0
                          ? "hidden"
                          : "ml-4 text-white bg-primary rounded-md p-2"
                      }
                    >
                      View file
                    </button>
                  </span>
                </span>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
                Marriage Contract
              </dt>
              <dd
                className={
                  data.MarriageContract === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.MarriageContract.length > 0 ? (
                  data.MarriageContract
                ) : (
                  <p className="text-danger">No Uploaded file</p>
                )}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/uploads/${data.MarriageContract}`
                        )
                      }
                      className={
                        data.MarriageContract.length === 0
                          ? "hidden"
                          : "ml-4 text-white bg-primary rounded-md p-2"
                      }
                    >
                      View file
                    </button>
                  </span>
                </span>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
                Father Baptismal Certificate
              </dt>
              <dd
                className={
                  data.FatherBaptismalCerticate === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.FatherBaptismalCerticate.length > 0 ? (
                  data.FatherBaptismalCerticate
                ) : (
                  <p className="text-danger">No Uploaded file</p>
                )}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/uploads/${data.FatherBaptismalCerticate}`
                        )
                      }
                      className={
                        data.FatherBaptismalCerticate.length === 0
                          ? "hidden"
                          : "ml-4 text-white bg-primary rounded-md p-2"
                      }
                    >
                      View file
                    </button>
                  </span>
                </span>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
               Mother Baptismal Certificate
              </dt>
              <dd
                className={
                  data.MotherBaptismalCerticate === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.MotherBaptismalCerticate.length > 0 ? (
                  data.MotherBaptismalCerticate
                ) : (
                  <p className="text-danger">No Uploaded file</p>
                )}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/uploads/${data.MotherBaptismalCerticate}`
                        )
                      }
                      className={
                        data.MotherBaptismalCerticate.length === 0
                          ? "hidden"
                          : "ml-4 text-white bg-primary rounded-md p-2"
                      }
                    >
                      View file
                    </button>
                  </span>
                </span>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
                Parish Permit
              </dt>
              <dd
                className={
                  data.ParishPermit === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.ParishPermit.length > 0 ? (
                  data.ParishPermit
                ) : (
                  <p className="text-danger">No Uploaded file</p>
                )}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/uploads/${data.ParishPermit}`
                        )
                      }
                      className={
                        data.ParishPermit.length === 0
                          ? "hidden"
                          : "ml-4 text-white bg-primary rounded-md p-2"
                      }
                    >
                      View file
                    </button>
                  </span>
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default RequirementsInformation;
