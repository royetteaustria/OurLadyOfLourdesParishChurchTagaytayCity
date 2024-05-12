
type BrideUserData ={
  brideName: string,
  brideBirth: string,
  bridePlaceofBirth: string,
  brideSex: string,
  brideCitezenship: string,
  brideResidence: string,
  brideReligion: string,
  brideCivilStatus: string,
  brideNameofFather: string,
  brideFatherCitezenship: string,
  brideNameofMother: string,
  brideMotherCitezenship: string,
  brideNameOfPersonWhoGaveConcent: string,
  brideNameOfPersonWhoGaveConcentRelationship: string,
  bridePersonWhoGaveConcentResidence: string,
}

type BrideUserFormProps = BrideUserData & {
  updateFields: (fields: Partial<BrideUserData>) => void
}

export function BrideForm({brideName, brideBirth, bridePlaceofBirth, brideSex, brideCitezenship, brideResidence, brideReligion, brideCivilStatus, brideNameofFather, brideFatherCitezenship, brideNameofMother, brideMotherCitezenship, brideNameOfPersonWhoGaveConcent, brideNameOfPersonWhoGaveConcentRelationship, bridePersonWhoGaveConcentResidence, updateFields}: BrideUserFormProps) {
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
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                    >
                      Bride Name
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Name"
                      value={brideName}
                      required
                      onChange={e => updateFields({ brideName: e.target.value })}
                    />
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                    >
                      Date of birth
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="date"
                      placeholder="Date of birth"
                      value={brideBirth}
                      required
                      onChange={e => updateFields({ brideBirth: e.target.value })}
                    />
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                    >
                      Place of birth
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Place of birth"
                      value={bridePlaceofBirth}
                      onChange={e => updateFields({ bridePlaceofBirth: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-5.5 mt-2">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                    >
                      Sex
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      placeholder="Sex"
                      value={brideSex}
                      onChange={e => updateFields({ brideSex: e.target.value })}
                      required
                    />
                  </div>
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
                      onChange={e => updateFields({ brideCitezenship: e.target.value })}
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
                    placeholder="Residence"
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    value={brideResidence}
                    onChange={e => updateFields({ brideResidence: e.target.value })}
                    required
                  />
                  </div>
                </div>
                <div className="mb-5.5 mt-2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                  >
                    Religion
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    placeholder="Religion"
                    value={brideReligion}
                    onChange={e => updateFields({ brideReligion: e.target.value })}
                    required
                  />
                  </div>
                  <div className="mb-5.5 mt-2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                  >
                    Civil Status
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    placeholder="Civil Status"
                    value={brideCivilStatus}
                    onChange={e => updateFields({ brideCivilStatus: e.target.value })}
                    required
                  />
                  </div>
                  <div className="mb-5.5 mt-2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                  >
                    Father Name
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    placeholder="Name"
                    value={brideNameofFather}
                    onChange={e => updateFields({ brideNameofFather: e.target.value })}
                    required
                  />
                  </div>
                  <div className="mb-5.5 mt-2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                  >
                    Father Citezenship
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    placeholder="Citezenship"
                    value={brideFatherCitezenship}
                    onChange={e => updateFields({ brideFatherCitezenship: e.target.value })}
                    required
                  />
                  </div>
                  <div className="mb-5.5 mt-2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                  >
                   Mother Name(Maiden)
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    placeholder="Name"
                    value={brideNameofMother}
                    onChange={e => updateFields({ brideNameofMother: e.target.value })}
                    required
                  />
                  </div>
                  <div className="mb-5.5 mt-2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                  >
                    Mother Citezenship
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    placeholder="Citezenship"
                    value={brideMotherCitezenship}
                    onChange={e => updateFields({ brideMotherCitezenship: e.target.value })}
                    required
                  />
                  </div>
                  <div className="mb-5.5 mt-2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                  >
                    Name of Person who gave consent or advice
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    placeholder="Name"
                    value={brideNameOfPersonWhoGaveConcent}
                    onChange={e => updateFields({ brideNameOfPersonWhoGaveConcent: e.target.value })}
                    required
                  />
                  </div>
                  <div className="mb-5.5 mt-2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                  >
                    Relationship of Person who gave consent or advice
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    placeholder="Relationship"
                    value={brideNameOfPersonWhoGaveConcentRelationship}
                    onChange={e => updateFields({ brideNameOfPersonWhoGaveConcentRelationship: e.target.value })}
                    required
                  />
                  </div>
                  <div className="mb-5.5 mt-2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                  >
                    Residence of Person who gave consent or advice
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    placeholder="Residence"
                    value={bridePersonWhoGaveConcentResidence}
                    onChange={e => updateFields({ bridePersonWhoGaveConcentResidence: e.target.value })}
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

export default BrideForm