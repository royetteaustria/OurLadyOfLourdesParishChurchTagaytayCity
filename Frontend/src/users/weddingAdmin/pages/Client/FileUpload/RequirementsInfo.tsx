import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../../components/breadcrumbs/Breadcrum";

const DATA = {
  _id: "",
  groomName: "",
  groomLastName: "",
  brideName: "",
  brideLastName: "",
  Groom_Baptismal_Certificate: "",
  Groom_Confirmation_Certificate: "",
  Groom_Birth_Certificate: "",
  Groom_CeNomar_Civil_Married: "",
  Groom_Cannonical_Application: "",
  Groom_Cannonical_Interview: "",
  Groom_Id_Picture: "",
  Groom_Marriage_Banns: "",
  Groom_Banns_Reply: "",
  Groom_Pre_Cana: "",
  Groom_Marriage_Contract: "",
  Bride_Baptismal_Certificate: "",
  Bride_Confirmation_Certificate: "",
  Bride_Birth_Certificate: "",
  Bride_CeNomar_Civil_Married: "",
  Bride_Cannonical_Application: "",
  Bride_Cannonical_Interview: "",
  Bride_Id_Picture: "",
  Bride_Marriage_Banns: "",
  Bride_Banns_Reply: "",
  Bride_Pre_Cana: "",
  Bride_Marriage_Contract: "",
  FirstPaymentReciept: "",
  SecondPaymentReciept: "",
};
const RequirementsInfo = () => {
  const { id } = useParams();
  const [data, setData] = useState(DATA);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/Weddingreq/${id}`)
      .then((res) => {
        console.log(res);
        setData((prev) => ({
          ...prev,
          groomName: res.data.groomName,
          groomLastName: res.data.groomLastName,
          brideName: res.data.brideName,
          brideLastName: res.data.brideLastName,
          Groom_Baptismal_Certificate: res.data.Groom_Baptismal_Certificate,
          Groom_Confirmation_Certificate: res.data.Groom_Confirmation_Certificate,
          Groom_Birth_Certificate: res.data.Groom_Birth_Certificate,
          Groom_CeNomar_Civil_Married: res.data.Groom_CeNomar_Civil_Married,
          Groom_Cannonical_Application: res.data.Groom_Cannonical_Application,
          Groom_Cannonical_Interview: res.data.Groom_Cannonical_Interview,
          Groom_Id_Picture: res.data.Groom_Id_Picture,
          Groom_Marriage_Banns: res.data.Groom_Marriage_Banns,
          Groom_Banns_Reply: res.data.Groom_Banns_Reply,
          Groom_Pre_Cana: res.data.Groom_Pre_Cana,
          Groom_Marriage_Contract: res.data.Groom_Marriage_Contract,
          Bride_Baptismal_Certificate: res.data.Bride_Baptismal_Certificate,
          Bride_Confirmation_Certificate: res.data.Bride_Confirmation_Certificate,
          Bride_Birth_Certificate: res.data.Bride_Birth_Certificate,
          Bride_CeNomar_Civil_Married: res.data.Bride_CeNomar_Civil_Married,
          Bride_Cannonical_Application: res.data.Bride_Cannonical_Application,
          Bride_Cannonical_Interview: res.data.Bride_Cannonical_Interview,
          Bride_Id_Picture: res.data.Bride_Id_Picture,
          Bride_Marriage_Banns: res.data.Bride_Marriage_Banns,
          Bride_Banns_Reply: res.data.Bride_Banns_Reply,
          Bride_Pre_Cana: res.data.Bride_Pre_Cana,
          Bride_Marriage_Contract: res.data.Bride_Marriage_Contract,
          FirstPaymentReciept: res.data.FirstPaymentReciept,
          SecondPaymentReciept: res.data.SecondPaymentReciept,
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
        <h1 className="mt-6 lg:ml-6 md:ml-6 sm:ml-6 xsm:ml-8 max-xsm:ml-8 text-xl dark:text-bodydark1 text-black font-bold border-t pt-4">
          Proof of Payment
        </h1>
        <div className="px-4 ml-6 mt-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
            Partial Payment
          </dt>
          <dd
            className={
              data.FirstPaymentReciept === "No uploaded file"
                ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
            }
          >
            {data.FirstPaymentReciept.length > 0 ? (
              data.FirstPaymentReciept
            ) : (
              <p className="text-danger">No Uploaded file</p>
            )}
            <span className="ml-12">
              <span>
                <button
                  onClick={() =>
                    handleViewFile(
                      `http://localhost:5000/uploads/${data.FirstPaymentReciept}`
                    )
                  }
                  className={
                    data.FirstPaymentReciept.length === 0
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
        <div className="px-4 py-6 ml-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
            Last Payment
          </dt>
          <dd
            className={
              data.SecondPaymentReciept === "No uploaded file"
                ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
            }
          >
            {data.SecondPaymentReciept.length > 0 ? (
              data.SecondPaymentReciept
            ) : (
              <p className="text-danger">No Uploaded file</p>
            )}
            <span className="ml-12">
              <span>
                <button
                  onClick={() =>
                    handleViewFile(
                      `http://localhost:5000/uploads/${data.SecondPaymentReciept}`
                    )
                  }
                  className={
                    data.SecondPaymentReciept.length === 0
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
        <h1 className="mt-6 lg:ml-6 md:ml-6 sm:ml-6 xsm:ml-8 max-xsm:ml-8 text-xl dark:text-bodydark1 text-black font-bold border-t pt-4">
          Groom Information
        </h1>
        <div className="ml-6 mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">
                Groom Name
              </dt>
              <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
                {data.groomName} {data.groomLastName}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
                Baptismal Certificate
              </dt>
              <dd
                className={
                  data.Groom_Baptismal_Certificate === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.Groom_Baptismal_Certificate.length > 0 ? (
                  `${data.Groom_Baptismal_Certificate}`
                ) : (
                  <p className="text-danger">No Uploaded file</p>
                )}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `http://localhost:5000/uploads/${data.Groom_Baptismal_Certificate}`
                        )
                      }
                      className={
                        data.Groom_Baptismal_Certificate.length === 0
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
                Confirmation Certificate
              </dt>
              <dd
                className={
                  data.Groom_Confirmation_Certificate === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.Groom_Confirmation_Certificate.length > 0 ? (
                  data.Groom_Confirmation_Certificate
                ) : (
                  <p className="text-danger">No Uploaded file</p>
                )}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `http://localhost:5000/uploads/${data.Groom_Confirmation_Certificate}`
                        )
                      }
                      className={
                        data.Groom_Confirmation_Certificate.length === 0
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
                Birth Certificate
              </dt>
              <dd
                className={
                  data.Groom_Birth_Certificate === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.Groom_Birth_Certificate.length > 0 ? (
                  data.Groom_Birth_Certificate
                ) : (
                  <p className="text-danger">No Uploaded file</p>
                )}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `http://localhost:5000/uploads/${data.Groom_Birth_Certificate}`
                        )
                      }
                      className={
                        data.Groom_Birth_Certificate.length === 0
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
                Cenomar Civil Married
              </dt>
              <dd
                className={
                  data.Groom_CeNomar_Civil_Married === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.Groom_CeNomar_Civil_Married.length > 0 ? (
                  data.Groom_CeNomar_Civil_Married
                ) : (
                  <p className="text-danger">No Uploaded file</p>
                )}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `http://localhost:5000/uploads/${data.Groom_CeNomar_Civil_Married}`
                        )
                      }
                      className={
                        data.Groom_CeNomar_Civil_Married.length === 0
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
                Cannonical Application
              </dt>
              <dd
                className={
                  data.Groom_Cannonical_Application === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.Groom_Cannonical_Application.length > 0 ? (
                  data.Groom_Cannonical_Application
                ) : (
                  <p className="text-danger">No Uploaded file</p>
                )}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `http://localhost:5000/uploads/${data.Groom_Cannonical_Application}`
                        )
                      }
                      className={
                        data.Groom_Cannonical_Application.length === 0
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
            {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
                Cannonical Interview
              </dt>
              <dd
                className={
                  data.Groom_Cannonical_Interview === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.Groom_Cannonical_Interview}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `http://localhost:5000/uploads/${data.Groom_Cannonical_Interview}`
                        )
                      }
                      className={
                        data.Groom_Cannonical_Interview === "No uploaded file"
                          ? "hidden"
                          : "ml-4 text-white bg-primary rounded-md p-2"
                      }
                    >
                      View file
                    </button>
                  </span>
                </span>
              </dd>
            </div> */}
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
                Id Picture
              </dt>
              <dd
                className={
                  data.Groom_Id_Picture === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.Groom_Id_Picture.length > 0 ? (
                  data.Groom_Id_Picture
                ) : (
                  <p className="text-danger">No Uploaded file</p>
                )}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `http://localhost:5000/uploads/${data.Groom_Id_Picture}`
                        )
                      }
                      className={
                        data.Groom_Id_Picture.length === 0
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
                Marriage Bans
              </dt>
              <dd
                className={
                  data.Groom_Marriage_Banns === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.Groom_Marriage_Banns.length > 0 ? (
                  data.Groom_Marriage_Banns
                ) : (
                  <p className="text-danger">No Uploaded file</p>
                )}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `http://localhost:5000/uploads/${data.Groom_Marriage_Banns}`
                        )
                      }
                      className={
                        data.Groom_Marriage_Banns.length === 0
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
                Bans Reply
              </dt>
              <dd
                className={
                  data.Groom_Banns_Reply === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.Groom_Banns_Reply.length > 0 ? (
                  data.Groom_Banns_Reply
                ) : (
                  <p className="text-danger">No Uploaded file</p>
                )}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `http://localhost:5000/uploads/${data.Groom_Banns_Reply}`
                        )
                      }
                      className={
                        data.Groom_Banns_Reply.length === 0
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
                Pre Cana
              </dt>
              <dd
                className={
                  data.Groom_Pre_Cana === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.Groom_Pre_Cana.length > 0 ? (
                  data.Groom_Pre_Cana
                ) : (
                  <p className="text-danger">No Uploaded file</p>
                )}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `http://localhost:5000/uploads/${data.Groom_Pre_Cana}`
                        )
                      }
                      className={
                        data.Groom_Pre_Cana.length === 0
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
                  data.Groom_Marriage_Contract === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.Groom_Marriage_Contract.length > 0 ? (
                  data.Groom_Marriage_Contract
                ) : (
                  <p className="text-danger">No Uploaded file</p>
                )}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `http://localhost:5000/uploads/${data.Groom_Marriage_Contract}`
                        )
                      }
                      className={
                        data.Groom_Marriage_Contract.length === 0
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
              <dt className="mt-8 font-semibold leading-6 text-xl dark:text-bodydark1 text-black">
                Bride Information
              </dt>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm dark:text-bodydark1 font-semibold leading-6 text-black">
                Bride Name
              </dt>
              <dd className="lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 dark:text-bodydark1 text-black sm:col-span-2 sm:mt-0">
                {data.brideName} {data.brideLastName}
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
                Baptismal Certificate
              </dt>
              <dd
                className={
                  data.Bride_Baptismal_Certificate === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.Bride_Baptismal_Certificate.length > 0 ? (
                  data.Bride_Baptismal_Certificate
                ) : (
                  <p className="text-danger">No Uploaded file</p>
                )}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `http://localhost:5000/uploads/${data.Bride_Baptismal_Certificate}`
                        )
                      }
                      className={
                        data.Bride_Baptismal_Certificate.length === 0
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
                Confirmation Certificate
              </dt>
              <dd
                className={
                  data.Bride_Confirmation_Certificate === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.Bride_Confirmation_Certificate.length > 0 ? (
                  data.Bride_Confirmation_Certificate
                ) : (
                  <p className="text-danger">No Uploaded file</p>
                )}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `http://localhost:5000/uploads/${data.Bride_Confirmation_Certificate}`
                        )
                      }
                      className={
                        data.Bride_Confirmation_Certificate.length === 0
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
                Birth Certificate
              </dt>
              <dd
                className={
                  data.Bride_Birth_Certificate === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.Bride_Birth_Certificate.length > 0 ? (
                  data.Bride_Birth_Certificate
                ) : (
                  <p className="text-danger">No Uploaded file</p>
                )}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `http://localhost:5000/uploads/${data.Bride_Birth_Certificate}`
                        )
                      }
                      className={
                        data.Bride_Birth_Certificate.length === 0
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
                Cenomar Civil Married
              </dt>
              <dd
                className={
                  data.Bride_CeNomar_Civil_Married === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.Bride_CeNomar_Civil_Married.length > 0 ? (
                  data.Bride_CeNomar_Civil_Married
                ) : (
                  <p className="text-danger">No Uploaded file</p>
                )}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `http://localhost:5000/uploads/${data.Bride_CeNomar_Civil_Married}`
                        )
                      }
                      className={
                        data.Bride_CeNomar_Civil_Married.length === 0
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
                Cannonical Application
              </dt>
              <dd
                className={
                  data.Bride_Cannonical_Application === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.Bride_Cannonical_Application.length > 0 ? (
                  data.Bride_Cannonical_Application
                ) : (
                  <p className="text-danger">No Uploaded file</p>
                )}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `http://localhost:5000/uploads/${data.Bride_Cannonical_Application}`
                        )
                      }
                      className={
                        data.Bride_Cannonical_Application.length === 0
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
            {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
                Cannonical Interview
              </dt>
              <dd
                className={
                  data.Bride_Cannonical_Interview === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.Bride_Cannonical_Interview}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `http://localhost:5000/uploads/${data.Bride_Cannonical_Interview}`
                        )
                      }
                      className={
                        data.Bride_Cannonical_Interview === "No uploaded file"
                          ? "hidden"
                          : "ml-4 text-white bg-primary rounded-md p-2"
                      }
                    >
                      View file
                    </button>
                  </span>
                </span>
              </dd>
            </div> */}
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 dark:text-bodydark1 text-black">
                Id Picture
              </dt>
              <dd
                className={
                  data.Bride_Id_Picture === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.Bride_Id_Picture.length > 0 ? (
                  data.Bride_Id_Picture
                ) : (
                  <p className="text-danger">No Uploaded file</p>
                )}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `http://localhost:5000/uploads/${data.Bride_Id_Picture}`
                        )
                      }
                      className={
                        data.Bride_Id_Picture.length === 0
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
                Marriage Bans
              </dt>
              <dd
                className={
                  data.Bride_Marriage_Banns === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.Bride_Marriage_Banns.length > 0 ? (
                  `${data.Bride_Marriage_Banns}`
                ) : (
                  <p className="text-danger">No Uploaded file</p>
                )}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `http://localhost:5000/uploads/${data.Bride_Marriage_Banns}`
                        )
                      }
                      className={
                        data.Bride_Marriage_Banns.length === 0
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
                Bans Reply
              </dt>
              <dd
                className={
                  data.Bride_Banns_Reply === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.Bride_Banns_Reply.length > 0 ? (
                  `${data.Bride_Banns_Reply}`
                ) : (
                  <p className="text-danger">No Uploaded file</p>
                )}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `http://localhost:5000/uploads/${data.Bride_Banns_Reply}`
                        )
                      }
                      className={
                        data.Bride_Banns_Reply.length === 0
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
                Pre Cana
              </dt>
              <dd
                className={
                  data.Bride_Pre_Cana === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.Bride_Pre_Cana.length > 0 ? (
                  data.Bride_Pre_Cana
                ) : (
                  <p className="text-danger">No Uploaded file</p>
                )}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `http://localhost:5000/uploads/${data.Bride_Pre_Cana}`
                        )
                      }
                      className={
                        data.Bride_Pre_Cana.length === 0
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
                  data.Bride_Marriage_Contract === "No uploaded file"
                    ? "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-danger dark:text-danger sm:col-span-2 sm:mt-0"
                    : "lg:ml-40 md:ml-40 sm:ml-40 mt-1 text-sm leading-6 text-success dark:text-success sm:col-span-2 sm:mt-0"
                }
              >
                {data.Bride_Marriage_Contract.length > 0 ? (
                  data.Bride_Marriage_Contract
                ) : (
                  <p className="text-danger">No Uploaded file</p>
                )}
                <span className="ml-12">
                  <span>
                    <button
                      onClick={() =>
                        handleViewFile(
                          `http://localhost:5000/uploads/${data.Bride_Marriage_Contract}`
                        )
                      }
                      className={
                        data.Bride_Marriage_Contract.length === 0
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

export default RequirementsInfo;
