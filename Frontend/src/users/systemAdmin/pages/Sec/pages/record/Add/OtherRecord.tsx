import { useState } from "react";

type OtherInfo = {
  dateofBaptismal: string;
  priestWhoBaptized: string;
  godMother: string[];
  godFather: string[];
};

type OtherInfoProps = OtherInfo & {
  updateFields: (fields: Partial<OtherInfo>) => void;
};

export function OtherRecord({
  dateofBaptismal,
  priestWhoBaptized,
  godMother,
  godFather,
  updateFields,
}: OtherInfoProps) {
  const [newGodmother, setNewGodmother] = useState('');
  const [newGodfather, setNewGodfather] = useState('');

  const addGodmother = () => {
    if (newGodmother.trim() !== "") {
      updateFields({
        godMother: [...godMother, newGodmother],
      });
      setNewGodmother("");
    }
  };

  const removeGodmother = (index: number) => {
    const updatedGodmothers = [...godMother];
    updatedGodmothers.splice(index, 1);
    updateFields({
      godMother: updatedGodmothers,
    });
  };

  const addGodfather = () => {
    if (newGodfather.trim() !== "") {
      updateFields({
        godFather: [...godFather, newGodfather],
      });
      setNewGodfather("");
    }
  };

  const removeGodfather = (index: number) => {
    const updatedGodfathers = [...godFather];
    updatedGodfathers.splice(index, 1);
    updateFields({
      godFather: updatedGodfathers,
    });
  };

  return (
    <>
      <div className="mx-auto max-w-270">
        <div className="grid grid-cols-1 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm bg-white dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Other info
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-5.5 mt-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Date of Baptismal
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="date"
                      placeholder="Date of birth"
                      value={dateofBaptismal}
                      required
                      onChange={(e) =>
                        updateFields({ dateofBaptismal: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Priest who Baptized
                    </label>
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                      <select
                        value={priestWhoBaptized}
                        onChange={(e) =>
                          updateFields({
                            priestWhoBaptized: e.target.value,
                          })
                        }
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus-border-primary active-border-primary dark-border-form-strokedark dark-bg-form-input dark-focus-border-primary"
                      >
                        <option value="Rev. Fr. Arnold M. Montella">
                          Rev. Fr. Arnold M. Montella
                        </option>
                        <option value="Rev. Fr. Eugenio Juanito P. Lopez">
                          Rev. Fr. Eugenio Juanito P. Lopez
                        </option>
                        <option value="Rev. Fr. Rolando B. Datu">
                          Rev. Fr. Rolando B. Datu
                        </option>
                        <option value="Rev. Fr. Zacarias M Parra">
                          Rev. Fr. Zacarias M Parra
                        </option>
                      </select>
                      {/* <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                        <RiArrowDropDownLine size={30} />
                      </span> */}
                    </div>
                  </div>
                  <div className="mb-5.5">
                    <label className="mb-3 block text-black dark:text-white">
                      God Mothers
                    </label>
                    {godMother.map((godmother, index) => (
                      <div key={index} className="relative mb-2">
                        <input
                          type="text"
                          placeholder="God Mother"
                          className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          value={godmother}
                          onChange={(e) => {
                            const updatedGodmothers = [...godMother];
                            updatedGodmothers[index] = e.target.value;
                            updateFields({
                              godMother: updatedGodmothers,
                            });
                          }}
                          required
                        />
                        <button
                          type="button"
                          className="absolute top-1/2 right-4 transform -translate-y-1/2"
                          onClick={() => removeGodmother(index)}
                        >
                          <span className="text-danger">Remove</span>
                        </button>
                      </div>
                    ))}
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="God Mother"
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        value={newGodmother}
                        onChange={(e) => setNewGodmother(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        className="absolute top-1/2 right-4 transform -translate-y-1/2"
                        onClick={addGodmother}
                      >
                        <span className="text-primary">Add</span>
                      </button>
                    </div>
                  </div>
                  <div className="mb-5.5">
                    <label className="mb-3 block text-black dark:text-white">
                      God Fathers
                    </label>
                    {godFather.map((godfather, index) => (
                      <div key={index} className="relative mb-2">
                        <input
                          type="text"
                          placeholder="God Father"
                          className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          value={godfather}
                          onChange={(e) => {
                            const updatedGodfathers = [...godFather];
                            updatedGodfathers[index] = e.target.value;
                            updateFields({
                              godFather: updatedGodfathers,
                            });
                          }}
                          required
                        />
                        <button
                          type="button"
                          className="absolute top-1/2 right-4 transform -translate-y-1/2"
                          onClick={() => removeGodfather(index)}
                        >
                          <span className="text-danger">Remove</span>
                        </button>
                      </div>
                    ))}
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="God Father"
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        value={newGodfather}
                        onChange={(e) => setNewGodfather(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        className="absolute top-1/2 right-4 transform -translate-y-1/2"
                        onClick={addGodfather}
                      >
                        <span className="text-primary">Add</span>
                      </button>
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

export default OtherRecord;
