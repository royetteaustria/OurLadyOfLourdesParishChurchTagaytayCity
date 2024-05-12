type BrideClientData = {
  Bride_Baptismal_Certificate: string, 
  Bride_Confirmation_Certificate: string,
  Bride_Birth_Certificate: string, 
  Bride_CeNomar_Civil_Married: string,
  Bride_Cannonical_Application: string,
  Bride_Cannonical_Interview: string, 
  Bride_Id_Picture: string, 
  Bride_Marriage_Banns: string,
  Bride_Banns_Reply: string,
  Bride_Pre_Cana: string, 
  Bride_Marriage_Contract: string,
}
type BrideClientProps = BrideClientData & {
  updateFields: (fields: Partial<BrideClientData>) => void
}

export function BrideUpdateClient ({
  Bride_Baptismal_Certificate, 
  Bride_Confirmation_Certificate,
  Bride_Birth_Certificate, 
  Bride_CeNomar_Civil_Married,
  Bride_Cannonical_Application,
  Bride_Cannonical_Interview, 
  Bride_Id_Picture, 
  Bride_Marriage_Banns,
  Bride_Banns_Reply,
  Bride_Pre_Cana, 
  Bride_Marriage_Contract,
  updateFields
}: BrideClientProps) {
return (
  <>
  <div className="mx-auto max-w-full">
    <div className="grid grid-cols-1 gap-8">
      <div className="col-span-5 xl:col-span-3">
        <div className="rounded-sm   bg-white  dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
            <div className="mb-4.5">
            <div className='py-6 border-b mb-2 text-black dark:text-white font-semibold'><h1>Bride Requirements</h1></div>
              <label className="mb-2.5 block text-black dark:text-white">
                Baptismal Certificate <span></span>
              </label>
              <div className="relative bg-transparent dark:bg-form-input">
              
                <input
                  className="border border-dashed border-primary  text-primary w-full p-4 text-center mb-2 justify-center"
                  type="file"
                  name="Bride_Baptismal_Certificate"
                  
                  onChange={(e) =>
                    updateFields({
                      Bride_Baptismal_Certificate: e.target.files?.[0]?.name || "",
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
                  name="Bride_Confirmation_Certificate"
                  onChange={(e) =>
                    updateFields({
                      Bride_Confirmation_Certificate: e.target.files?.[0]?.name || "",
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
                  name="Bride_Birth_Certificate"
                  
                  onChange={(e) =>
                    updateFields({
                      Bride_Birth_Certificate: e.target.files?.[0]?.name || "",
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
                  name="Bride_CeNomar_Civil_Married"
            
                  onChange={(e) =>
                    updateFields({
                      Bride_CeNomar_Civil_Married: e.target.files?.[0]?.name || "",
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
                  name="Bride_Cannonical_Application"
                  // value={Bride_Baptismal_Certificate}
                  onChange={(e) =>
                    updateFields({
                      Bride_Cannonical_Application: e.target.files?.[0]?.name || "",
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
              <select value={Bride_Cannonical_Interview} onChange={e => updateFields({ Bride_Cannonical_Interview: e.target.value })} className="relative w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus-border-primary active-border-primary dark-border-form-strokedark dark-bg-form-input dark-focus-border-primary">
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
                  name="Bride_Id_Picture"
                 
                  onChange={(e) =>
                    updateFields({
                      Bride_Id_Picture: e.target.files?.[0]?.name || "",
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
                  name="Bride_Marriage_Banns"
                  // value={Bride_Baptismal_Certificate}
                  onChange={(e) =>
                    updateFields({
                      Bride_Marriage_Banns: e.target.files?.[0]?.name || "",
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
                  name="Bride_Banns_Reply"
                  // value={Bride_Baptismal_Certificate}
                  onChange={(e) =>
                    updateFields({
                      Bride_Banns_Reply: e.target.files?.[0]?.name || "",
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
                  name="Bride_Pre_Cana"
                  // value={Bride_Baptismal_Certificate}
                  onChange={(e) =>
                    updateFields({
                      Bride_Pre_Cana: e.target.files?.[0]?.name || "",
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
                  name="Bride_Marriage_Contract"
                  // value={Bride_Baptismal_Certificate}
                  onChange={(e) =>
                    updateFields({
                      Bride_Marriage_Contract: e.target.files?.[0]?.name || "",
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

export default BrideUpdateClient