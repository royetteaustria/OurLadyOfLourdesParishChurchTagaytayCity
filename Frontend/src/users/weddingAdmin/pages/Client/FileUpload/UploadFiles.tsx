import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const DATAS = {
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
const UploadFiles = () => {
  const [data, setData] = useState(DATAS);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleFileChange = (e: any, fieldName: string) => {
    const file = e.target.files[0];
    const isPNGFile = file.type === 'image/png';
    const isJPGFile = file.type === 'image/jpeg';
    const isPDFFile = file.type === 'application/pdf';
  
    if (isJPGFile || isPDFFile && !isPNGFile) {
      setData({
        ...data,
        [fieldName]: file,
      });
    } else {
      // Show an error message or reset the file input
      toast.error('Please select a JPG or PDF file.');
      e.target.value = null; // Reset the file input
    }
  };

  const upload = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("FirstPaymentReciept", data.FirstPaymentReciept);
    formData.append("SecondPaymentReciept", data.SecondPaymentReciept);

    formData.append(
      "Groom_Baptismal_Certificate",
      data.Groom_Baptismal_Certificate
    );
    formData.append(
      "Groom_Confirmation_Certificate",
      data.Groom_Confirmation_Certificate
    );
    formData.append("Groom_Birth_Certificate", data.Groom_Birth_Certificate);
    formData.append(
      "Groom_CeNomar_Civil_Married",
      data.Groom_CeNomar_Civil_Married
    );

    formData.append("brideName", data.brideName);
    formData.append("brideLastName", data.brideLastName);
    formData.append("groomLastName", data.groomLastName);
    formData.append("groomName", data.groomName);

    formData.append(
      "Groom_Cannonical_Application",
      data.Groom_Cannonical_Application
    );
    formData.append("Groom_Id_Picture", data.Groom_Id_Picture);
    formData.append("Groom_Marriage_Banns", data.Groom_Marriage_Banns);
    formData.append("Groom_Banns_Reply", data.Groom_Banns_Reply);

    formData.append("Groom_Pre_Cana", data.Groom_Pre_Cana);
    formData.append("Groom_Marriage_Contract", data.Groom_Marriage_Contract);

    //csdfds
    formData.append(
      "Bride_Baptismal_Certificate",
      data.Bride_Baptismal_Certificate
    );
    formData.append(
      "Bride_Confirmation_Certificate",
      data.Bride_Confirmation_Certificate
    );
    formData.append("Bride_Birth_Certificate", data.Bride_Birth_Certificate);
    formData.append(
      "Bride_CeNomar_Civil_Married",
      data.Bride_CeNomar_Civil_Married
    );

    formData.append(
      "Bride_Cannonical_Application",
      data.Bride_Cannonical_Application
    );
    formData.append("Bride_Id_Picture", data.Bride_Id_Picture);
    formData.append("Bride_Marriage_Banns", data.Bride_Marriage_Banns);
    formData.append("Bride_Banns_Reply", data.Bride_Banns_Reply);

    formData.append("Bride_Pre_Cana", data.Bride_Pre_Cana);
    formData.append("Bride_Marriage_Contract", data.Bride_Marriage_Contract);

    axios
      .post("https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//api/Weddingreq/upload", formData)
      .then((res) => {
        console.log(res);
        navigate("/weddingAdmin/Requirements");
        toast.success("Success");
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get(`https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//api/WeddingClient/singleClient/${id}`)
      .then((res) => {
        console.log(res);
        setData((prev) => ({
          ...prev,
          groomLastName: res.data.groomLastName,
          groomName: res.data.groomName,
          brideLastName: res.data.brideLastName,
          brideName: res.data.brideName,
        }));
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="mx-auto max-w-full">
      <div className="grid grid-cols-1 gap-8">
        <div className="col-span-5 xl:col-span-3">
          <div className="rounded-sm   bg-white  dark:border-strokedark dark:bg-boxdark">
            <form action="" onSubmit={upload}>
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <div className="mb-4.5">
                  <div className="py-6 border-b mb-2 ml-2 text-black dark:text-white font-semibold">
                    <h1>Proof of payment</h1>
                  </div>
                  <div className="mb-5.5 mt-2 w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Partial Payment
                    </label>
                    <input
                      className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                      type="file"
                      accept="image/jpeg,.pdf"
                      
                      placeholder=""
                      name="FirstPaymentReciept"
                      
                      onChange={(e) =>
                        handleFileChange(e, "FirstPaymentReciept")
                      }
                    />
                  </div>
                  <div className="mb-5.5 mt-2  w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Last Payment
                    </label>
                    <input
                      className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                      type="file"
                      accept="image/jpeg,.pdf"
                      
                      placeholder=""
                      name="SecondPaymentReciept"
                      onChange={(e) =>
                        handleFileChange(e, "SecondPaymentReciept")
                      }
                    />
                  </div>
                  <div className="py-6 border-b mb-2 text-black dark:text-white font-semibold">
                    <h1>Groom Requirements</h1>
                  </div>
                  <div className="mb-5.5 mt-2 w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Name
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      disabled
                      placeholder="middle name"
                      value={data.groomName}
                      onChange={(e) =>
                        setData({ ...data, groomName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-5.5 mt-2 w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Last Name
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      disabled
                      placeholder="middle name"
                      value={data.groomLastName}
                      onChange={(e) =>
                        setData({ ...data, groomLastName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <label className="mb-2.5 block text-black dark:text-white">
                    Baptismal Certificate <span></span>
                  </label>
                  <div className="relative bg-transparent dark:bg-form-input">
                    <input
                      className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                      type="file"
                      accept="image/jpeg,.pdf"
                      
                      name="Groom_Baptismal_Certificate"
                      onChange={(e) =>
                        handleFileChange(e, "Groom_Baptismal_Certificate")
                      }
                    />
                  </div>
                  <div className="mb-4.5 mt-2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Confirmation Certificate
                    </label>
                    <div className="relative bg-transparent dark:bg-form-input">
                      <input
                        className="border border-dashed border-primary text-primary w-full p-4 text-center mb-2 justify-center"
                        type="file"
                        accept="image/jpeg,.pdf"
                        
                        name="Groom_Confirmation_Certificate"
                        onChange={(e) =>
                          handleFileChange(e, "Groom_Confirmation_Certificate")
                        }
                      />
                    </div>
                  </div>

                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Birth Certificate
                    </label>
                    <div className="relative bg-transparent dark:bg-form-input">
                      <input
                        className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                        type="file"
                        accept="image/jpeg,.pdf"
                        
                        name="Groom_Birth_Certificate"
                        onChange={(e) =>
                          handleFileChange(e, "Groom_Birth_Certificate")
                        }
                        placeholder="Select file"
                      />
                    </div>
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Cenomar/Civil Married
                    </label>
                    <div className="relative bg-transparent dark:bg-form-input">
                      <input
                        className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                        type="file"
                        accept="image/jpeg,.pdf"
                        
                        name="Groom_CeNomar_Civil_Married"
                        onChange={(e) =>
                          handleFileChange(e, "Groom_CeNomar_Civil_Married")
                        }
                        placeholder="Select file"
                      />
                    </div>
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Cannonical Application
                    </label>
                    <div className="relative bg-transparent dark:bg-form-input">
                      <input
                        className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                        type="file"
                        accept="image/jpeg,.pdf"
                        
                        name="Groom_Cannonical_Application"
                        onChange={(e) =>
                          handleFileChange(e, "Groom_Cannonical_Application")
                        }
                        placeholder="Select file"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Id Picture
                  </label>
                  <div className="relative bg-transparent dark:bg-form-input">
                    <input
                      className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                      type="file"
                      accept="image/jpeg,.pdf"
                      
                      name="Groom_Id_Picture"
                      onChange={(e) => handleFileChange(e, "Groom_Id_Picture")}
                    />
                  </div>
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Marriage Banns
                  </label>
                  <div className="relative bg-transparent dark:bg-form-input">
                    <input
                      className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                      type="file"
                      accept="image/jpeg,.pdf"
                      
                      name="Groom_Marriage_Banns"
                      // value={Groom_Baptismal_Certificate}
                      onChange={(e) =>
                        handleFileChange(e, "Groom_Marriage_Banns")
                      }
                      placeholder="Select file"
                    />
                  </div>
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Banns Reply
                  </label>
                  <div className="relative bg-transparent dark:bg-form-input">
                    <input
                      className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                      type="file"
                      accept="image/jpeg,.pdf"
                      
                      name="Groom_Banns_Reply"
                      // value={Groom_Baptismal_Certificate}
                      onChange={(e) => handleFileChange(e, "Groom_Banns_Reply")}
                      placeholder="Select file"
                    />
                  </div>
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Pre Cana
                  </label>
                  <div className="relative bg-transparent dark:bg-form-input">
                    <input
                      className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                      type="file"
                      accept="image/jpeg,.pdf"
                      
                      name="Groom_Pre_Cana"
                      // value={Groom_Baptismal_Certificate}
                      onChange={(e) => handleFileChange(e, "Groom_Pre_Cana")}
                      placeholder="Select file"
                    />
                  </div>
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Marriage Contract
                  </label>
                  <div className="relative bg-transparent dark:bg-form-input">
                    <input
                      className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                      type="file"
                      accept="image/jpeg,.pdf"
                      
                      name="Groom_Marriage_Contract"
                      // value={Groom_Baptismal_Certificate}
                      onChange={(e) =>
                        handleFileChange(e, "Groom_Marriage_Contract")
                      }
                      placeholder="Select file"
                    />
                  </div>

                  <div className="py-6 border-b mb-2 text-black dark:text-white font-semibold">
                    <h1>Bride Requirements</h1>
                  </div>
                  <div className="mb-5.5 mt-2 w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Name
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      disabled
                      placeholder="middle name"
                      value={data.brideName}
                      onChange={(e) =>
                        setData({ ...data, brideName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-5.5 mt-2 w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Last Name
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      disabled
                      placeholder="middle name"
                      value={data.brideLastName}
                      onChange={(e) =>
                        setData({ ...data, brideLastName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <label className="mb-2.5 block text-black dark:text-white">
                    Baptismal Certificate <span></span>
                  </label>
                  <div className="relative bg-transparent dark:bg-form-input">
                    <input
                      className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                      type="file"
                      accept="image/jpeg,.pdf"
                      
                      name="Bride_Baptismal_Certificate"
                      onChange={(e) =>
                        handleFileChange(e, "Bride_Baptismal_Certificate")
                      }
                    />
                  </div>
                  <div className="mb-4.5 mt-2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Confirmation Certificate
                    </label>
                    <div className="relative bg-transparent dark:bg-form-input">
                      <input
                        className="border border-dashed border-primary text-primary w-full p-4 text-center mb-2 justify-center"
                        type="file"
                        accept="image/jpeg,.pdf"
                        
                        name="Bride_Confirmation_Certificate"
                        onChange={(e) =>
                          handleFileChange(e, "Bride_Confirmation_Certificate")
                        }
                      />
                    </div>
                  </div>

                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Birth Certificate
                    </label>
                    <div className="relative bg-transparent dark:bg-form-input">
                      <input
                        className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                        type="file"
                        accept="image/jpeg,.pdf"
                        
                        name="Bride_Birth_Certificate"
                        onChange={(e) =>
                          handleFileChange(e, "Bride_Birth_Certificate")
                        }
                        placeholder="Select file"
                      />
                    </div>
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Cenomar/Civil Married
                    </label>
                    <div className="relative bg-transparent dark:bg-form-input">
                      <input
                        className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                        type="file"
                        accept="image/jpeg,.pdf"
                        
                        name="Bride_CeNomar_Civil_Married"
                        onChange={(e) =>
                          handleFileChange(e, "Bride_CeNomar_Civil_Married")
                        }
                        placeholder="Select file"
                      />
                    </div>
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Cannonical Application
                    </label>
                    <div className="relative bg-transparent dark:bg-form-input">
                      <input
                        className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                        type="file"
                        accept="image/jpeg,.pdf"
                        
                        name="Bride_Cannonical_Application"
                        onChange={(e) =>
                          handleFileChange(e, "Bride_Cannonical_Application")
                        }
                        placeholder="Select file"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Id Picture
                  </label>
                  <div className="relative bg-transparent dark:bg-form-input">
                    <input
                      className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                      type="file"
                      accept="image/jpeg,.pdf"
                      
                      name="Bride_Id_Picture"
                      onChange={(e) => handleFileChange(e, "Bride_Id_Picture")}
                    />
                  </div>
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Marriage Banns
                  </label>
                  <div className="relative bg-transparent dark:bg-form-input">
                    <input
                      className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                      type="file"
                      accept="image/jpeg,.pdf"
                      
                      name="Bride_Marriage_Banns"
                      // value={Bride_Baptismal_Certificate}
                      onChange={(e) =>
                        handleFileChange(e, "Bride_Marriage_Banns")
                      }
                      placeholder="Select file"
                    />
                  </div>
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Banns Reply
                  </label>
                  <div className="relative bg-transparent dark:bg-form-input">
                    <input
                      className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                      type="file"
                      accept="image/jpeg,.pdf"
                      
                      name="Bride_Banns_Reply"
                      // value={Bride_Baptismal_Certificate}
                      onChange={(e) => handleFileChange(e, "Bride_Banns_Reply")}
                      placeholder="Select file"
                    />
                  </div>
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Pre Cana
                  </label>
                  <div className="relative bg-transparent dark:bg-form-input">
                    <input
                      className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                      type="file"
                      accept="image/jpeg,.pdf"
                      
                      name="Bride_Pre_Cana"
                      // value={Bride_Baptismal_Certificate}
                      onChange={(e) => handleFileChange(e, "Bride_Pre_Cana")}
                      placeholder="Select file"
                    />
                  </div>
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Marriage Contract
                  </label>
                  <div className="relative bg-transparent dark:bg-form-input">
                    <input
                      className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                      type="file"
                      accept="image/jpeg,.pdf"
                      
                      name="Bride_Marriage_Contract"
                      // value={Bride_Baptismal_Certificate}
                      onChange={(e) =>
                        handleFileChange(e, "Bride_Marriage_Contract")
                      }
                      placeholder="Select file"
                    />
                  </div>
                </div>
                <div className="flex justify-end py-4 w-full">
                  <button
                    type="submit"
                    className="p-3 bg-primary w-full text-white rounded-sm"
                  >
                    Upload
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFiles;
