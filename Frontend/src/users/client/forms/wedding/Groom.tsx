type GroomUserData = {
  email: string;
  phoneNumber: string;
  groomName: string;
  groomAge: string;
  groomMiddleName: string;
  groomLastName: string;
};

type GroomUserFormProps = GroomUserData & {
  updateFields: (fields: Partial<GroomUserData>) => void;
};

export function GroomForm({
  email,
  phoneNumber,
  groomName,
  groomAge,
  groomLastName,
  groomMiddleName,
  updateFields,
}: GroomUserFormProps) {
  const isAgeValid = groomAge === "" || parseInt(groomAge) >= 18;
  const isAgeNull = groomAge.trim().length > 0;
  const isEmailValid = email.trim().length > 0;

  const isMiddleNull = groomMiddleName.trim().length > 0;
  const isLastValid = groomLastName.trim().length > 0;
  const isPhoneNumberValid = phoneNumber.trim().length > 0;
  const isNameValid = groomName.trim().length > 0;
  

  return (
    <>
      <div className="mx-auto w-91 px-2">
        <div className="grid grid-cols-1 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm   bg-white ">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black text-2xl py-4 dark:text-white">
                  Groom information
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                <div className="mb-5.5 mt-2 w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      First Name
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Name"
                      value={groomName}
                      onChange={(e) =>
                        updateFields({ groomName: e.target.value })
                      }
                      required
                    />
                    {!isNameValid && (
                      <p className="text-danger text-sm mt-3 ml-2">
                        Groom Name is required
                      </p>
                    )}
                     <div className="mb-5.5 mt-2 w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Middle Name
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="middle name"
                      value={groomMiddleName}
                      onChange={(e) =>
                        updateFields({ groomMiddleName: e.target.value })
                      }
                      required
                    />
                    {!isMiddleNull && (
                      <p className="text-danger text-sm mt-3 ml-2">
                        Middle Name is required
                      </p>
                    )}
                   </div>
                   <div className="mb-5.5 mt-2 w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Last Name
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="last name"
                      value={groomLastName}
                      onChange={(e) =>
                        updateFields({ groomLastName: e.target.value })
                      }
                      required
                    />
                    {!isLastValid && (
                      <p className="text-danger text-sm mt-3 ml-2">
                        Last Name is required
                      </p>
                    )}
                   </div>
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Email
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => updateFields({ email: e.target.value })}
                      required
                    />
                    {!isEmailValid && (
                      <p className="text-danger text-sm mt-3 ml-2">Email is required</p>
                    )}
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Phone number
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="number"
                      placeholder="Number"
                      value={phoneNumber}
                      onChange={(e) =>
                        updateFields({ phoneNumber: e.target.value })
                      }
                      required
                    />
                    {!isPhoneNumberValid && (
                      <p className="text-danger text-sm mt-3 ml-2">
                        Phone number is required
                      </p>
                    )}
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Age
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="number"
                      placeholder="Age"
                      value={groomAge}
                      onChange={(e) =>
                        updateFields({ groomAge: e.target.value })
                      }
                      required
                    />
                    {!isAgeValid && (
                      <p className="text-danger text-sm mt-3 ml-2">
                        Age must be 18 or above
                      </p>
                    )}
                    {!isAgeNull && (
                      <p className="text-danger text-sm mt-3 ml-2">Age is require</p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GroomForm;
