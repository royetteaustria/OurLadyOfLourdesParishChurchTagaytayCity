type OtherData = {
  paymentStatus: string,
  Groom_Pre_Cana: string,
  Groom_Cannonical_Interview: string,
  Bride_Pre_Cana: string,
  Bride_Cannonical_Interview: string,
  weddingStatus: string,
  groomlreadyBaptist: string,
  groomlreadyKumpil: string,
  bridealreadyBaptist: string,
  bridealreadyKumpil: string,
  PartialPaid: string,
  LastPaid: string
}

type OtherProps = OtherData & {
  updateFields: (fields: Partial<OtherData>) => void
}
export function Other ({
paymentStatus,
weddingStatus,
groomlreadyBaptist,
groomlreadyKumpil,
bridealreadyBaptist,
bridealreadyKumpil,
PartialPaid,
LastPaid,
updateFields
}: OtherProps) {
return (
<div className="mx-auto max-w-full">
<div className="grid grid-cols-1 gap-8">
  <div className="col-span-5 xl:col-span-3">
    <div className="rounded-sm   bg-white  dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
        <div className="mb-4.5">
        <div className='py-4 border-b mb-2 text-black dark:text-white font-semibold'>Other</div>
          <label className="mb-2.5 block text-black dark:text-white">
            Wedding Status
          </label>
          <div className="relative  bg-transparent dark:bg-form-input">
          <select value={weddingStatus} onChange={e => updateFields({ weddingStatus: e.target.value })} className="relative  w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus-border-primary active-border-primary dark-border-form-strokedark dark-bg-form-input dark-focus-border-primary">
            <option value="Pending">Pending</option>
            <option value="Cancel">Cancel</option>
            <option value="Complete">Complete</option>
          </select>
            
          </div>
          </div>
          <div className="mb-4.5">
        <div className='py-4 border-b mb-2 text-black dark:text-white font-semibold'></div>
          <label className="mb-2.5 block text-black dark:text-white">
            Payment Status
          </label>
          <div className="relative  bg-transparent dark:bg-form-input">
          <select value={paymentStatus} onChange={e => updateFields({ paymentStatus: e.target.value })} className="relative  w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus-border-primary active-border-primary dark-border-form-strokedark dark-bg-form-input dark-focus-border-primary">
            <option value="Unpaid">Unpaid</option>
            <option value="Partial Paid">Partial Paid</option>
            <option value="Fully Paid">Fully Paid</option>
          </select>
            
          </div>
          </div>
          <div className="mb-5.5 mt-2">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
              >
                Partial Paid Amount
              </label>
              <input
                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                type="text"
                placeholder="Amount"
                value={PartialPaid}
                required
                onChange={e => updateFields({ PartialPaid: e.target.value })}
              />
            </div>
            <div className="mb-5.5 mt-2">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
              >
                Last Paid Amount
              </label>
              <input
                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                type="text"
                placeholder="Amount"
                value={LastPaid}
                required
                onChange={e => updateFields({ LastPaid: e.target.value })}
              />
            </div>
          <div className="mb-4.5">
        <div className='py-4 border-b mb-2 text-black dark:text-white font-semibold'></div>
          <label className="mb-2.5 block text-black dark:text-white">
            Groom Already Baptized?
          </label>
          <div className="relative  bg-transparent dark:bg-form-input">
          <select value={groomlreadyBaptist} onChange={e => updateFields({ groomlreadyBaptist: e.target.value })} className="relative  w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus-border-primary active-border-primary dark-border-form-strokedark dark-bg-form-input dark-focus-border-primary">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
            
          </div>
          </div>
          <div className="mb-4.5">
        <div className='py-4 border-b mb-2 text-black dark:text-white font-semibold'></div>
          <label className="mb-2.5 block text-black dark:text-white">
            Groom Sacrament of Confirmation?
          </label>
          <div className="relative  bg-transparent dark:bg-form-input">
          <select value={groomlreadyKumpil} onChange={e => updateFields({ groomlreadyKumpil: e.target.value })} className="relative  w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus-border-primary active-border-primary dark-border-form-strokedark dark-bg-form-input dark-focus-border-primary">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
            
          </div>
          </div>

          <div className="mb-4.5">
        <div className='py-4 border-b mb-2 text-black dark:text-white font-semibold'></div>
          <label className="mb-2.5 block text-black dark:text-white">
            Bride Already Baptized?
          </label>
          <div className="relative  bg-transparent dark:bg-form-input">
          <select value={bridealreadyBaptist} onChange={e => updateFields({ bridealreadyBaptist: e.target.value })} className="relative  w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus-border-primary active-border-primary dark-border-form-strokedark dark-bg-form-input dark-focus-border-primary">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
            
          </div>
          </div>
          <div className="mb-4.5">
        <div className='py-4 border-b mb-2 text-black dark:text-white font-semibold'></div>
          <label className="mb-2.5 block text-black dark:text-white">
            Bride Sacrament of Confirmation?
          </label>
          <div className="relative  bg-transparent dark:bg-form-input">
          <select value={bridealreadyKumpil} onChange={e => updateFields({ bridealreadyKumpil: e.target.value })} className="relative  w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus-border-primary active-border-primary dark-border-form-strokedark dark-bg-form-input dark-focus-border-primary">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
            
          </div>
          </div>
      </div>
    </div>
  </div>
</div>
</div>
)
}

export default Other