type Otherinfo = {
    RegistryNo: string
    Province: string
    City_Municipality: string
    placeOfMarriage: string
    dateOfMarriage: string
    timeOfMarriage: string
    priestWhoMarried: string
  }
  
  type OtherInforFormProps = Otherinfo & {
    updateFields: (fields: Partial<Otherinfo>) => void
  }
  
  export function OtherInfoRecord({RegistryNo, priestWhoMarried, timeOfMarriage, Province, City_Municipality, placeOfMarriage, dateOfMarriage, updateFields}: OtherInforFormProps) {
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
                    <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    </div>
                    <div className="mb-5.5 mt-2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                      >
                        Registry No.
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        placeholder="Registry No"
                        value={RegistryNo}
                        onChange={e => updateFields({ RegistryNo: e.target.value })}
                        required
                      />
                    </div>
                    <div className="mb-5.5 mt-2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                      >
                        Province
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        name="PlaceOfMarriage"
                        id="PlaceOfMarriage"
                        placeholder="Province"
                        value={Province}
                        onChange={e => updateFields({ Province: e.target.value })}
                        required
                      />
                    </div>
                    <div className="mb-5.5 mt-2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                      >
                        City/Municipality
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        name="PlaceOfMarriage"
                        id="PlaceOfMarriage"
                        placeholder="City Municipality"
                        value={City_Municipality}
                        onChange={e => updateFields({ City_Municipality: e.target.value })}
                        required
                      />
                    </div>
                    <div className="mb-5.5 mt-2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                      >
                        Place of marriage(Church)
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        name="PlaceOfMarriage"
                        id="PlaceOfMarriage"
                        placeholder="Place of marraige"
                        value={placeOfMarriage}
                        onChange={e => updateFields({ placeOfMarriage: e.target.value })}
                        required
                      />
                    </div>
                    <div className="mb-5.5">
                      <label className="mb-3 block text-black dark:text-white">
                      Date of marraige
                      </label>
                      <div className="relative">
                      <input
                        type="date"
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        value={dateOfMarriage}
                        onChange={e => updateFields({ dateOfMarriage: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-5.5">
                    <label className="mb-3 block text-black dark:text-white">
                    Time of marriage
                    </label>
                    <div className="relative">
                    <input
                      type="time"
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      value={timeOfMarriage}
                      onChange={e => updateFields({ timeOfMarriage: e.target.value })}
                      required
                    />
                    </div>
                  </div>
                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Guest Priest
                      </label>
                      <div className="relative z-20 bg-transparent dark:bg-form-input">
                      <select value={priestWhoMarried} onChange={e => updateFields({ priestWhoMarried: e.target.value })} className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus-border-primary active-border-primary dark-border-form-strokedark dark-bg-form-input dark-focus-border-primary">
                        <option value="Rev. Fr. Arnold M. Montella">Rev. Fr. Arnold M. Montella</option>
                        <option value="Rev. Fr. Eugenio Juanito P. Lopez">Rev. Fr. Eugenio Juanito P. Lopez</option>
                        <option value="Rev. Fr. Rolando B. Datu">Rev. Fr. Rolando B. Datu</option>
                        <option value="Rev. Fr. Zacarias M Parra">Rev. Fr. Zacarias M Parra</option>
                      </select>
                        <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                          <svg
                            className="fill-current"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.8">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                fill=""
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  