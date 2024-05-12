type MainInfoData = {
    name: string,
    dateofBirth: string,
    birthPlace: string,
    cellphoneNumber: string,
    currentAddress: string,
    fatherName: string,
    fatherBirthOfPlace: string,
    motherName: string,
    motherBirthOfPlace: string, 
    marriedPlace: string,
}

type MainInfoFormProps = MainInfoData & {
    updateFields: (fields: Partial<MainInfoData>) => void
}

export function MainRecord({name, dateofBirth, birthPlace,  cellphoneNumber, currentAddress, fatherName, fatherBirthOfPlace, motherName, motherBirthOfPlace,  marriedPlace, updateFields}: MainInfoFormProps) {
  return (
    <>
    <div className="mx-auto max-w-270">
        <div className="grid grid-cols-1 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm   bg-white  dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Input information below
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
                      Name of Child
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Name"
                      value={name}
                      required
                      onChange={e => updateFields({ name: e.target.value })}
                    />
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                    >
                      Birthdate
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="date"
                      placeholder="Date of birth"
                      value={dateofBirth}
                      required
                      onChange={e => updateFields({ dateofBirth: e.target.value })}
                    />
                  </div>

                  <div className="mb-5.5 mt-2">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                    >
                      Birth place
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Birth place"
                      value={birthPlace}
                      required
                      onChange={e => updateFields({ birthPlace: e.target.value })}
                    />
                  </div>

                  <div className="mb-5.5 mt-2">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                    >
                      Cellphone Number
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Number"
                      value={cellphoneNumber}
                      onChange={e => updateFields({ cellphoneNumber: e.target.value })}
                      required
                    />
                  </div>
                 
                  <div className="mb-5.5">
                    <label className="mb-3 block text-black dark:text-white">
                    Current Address
                    </label>
                    <div className="relative">
                    <input
                      type="text"
                      placeholder="Address"
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      value={currentAddress}
                      onChange={e => updateFields({ currentAddress: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="mb-5.5">
                  <label className="mb-3 block text-black dark:text-white">
                  Father name
                  </label>
                  <div className="relative">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    value={fatherName}
                    onChange={e => updateFields({ fatherName: e.target.value })}
                    required
                  />
                  </div>
                </div>
                <div className="mb-5.5 mt-2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                  >
                    Father birth of place
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    placeholder="Birthplace"
                    value={fatherBirthOfPlace}
                    onChange={e => updateFields({ fatherBirthOfPlace: e.target.value })}
                    required
                  />
                  </div>
                  <div className="mb-5.5 mt-2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                  >
                    Mother name
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    placeholder="Name"
                    value={motherName}
                    onChange={e => updateFields({ motherName: e.target.value })}
                    required
                  />
                  </div>
                  <div className="mb-5.5 mt-2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                  >
                    Mother birth of place
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    placeholder="Birthplace"
                    value={motherBirthOfPlace}
                    onChange={e => updateFields({ motherBirthOfPlace: e.target.value })}
                    required
                  />
                  </div>
                  <div className="mb-5.5 mt-2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                  >
                    Married Place
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    placeholder="Married in"
                    value={marriedPlace}
                    onChange={e => updateFields({ marriedPlace: e.target.value })}
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
  )
}

export default MainRecord