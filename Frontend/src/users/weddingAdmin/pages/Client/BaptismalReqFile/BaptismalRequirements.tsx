import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Data = {
  name: "",
  lname: "",
  birthCertificate: "",
  MarriageContract: "",
  FatherBaptismalCerticate: "",
  MotherBaptismalCerticate: "",
  ParishPermit: "",
};

const BaptismalRequirements = () => {
  const [data, setData] = useState(Data);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleFileChange = (e: any, fieldName: string) => {
    const file = e.target.files[0];
  const isImageFile = file.type.startsWith('image/') && !file.type.endsWith('svg+xml');
  const isPDFFile = file.type === 'application/pdf';

  if (isImageFile || isPDFFile) {
    setData({
      ...data,
      [fieldName]: file,
    });
  } else {
    // Show an error message or reset the file input
    toast.error('Please select an image or PDF file.');
    e.target.value = null; // Reset the file input
  }
  };

  useEffect(() => {
    axios
      .get(`https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/BaptismalClient/singleClient/${id}`)
      .then((res) => {
        console.log(res);
        setData((prev) => ({
          ...prev,
          name: res.data.name,
          lname: res.data.lname,
        }));
      })
      .catch((err) => console.log(err));
  }, [id]);

  const upload = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("lname", data.lname);
    formData.append("birthCertificate", data.birthCertificate);
    formData.append("MarriageContract", data.MarriageContract);
    formData.append("FatherBaptismalCerticate", data.FatherBaptismalCerticate);
    formData.append("MotherBaptismalCerticate", data.MotherBaptismalCerticate);
    formData.append("ParishPermit", data.ParishPermit);

    axios
      .post("https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app/api/Baptismalreq/upload", formData)
      .then((res) => {
        console.log(res);
        navigate("/ParishSecretary/BaptismalRequirementsList");
        toast.success("Success");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mx-auto max-w-full">
      <div className="grid grid-cols-1 gap-8">
        <div className="col-span-5 xl:col-span-3">
          <div className="rounded-sm   bg-white  dark:border-strokedark dark:bg-boxdark">
            <form action="" onSubmit={upload}>
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <div className="mb-4.5">
                  
                  
                  <div className="py-6 border-b mb-2 text-black dark:text-white font-semibold">
                    <h1>Baptismal Requirements</h1>
                  </div>
                  <div className="mb-5.5 mt-2 w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Name
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      disabled
                      placeholder="name"
                      value={data.name}
                      onChange={(e) =>
                        setData({ ...data, name: e.target.value })
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
                      value={data.lname}
                      onChange={(e) =>
                        setData({ ...data, lname: e.target.value })
                      }
                      required
                    />
                  </div>
                  <label className="mb-2.5 block text-black dark:text-white">
                    Birth Certificate <span></span>
                  </label>
                  <div className="relative bg-transparent dark:bg-form-input">
                    <input
                      className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                      type="file"
                      accept="image/*,.pdf"
                      name="birthCertificate"
                      onChange={(e) => handleFileChange(e, "birthCertificate")}
                    />
                  </div>
                  <div className="mb-4.5 mt-2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Marriage Contract
                    </label>
                    <div className="relative bg-transparent dark:bg-form-input">
                      <input
                        className="border border-dashed border-primary text-primary w-full p-4 text-center mb-2 justify-center"
                        type="file"
                        accept="image/*,.pdf"
                        name="MarriageContract"
                        onChange={(e) =>
                          handleFileChange(e, "MarriageContract")
                        }
                      />
                    </div>
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Father Baptismal Certicate
                    </label>
                    <div className="relative bg-transparent dark:bg-form-input">
                      <input
                        className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                        type="file"
                        accept="image/*,.pdf"
                        name="FatherBaptismalCerticate"
                        onChange={(e) =>
                          handleFileChange(e, "FatherBaptismalCerticate")
                        }
                        placeholder="Select file"
                      />
                    </div>
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Mother Baptismal Certicate
                    </label>
                    <div className="relative bg-transparent dark:bg-form-input">
                      <input
                        className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                        type="file"
                        accept="image/*,.pdf"
                        name="MotherBaptismalCerticate"
                        onChange={(e) =>
                          handleFileChange(e, "MotherBaptismalCerticate")
                        }
                        placeholder="Select file"
                      />
                    </div>
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Parish Permit
                    </label>
                    <div className="relative bg-transparent dark:bg-form-input">
                      <input
                        className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                        type="file"
                        accept="image/*,.pdf"
                        name="ParishPermit"
                        onChange={(e) => handleFileChange(e, "ParishPermit")}
                        placeholder="Select file"
                      />
                    </div>
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

export default BaptismalRequirements;
