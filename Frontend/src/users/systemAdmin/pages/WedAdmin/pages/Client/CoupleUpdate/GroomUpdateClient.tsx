type GroomClientData = {
  Groom_Baptismal_Certificate: string,
  Groom_Confirmation_Certificate: string,
  Groom_Birth_Certificate: string,
  Groom_CeNomar_Civil_Married: string,
  Groom_Cannonical_Application: string,
  Groom_Cannonical_Interview: string,
  Groom_Id_Picture: string,
  Groom_Marriage_Banns: string,
  Groom_Banns_Reply: string,
  Groom_Pre_Cana: string,
  Groom_Marriage_Contract: string,
}
type GroomClientProps = GroomClientData & {
  updateFields: (fields: Partial<GroomClientData>) => void
}

export function GroomUpdateClient (
  {
      // Groom_Baptismal_Certificate, 
      // Groom_Confirmation_Certificate,
      // Groom_Birth_Certificate, 
      // Groom_CeNomar_Civil_Married,
      // Groom_Cannonical_Application,
      Groom_Cannonical_Interview,
      // Groom_Id_Picture, 
      // Groom_Marriage_Banns,
      // Groom_Banns_Reply,
      // Groom_Pre_Cana, 
      // Groom_Marriage_Contract,
      updateFields
  }: GroomClientProps
) {
return (
  <>
  <div className="mx-auto max-w-full">
    <div className="grid grid-cols-1 gap-8">
      <div className="col-span-5 xl:col-span-3">
        <div className="rounded-sm   bg-white  dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
            <div className="mb-4.5">
            <div className='py-6 border-b mb-2 text-black dark:text-white font-semibold'><h1>Groom Requirements</h1></div>
              <label className="mb-2.5 block text-black dark:text-white">
                Baptismal Certificate <span></span>
              </label>
              <div className="relative bg-transparent dark:bg-form-input">
              
                <input
                  className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                  type="file"
                  name="Groom_Baptismal_Certificate"
                  
                  onChange={(e) =>
                    updateFields({
                      Groom_Baptismal_Certificate: e.target.files?.[0]?.name || "",
                    })
                  }
                  placeholder="Select file"
                />
              </div>
              <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Confirmation Certificate
              </label>
              <div className="relative bg-transparent dark:bg-form-input">
              
               <input
                  className="border border-dashed border-primary text-primary w-full p-4 text-center mb-2 justify-center"
                  type="file"
                  name="Groom_Confirmation_Certificate"
                  onChange={(e) =>
                    updateFields({
                      Groom_Confirmation_Certificate: e.target.files?.[0]?.name || "",
                    })
                  }
                />
                </div>
              </div>

              <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Birth Certificate
              </label>
              <div className="relative bg-transparent dark:bg-form-input">
              
                <input
                  className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                  type="file"
                  name="Groom_Birth_Certificate"
                  
                  onChange={(e) =>
                    updateFields({
                      Groom_Birth_Certificate: e.target.files?.[0]?.name || "",
                    })
                  }
                  placeholder="Select file"
                />
                </div>
              </div>
              <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Cenomar/Civil Married
              </label>
              <div className="relative bg-transparent dark:bg-form-input">
              
                <input
                  className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                  type="file"
                  name="Groom_CeNomar_Civil_Married"
            
                  onChange={(e) =>
                    updateFields({
                      Groom_CeNomar_Civil_Married: e.target.files?.[0]?.name || "",
                    })
                  }
                  placeholder="Select file"
                />
                </div>
              </div>
              <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Cannonical Application
              </label>
              <div className="relative bg-transparent dark:bg-form-input">
                <input
                  className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                  type="file"
                  name="Groom_Cannonical_Application"
                  // value={Groom_Baptismal_Certificate}
                  onChange={(e) =>
                    updateFields({
                      Groom_Cannonical_Application: e.target.files?.[0]?.name || "",
                    })
                  }
                  placeholder="Select file"
                />
                </div>
              </div>
              <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Cannonical Interview
              </label>
              <div className="relative bg-transparent dark:bg-form-input">
              <select value={Groom_Cannonical_Interview} onChange={e => updateFields({ Groom_Cannonical_Interview: e.target.value })} className="relative w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus-border-primary active-border-primary dark-border-form-strokedark dark-bg-form-input dark-focus-border-primary">
                <option value="Not complete">Not complete</option>
                <option value="Done">Done</option>
              </select>
                
                </div>
              </div>
              <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Id Picture
              </label>
              <div className="relative bg-transparent dark:bg-form-input">
              
                <input
                  className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                  type="file"
                  name="Groom_Id_Picture"
                 
                  onChange={(e) =>
                    updateFields({
                      Groom_Id_Picture: e.target.files?.[0]?.name || "",
                    })
                  }
                  placeholder="Select file"
                />
                </div>
              </div>
              <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Marriage Banns
              </label>
              <div className="relative bg-transparent dark:bg-form-input">
              
                <input
                  className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                  type="file"
                  name="Groom_Marriage_Banns"
                  // value={Groom_Baptismal_Certificate}
                  onChange={(e) =>
                    updateFields({
                      Groom_Marriage_Banns: e.target.files?.[0]?.name || "",
                    })
                  }
                  placeholder="Select file"
                />
                </div>
              </div>
              <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Banns Reply
              </label>
              <div className="relative bg-transparent dark:bg-form-input">
              
                <input
                  className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                  type="file"
                  name="Groom_Banns_Reply"
                  // value={Groom_Baptismal_Certificate}
                  onChange={(e) =>
                    updateFields({
                      Groom_Banns_Reply: e.target.files?.[0]?.name || "",
                    })
                  }
                  placeholder="Select file"
                />
                </div>
              </div>
              <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Pre Cana
              </label>
              <div className="relative bg-transparent dark:bg-form-input">
              
                <input
                  className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                  type="file"
                  name="Groom_Pre_Cana"
                  // value={Groom_Baptismal_Certificate}
                  onChange={(e) =>
                    updateFields({
                      Groom_Pre_Cana: e.target.files?.[0]?.name || "",
                    })
                  }
                  placeholder="Select file"
                />
                </div>
              </div>
              <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Marriage Contract
              </label>
              <div className="relative bg-transparent dark:bg-form-input">
              
              <input
                  className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                  type="file"
                  name="Groom_Marriage_Contract"
                  // value={Groom_Baptismal_Certificate}
                  onChange={(e) =>
                    updateFields({
                      Groom_Marriage_Contract: e.target.files?.[0]?.name || "",
                    })
                  }
                  placeholder="Select file"
                />
                </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </>
)
}

export default GroomUpdateClient