type GroomUserData = {
  email: string;
  phoneNumber: string;
  groomName: string;
  groomAge: string;
  groomLastName: string;
  groomMiddleName: string;
  groomBaptizedAt: string;
  groomAddress: string;
  groomNameOfParishChurch: string;
  groomaddressOfParishChurch: string;
  groomFatherName: string;
  groomMotherName: string;
  groomalreadyBaptist: string;
  groomalreadyKumpil: string;
  start: Date;
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
  groomBaptizedAt,
  groomAddress,
  groomNameOfParishChurch,
  groomaddressOfParishChurch,
  groomFatherName,
  groomMotherName,
  groomalreadyBaptist,
  groomalreadyKumpil,
  start,
  updateFields,
}: GroomUserFormProps) {
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
                      Date of Wedding
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      disabled
                      value={formatDateTime(start)}
                      onChange={(e) => updateFields({ start: new Date(e.target.value) })}
                      required
                    />
                  </div>
                  <div className="mb-5.5 mt-2 w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      First Name
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      disabled
                      placeholder="Name"
                      value={groomName}
                      onChange={(e) =>
                        updateFields({ groomName: e.target.value })
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
                        value={groomMiddleName}
                        onChange={(e) =>
                          updateFields({ groomMiddleName: e.target.value })
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
                        value={groomLastName}
                        onChange={(e) =>
                          updateFields({ groomLastName: e.target.value })
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
                      value={email}
                      onChange={(e) => updateFields({ email: e.target.value })}
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
                      value={phoneNumber}
                      onChange={(e) =>
                        updateFields({ phoneNumber: e.target.value })
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
                      value={groomAge}
                      onChange={(e) =>
                        updateFields({ groomAge: e.target.value })
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
                      value={groomAddress}
                      onChange={(e) =>
                        updateFields({ groomAddress: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-5.5 mt-2 w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Baptized At (Jurisdiction with the Domiciled Address)
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Baptized at"
                      value={groomBaptizedAt}
                      onChange={(e) =>
                        updateFields({ groomBaptizedAt: e.target.value })
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
                      value={groomNameOfParishChurch}
                      onChange={(e) =>
                        updateFields({
                          groomNameOfParishChurch: e.target.value,
                        })
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
                      value={groomaddressOfParishChurch}
                      onChange={(e) =>
                        updateFields({
                          groomaddressOfParishChurch: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="mb-5.5 mt-2 w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Complete name of Father <span className="italic">(Firstname, Middlename, Lastname)</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Father name"
                      value={groomFatherName}
                      onChange={(e) =>
                        updateFields({ groomFatherName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-5.5 mt-2 w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Mother Name(Maiden) <span className="italic">(Firstname, Middlename, Lastname)</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Mother name"
                      value={groomMotherName}
                      onChange={(e) =>
                        updateFields({ groomMotherName: e.target.value })
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
                        checked={groomalreadyKumpil === "Yes"}
                        onChange={(e) =>
                          updateFields({ groomalreadyKumpil: e.target.value })
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
                        checked={groomalreadyKumpil === "No"}
                        value="No"
                        onChange={(e) =>
                          updateFields({ groomalreadyKumpil: e.target.value })
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
                        checked={groomalreadyBaptist === "Yes"}
                        onChange={(e) =>
                          updateFields({ groomalreadyBaptist: e.target.value })
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
                        checked={groomalreadyBaptist === "No"}
                        onChange={(e) =>
                          updateFields({ groomalreadyBaptist: e.target.value })
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

export default GroomForm;
