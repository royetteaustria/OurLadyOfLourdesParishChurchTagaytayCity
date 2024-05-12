type BrideUserData = {
  brideName: string;
  brideAge: string;
  Brideemail: string;
  BridephoneNumber: string;
  brideLastName: string;
  brideMiddleName: string;
};

type BrideUserFormProps = BrideUserData & {
  updateFields: (fields: Partial<BrideUserData>) => void;
};
export function BrideForm({
  brideName,
  brideAge,
  Brideemail,
  BridephoneNumber,
  brideLastName,
  brideMiddleName,
  updateFields,
}: BrideUserFormProps) {
  const isAgeValid = brideAge === "" || parseInt(brideAge) >= 18;

  const isNameValid = brideName.trim().length > 0;
  const isAgeNull = brideAge.trim().length > 0;
  const isEmailNull = Brideemail.trim().length > 0;
  const isNumberNull = BridephoneNumber.trim().length > 0;

  const isMiddleNull = brideMiddleName.trim().length > 0;
  const isLastValid = brideLastName.trim().length > 0;
  return (
    <>
      <div className="mx-auto max-w-270">
        <div className="grid grid-cols-1 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm   bg-white  dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black text-2xl py-4">
                  Bride information
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
                      value={brideName}
                      onChange={(e) =>
                        updateFields({ brideName: e.target.value })
                      }
                      required
                    />
                    {!isNameValid && (
                      <p className="text-danger text-sm mt-3 ml-2">
                        Bride Name is required
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
                        value={brideMiddleName}
                        onChange={(e) =>
                          updateFields({ brideMiddleName: e.target.value })
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
                        value={brideLastName}
                        onChange={(e) =>
                          updateFields({ brideLastName: e.target.value })
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
                      Email Address
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="email"
                      placeholder="Email"
                      value={Brideemail}
                      onChange={(e) =>
                        updateFields({ Brideemail: e.target.value })
                      }
                      required
                    />
                    {!isEmailNull && (
                      <p className="text-danger text-sm text-sm mt-3 ml-2">
                        Email Address is required
                      </p>
                    )}
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Cellphone number
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="number"
                      placeholder="phone number"
                      value={BridephoneNumber}
                      onChange={(e) =>
                        updateFields({ BridephoneNumber: e.target.value })
                      }
                      required
                    />
                    {!isNumberNull && (
                      <p className="text-danger text-sm text-sm mt-3 ml-2">
                        Cellphone number is required
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
                      value={brideAge}
                      onChange={(e) =>
                        updateFields({ brideAge: e.target.value })
                      }
                      required
                    />
                    {!isAgeValid && (
                      <p className="text-danger text-sm">Age must be 18 or above</p>
                    )}
                    {!isAgeNull && (
                      <p className="text-danger text-sm">Age must be 18 or above</p>
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

export default BrideForm;
