type BrideUserData = {
    Brideemail: string;
    BridephoneNumber: string;
    brideName: string;
    brideAge: string;
    brideLastName: string;
    brideMiddleName: string;
    brideBaptizedAt: string;
    brideAddress: string;
    brideNameOfParishChurch: string;
    brideaddressOfParishChurch: string;
    brideFatherName: string;
    brideMotherName: string;
    bridealreadyBaptist: string;
    bridealreadyKumpil: string;
  };
  
  type BrideUserFormProps = BrideUserData & {
    updateFields: (fields: Partial<BrideUserData>) => void;
  };
  
  export function BrideForm({
    Brideemail,
    BridephoneNumber,
    brideName,
    brideAge,
    brideLastName,
    brideMiddleName,
    brideBaptizedAt,
    brideAddress,
    brideNameOfParishChurch,
    brideaddressOfParishChurch,
    brideFatherName,
    brideMotherName,
    bridealreadyBaptist,
    bridealreadyKumpil,
    updateFields,
  }: BrideUserFormProps) {
    return (
      <>
        <div className="mx-auto w-91 px-2">
          <div className="grid grid-cols-1 gap-8">
            <div className="col-span-5 xl:col-span-3">
              <div className="rounded-sm   bg-white ">
                <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                  <h3 className="font-medium text-black text-2xl py-4 dark:text-white">
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
                        disabled
                        placeholder="Name"
                        value={brideName}
                        onChange={(e) =>
                          updateFields({ brideName: e.target.value })
                        }
                        required
                      />
                      <div className="mb-5.5 mt-2 w-full">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                          Middle Name
                        </label>
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          disabled
                          placeholder="middle name"
                          value={brideMiddleName}
                          onChange={(e) =>
                            updateFields({ brideMiddleName: e.target.value })
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
                          placeholder="last name"
                          value={brideLastName}
                          onChange={(e) =>
                            updateFields({ brideLastName: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-5.5 mt-2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Email
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="email"
                        disabled
                        placeholder="Email"
                        value={Brideemail}
                        onChange={(e) => updateFields({ Brideemail: e.target.value })}
                        required
                      />
                    </div>
                    <div className="mb-5.5 mt-2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Phone number
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="number"
                        placeholder="Number"
                        disabled
                        value={BridephoneNumber}
                        onChange={(e) =>
                          updateFields({ BridephoneNumber: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="mb-5.5 mt-2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Age
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="number"
                        placeholder="Age"
                        disabled
                        value={brideAge}
                        onChange={(e) =>
                          updateFields({ brideAge: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="mb-5.5 mt-2 w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Baptized At
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Baptized at"
                      value={brideBaptizedAt}
                      onChange={(e) =>
                        updateFields({ brideBaptizedAt: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-5.5 mt-2 w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Address
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Address"
                      value={brideAddress}
                      onChange={(e) =>
                        updateFields({ brideAddress: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-5.5 mt-2 w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Name of Parish Church
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Parich Church name"
                      value={brideNameOfParishChurch}
                      onChange={(e) =>
                        updateFields({ brideNameOfParishChurch: e.target.value })
                      }
                      required
                    />
                  </div>
                 
                  <div className="mb-5.5 mt-2 w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Address of Parish Church
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Church Address"
                      value={brideaddressOfParishChurch}
                      onChange={(e) =>
                        updateFields({ brideaddressOfParishChurch: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-5.5 mt-2 w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Complete name of Father<span className="italic">(Firstname, Middlename, Lastname)</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Father name"
                      value={brideFatherName}
                      onChange={(e) =>
                        updateFields({ brideFatherName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-5.5 mt-2 w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Mother Name (Maiden) <span className="italic">(Firstname, Middlename, Lastname)</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Mother name"
                      value={brideMotherName}
                      onChange={(e) =>
                        updateFields({ brideMotherName: e.target.value })
                      }
                      required
                    />
                  </div>
                    <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Have Sacrament of Confirmation
                    </label>
                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        value="Yes"
                        checked={bridealreadyKumpil === "Yes"}
                        onChange={(e) =>
                          updateFields({ bridealreadyKumpil: e.target.value })
                        }
                        name="Have Sacrament of Confirmation"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        id=""
                      />
                      <label htmlFor="" className="cursor-pointer">
                        Yes
                      </label>
                      <input
                        type="radio"
                        checked={bridealreadyKumpil === "No"}
                        value="No"
                        onChange={(e) =>
                          updateFields({ bridealreadyKumpil: e.target.value })
                        }
                        name="Have Sacrament of Confirmation"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ml-4"
                        id=""
                      />
                      <label htmlFor="" className="cursor-pointer">
                        No
                      </label>
                    </div>
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Already baptized
                    </label>
                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        value="Yes"
                        checked={bridealreadyBaptist === "Yes"}
                        onChange={(e) =>
                          updateFields({ bridealreadyBaptist: e.target.value })
                        }
                        name="already Baptized"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="" className="cursor-pointer">
                        Yes
                      </label>
                      <input
                        type="radio"
                        value="No"
                        checked={bridealreadyBaptist === "No"}
                        onChange={(e) =>
                          updateFields({ bridealreadyBaptist: e.target.value })
                        }
                        name="already Baptized"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ml-4"
                      />
                      <label htmlFor="" className="cursor-pointer">
                        No
                      </label>
                    </div>
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
  