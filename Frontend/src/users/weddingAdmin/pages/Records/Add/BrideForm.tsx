type BrideUserData = {
  brideName: string;
  brideMiddleName: string;
  brideLastName: string;
  brideBirth: string;
  bridePlaceofBirth: string;
  brideCitezenship: string;
  brideAddress: string;
  brideReligion: string;
  brideCivilStatus: string;
  brideFatherName: string;
  brideFatherCitezenship: string;
  brideMotherName: string;
  brideMotherCitezenship: string;
  brideNameOfPersonWhoGaveConcent: string;
  brideNameOfPersonWhoGaveConcentRelationship: string;
  bridePersonWhoGaveConcentResidence: string;
};

type BrideUserFormProps = BrideUserData & {
  updateFields: (fields: Partial<BrideUserData>) => void;
};

export function BrideForm({
  brideName,
  brideMiddleName,
  brideLastName,
  brideBirth,
  bridePlaceofBirth,
  brideCitezenship,
  brideAddress,
  brideReligion,
  brideCivilStatus,
  brideFatherName,
  brideFatherCitezenship,
  brideMotherName,
  brideMotherCitezenship,
  brideNameOfPersonWhoGaveConcent,
  brideNameOfPersonWhoGaveConcentRelationship,
  bridePersonWhoGaveConcentResidence,
  updateFields,
}: BrideUserFormProps) {
  return (
    <>
      <div className="mx-auto max-w-270">
        <div className="grid grid-cols-1 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm   bg-white  dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Bride information
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Bride Name
                    </label>
                    <input
                      className="w-full rounded border   border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      disabled
                      placeholder="Name"
                      value={brideName}
                      required
                      onChange={(e) =>
                        updateFields({ brideName: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Middle Name
                    </label>
                    <input
                      className="w-full rounded border   border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      disabled
                      placeholder="Middle name"
                      value={brideMiddleName}
                      required
                      onChange={(e) =>
                        updateFields({ brideMiddleName: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Last Name
                    </label>
                    <input
                      className="w-full rounded border   border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      disabled
                      placeholder="Last name"
                      value={brideLastName}
                      required
                      onChange={(e) =>
                        updateFields({ brideLastName: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Date of birth
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="date"
                      placeholder="Date of birth"
                      value={brideBirth}
                      required
                      onChange={(e) =>
                        updateFields({ brideBirth: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Place of birth
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Place of birth"
                      value={bridePlaceofBirth}
                      onChange={(e) =>
                        updateFields({ bridePlaceofBirth: e.target.value })
                      }
                      required
                    />
                  </div>
                  {/* <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Sex
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Sex"
                      value={brideSex}
                      onChange={(e) =>
                        updateFields({ brideSex: e.target.value })
                      }
                      required
                    />
                  </div> */}
                  <div className="mb-5.5">
                    <label className="mb-3 block text-black dark:text-white">
                      Citezenship
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Citezenship"
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        value={brideCitezenship}
                        onChange={(e) =>
                          updateFields({ brideCitezenship: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-5.5">
                    <label className="mb-3 block text-black dark:text-white">
                      Residence
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        disabled
                        placeholder="Residence"
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        value={brideAddress}
                        onChange={(e) =>
                          updateFields({ brideAddress: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Religion
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Religion"
                      value={brideReligion}
                      onChange={(e) =>
                        updateFields({ brideReligion: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Civil Status
                    </label>
                    <select
                        value={brideCivilStatus}
                        onChange={(e) =>
                          updateFields({ brideCivilStatus: e.target.value })
                        }
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus-border-primary active-border-primary dark-border-form-strokedark dark-bg-form-input dark-focus-border-primary"
                      >
                        <option value="Single">
                          Single
                        </option>
                        <option value="Married">
                          Married
                        </option>
                        <option value="Widowed">
                          Widowed
                        </option>
                        <option value="Legally Separated">
                          Legally Separated
                        </option>
                      </select>
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Father Name <span className="italic">(First Name, Middle Name, Last Name)</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      disabled
                      placeholder="Name"
                      value={brideFatherName}
                      onChange={(e) =>
                        updateFields({ brideFatherName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Father Citezenship
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Citezenship"
                      value={brideFatherCitezenship}
                      onChange={(e) =>
                        updateFields({ brideFatherCitezenship: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Mother Name(Maiden) <span className="italic">(First Name, Middle Name, Last Name)</span>
                    </label>
                    <input
                    disabled
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Name"
                      value={brideMotherName}
                      onChange={(e) =>
                        updateFields({ brideMotherName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Mother Citezenship
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Citezenship"
                      value={brideMotherCitezenship}
                      onChange={(e) =>
                        updateFields({ brideMotherCitezenship: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Name of Person who gave consent or advice
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Name"
                      value={brideNameOfPersonWhoGaveConcent}
                      onChange={(e) =>
                        updateFields({
                          brideNameOfPersonWhoGaveConcent: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Relationship of Person who gave consent or advice
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Relationship"
                      value={brideNameOfPersonWhoGaveConcentRelationship}
                      onChange={(e) =>
                        updateFields({
                          brideNameOfPersonWhoGaveConcentRelationship:
                            e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Residence of Person who gave consent or advice
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Residence"
                      value={bridePersonWhoGaveConcentResidence}
                      onChange={(e) =>
                        updateFields({
                          bridePersonWhoGaveConcentResidence: e.target.value,
                        })
                      }
                      required
                    />
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
