import "react-datepicker/dist/react-datepicker.css";

type BaptismalData = {
  start: Date | string;
  name: string;
  lname: string;
  email: string;
  dateofBirth: string;
  birthPlace: string;
  cellphoneNumber: string;
  currentAddress: string;
  fatherName: string;
  fatherBirthOfPlace: string;
  motherName: string;
  motherBirthOfPlace: string;
  marriedPlace: string;
  isCheckboxChecked: Boolean;
  baptismalType: string;
};

type BaptismalFormProps = BaptismalData & {
  updateFields: (fields: Partial<BaptismalData>) => void;
};

export function BaptismalForm({
  lname,
  email,
  name,
  dateofBirth,
  birthPlace,
  cellphoneNumber,
  currentAddress,
  fatherName,
  fatherBirthOfPlace,
  motherName,
  motherBirthOfPlace,
  marriedPlace,
  baptismalType,
  updateFields,
}: BaptismalFormProps) {
  
  const islname = lname.trim().length > 0;
  const isemail = email.trim().length > 0;
  const isname = name.trim().length > 0;
  const isdateofBirth = dateofBirth.trim().length > 0;
  const isbirthPlace = birthPlace.trim().length > 0;
  const iscellphoneNumber = cellphoneNumber.trim().length > 0;
  const iscurrentAddress = currentAddress.trim().length > 0;
  const isfatherName = fatherName.trim().length > 0;
  const isfatherBirthOfPlace = fatherBirthOfPlace.trim().length > 0;
  const ismotherName = motherName.trim().length > 0;
  const ismotherBirthOfPlace = motherBirthOfPlace.trim().length > 0;
  const ismarriedPlace = marriedPlace.trim().length > 0;
  const isbaptismalType = baptismalType.trim().length > 0;
  
  return (
    <>
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">
          Input the information below
        </h3>
      </div>
      <div className="p-6.5">
        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
          <div className="w-full xl:w-1/2">
            <label className="mb-2.5 block text-black dark:text-white">
              First name(Child to be baptized)
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => updateFields({ name: e.target.value })}
              placeholder="First name"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            {!isname && (
              <p className="text-danger mt-3 ml-2">First name is required</p>
            )}
          </div>
          <div className="w-full xl:w-1/2">
            <label className="mb-2.5 block text-black dark:text-white">
              Last name(Child to be baptized)
            </label>
            <input
              type="text"
              value={lname}
              onChange={(e) => updateFields({ lname: e.target.value })}
              placeholder="Last name"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            {!islname && (
              <p className="text-danger mt-3 ml-2">Last name is required</p>
            )}
            
          </div>
        </div>
        <div className="mb-4.5">
          <label className="mb-2.5 block text-black dark:text-white">
            Email <span className="text-meta-1">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => updateFields({ email: e.target.value })}
            placeholder="Enter your email address"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
          {!isemail && (
            <p className="text-danger mt-3 ml-2">Email is required</p>
          )}
        </div>
        <div className="mb-4.5">
          <label className="mb-2.5 block text-black dark:text-white">
            Cellphone number <span className="text-meta-1">*</span>
          </label>
          <input
            type="number"
            value={cellphoneNumber}
            onChange={(e) => updateFields({ cellphoneNumber: e.target.value })}
            placeholder="Number"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter text-black"
          />
        </div>
        {!iscellphoneNumber && (
          <p className="text-danger mt-3 ml-2">Cellphone number is required</p>
        )}
        <div className="mb-5.5">
          <label className="mb-3 block text-black dark:text-white">
            Date of Birth
          </label>
          <div className="relative">
            <input
              type="date"
              name="DateOfBirth"
              required
              value={dateofBirth}
              onChange={(e) => updateFields({ dateofBirth: e.target.value })}
              className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            />
            {!isdateofBirth && (
              <p className="text-danger mt-3 ml-2">Date of Birth is required</p>
            )}
          </div>
        </div>
        <div className="mb-4.5">
          <label className="mb-2.5 block text-black dark:text-white">
            Birth Place <span className="text-meta-1">*</span>
          </label>
          <input
            type="text"
            value={birthPlace}
            onChange={(e) => updateFields({ birthPlace: e.target.value })}
            placeholder="Birth Place"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
          {!isbirthPlace && (
            <p className="text-danger mt-3 ml-2">Birthplace is required</p>
          )}
          
        </div>
        <div className="mb-4.5">
          <label className="mb-2.5 block text-black dark:text-white">
            Current Address <span className="text-meta-1">*</span>
          </label>
          <input
            value={currentAddress}
            onChange={(e) => updateFields({ currentAddress: e.target.value })}
            type="text"
            placeholder="Address"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
          {!iscurrentAddress && (
            <p className="text-danger mt-3 ml-2">Address is required</p>
          )}
        </div>
        <div className="mb-4.5">
          <label className="mb-2.5 block text-black dark:text-white">
            Baptismal Type
          </label>
          <div className="relative bg-transparent dark:bg-form-input">
            <select
              value={baptismalType}
              onChange={(e) => updateFields({ baptismalType: e.target.value })}
              className="relative  w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus-border-primary"
            >
              <option value="Special">Special</option>
              <option value="Ordinary">Ordinary</option>
            </select>
            {!isbaptismalType && (
              <p className="text-danger mt-3 ml-2">
                Baptismal Type is required
              </p>
            )}
          </div>
          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Father Name <span className="italic">(First name, Middle name, Last name)</span>
            </label>
            <input
              value={fatherName}
              onChange={(e) => updateFields({ fatherName: e.target.value })}
              type="text"
              placeholder="Name"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            {!isfatherName && (
              <p className="text-danger mt-3 ml-2">Father name is required</p>
            )}
          </div>
          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Father birth of Place <span className="text-meta-1">*</span>
            </label>
            <input
              type="text"
              value={fatherBirthOfPlace}
              onChange={(e) =>
                updateFields({ fatherBirthOfPlace: e.target.value })
              }
              placeholder="Birthplace"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            {!isfatherBirthOfPlace && (
              <p className="text-danger mt-3 ml-2">This field is required</p>
            )}
          </div>
          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Mother Name(Maiden) <span className="italic">(First name, Middle name, Last name)</span>
            </label>
            <input
              type="text"
              value={motherName}
              onChange={(e) => updateFields({ motherName: e.target.value })}
              placeholder="Name"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            {!ismotherName && (
              <p className="text-danger mt-3 ml-2">Mother name is required</p>
            )}
          </div>
          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Mother birth of Place <span className="text-meta-1">*</span>
            </label>
            <input
              type="text"
              value={motherBirthOfPlace}
              onChange={(e) =>
                updateFields({ motherBirthOfPlace: e.target.value })
              }
              placeholder="Birthplace"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            {!ismotherBirthOfPlace && (
              <p className="text-danger mt-3 ml-2">This field is required</p>
            )}
          </div>
          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Place of married <span className="text-meta-1">*</span>
            </label>
            <input
              type="text"
              value={marriedPlace}
              onChange={(e) => updateFields({ marriedPlace: e.target.value })}
              placeholder="Place of married"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            {!ismarriedPlace && (
              <p className="text-danger mt-3 ml-2">This field is required</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
