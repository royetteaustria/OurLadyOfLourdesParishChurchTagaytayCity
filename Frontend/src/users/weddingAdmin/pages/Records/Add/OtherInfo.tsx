type Otherinfo = {
  RegistryNo: string;
  Province: string;
  City_Municipality: string;
  placeOfMarriage: string;
  start: string;
  priestWhoMarried: string
};

type OtherInforFormProps = Otherinfo & {
  updateFields: (fields: Partial<Otherinfo>) => void;
};

export function OtherInfoRecord({
  RegistryNo,
  priestWhoMarried,
  Province,
  City_Municipality,
  placeOfMarriage,
  start,
  updateFields,
}: OtherInforFormProps) {
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
      <div className="mx-auto max-w-270">
        <div className="grid grid-cols-1 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm   bg-white  dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Other information
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row"></div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Registry No.
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Registry No"
                      value={RegistryNo}
                      onChange={(e) =>
                        updateFields({ RegistryNo: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Province
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="PlaceOfMarriage"
                      id="PlaceOfMarriage"
                      placeholder="Province"
                      value={Province}
                      onChange={(e) =>
                        updateFields({ Province: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      City/Municipality
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="PlaceOfMarriage"
                      id="PlaceOfMarriage"
                      placeholder="City Municipality"
                      value={City_Municipality}
                      onChange={(e) =>
                        updateFields({ City_Municipality: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Place of marriage(Church)
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="PlaceOfMarriage"
                      id="PlaceOfMarriage"
                      placeholder="Place of marraige"
                      value={placeOfMarriage}
                      onChange={(e) =>
                        updateFields({ placeOfMarriage: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-5.5">
                    <label className="mb-3 block text-black dark:text-white">
                      Date of marraige
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        value={formatDateTime(start)}
                        onChange={(e) =>
                          updateFields({ start: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Guest Priest
                    </label>
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        value={priestWhoMarried}
                        onChange={(e) =>
                          updateFields({ priestWhoMarried: e.target.value })
                        }
                        required
                      />
                      </div>
                      
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
