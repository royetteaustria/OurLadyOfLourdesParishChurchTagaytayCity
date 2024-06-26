type GroomUserData = {
  groomName: string;
  groomMiddleName: string;
  groomLastName: string;
  groomBirth: string;
  groomPlaceofBirth: string;
  groomCitezenship: string;
  groomAddress: string;
  groomReligion: string;
  groomCivilStatus: string;
  groomFatherName: string;
  groomFatherCitezenship: string;
  groomMotherName: string;
  groomMotherCitezenship: string;
  groomNameOfPersonWhoGaveConcent: string;
  groomNameOfPersonWhoGaveConcentRelationship: string;
  groomPersonWhoGaveConcentResidence: string;
};
type GroomUserFormProps = GroomUserData & {
  updateFields: (fields: Partial<GroomUserData>) => void;
};

export function GroomForm({
  groomName,
  groomMiddleName,
  groomLastName,
  groomBirth,
  groomPlaceofBirth,
  groomCitezenship,
  groomAddress,
  groomReligion,
  groomCivilStatus,
  groomFatherName,
  groomFatherCitezenship,
  groomMotherName,
  groomMotherCitezenship,
  groomNameOfPersonWhoGaveConcent,
  groomNameOfPersonWhoGaveConcentRelationship,
  groomPersonWhoGaveConcentResidence,
  updateFields,
}: GroomUserFormProps) {
  return (
    <>
      <div className="mx-auto max-w-270">
        <div className="grid grid-cols-1 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm   bg-white  dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Groom information
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row"></div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Groom Name
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
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Middle Name
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      disabled
                      placeholder="Middle name"
                      value={groomMiddleName}
                      onChange={(e) =>
                        updateFields({ groomMiddleName: e.target.value })
                      }
                      required
                    />
                    <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Last Name
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      disabled
                      placeholder="Last name"
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
                      Date of birth
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="date"
                      placeholder="Date of birth"
                      value={groomBirth}
                      onChange={(e) =>
                        updateFields({ groomBirth: e.target.value })
                      }
                      required
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
                      value={groomPlaceofBirth}
                      onChange={(e) =>
                        updateFields({ groomPlaceofBirth: e.target.value })
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
                      value={groomSex}
                      onChange={(e) =>
                        updateFields({ groomSex: e.target.value })
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
                        value={groomCitezenship}
                        onChange={(e) =>
                          updateFields({ groomCitezenship: e.target.value })
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
                        value={groomAddress}
                        onChange={(e) =>
                          updateFields({ groomAddress: e.target.value })
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
                      value={groomReligion}
                      onChange={(e) =>
                        updateFields({ groomReligion: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-5.5 mt-2">
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                      <select
                        value={groomCivilStatus}
                        onChange={(e) =>
                          updateFields({ groomCivilStatus: e.target.value })
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
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Father Name <span className="italic">(First Name, Middle Name, Last Name)</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Name"
                      value={groomFatherName}
                      onChange={(e) =>
                        updateFields({ groomFatherName: e.target.value })
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
                      value={groomFatherCitezenship}
                      onChange={(e) =>
                        updateFields({ groomFatherCitezenship: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Mother Name(Maiden) <span className="italic">(First Name, Middle Name, Last Name)</span>
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Name"
                      value={groomMotherName}
                      onChange={(e) =>
                        updateFields({ groomMotherName: e.target.value })
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
                      value={groomMotherCitezenship}
                      onChange={(e) =>
                        updateFields({ groomMotherCitezenship: e.target.value })
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
                      value={groomNameOfPersonWhoGaveConcent}
                      onChange={(e) =>
                        updateFields({
                          groomNameOfPersonWhoGaveConcent: e.target.value,
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
                      value={groomNameOfPersonWhoGaveConcentRelationship}
                      onChange={(e) =>
                        updateFields({
                          groomNameOfPersonWhoGaveConcentRelationship:
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
                      value={groomPersonWhoGaveConcentResidence}
                      onChange={(e) =>
                        updateFields({
                          groomPersonWhoGaveConcentResidence: e.target.value,
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

export default GroomForm;
