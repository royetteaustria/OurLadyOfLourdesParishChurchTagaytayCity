import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type BaptismalData = {
  dateofBaptismal: Date | null;
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
  baptismalType: string;
};

type BaptismalFormProps = BaptismalData & {
  updateFields: (fields: Partial<BaptismalData>) => void;
};

export function BaptismalForm({
  dateofBaptismal,
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
  const isNotMonday = (date : Date) => {
    const day = date.getDay();
    return day !== 1; // 1 represents Monday
  };
  const hasnameAndLastname = name.trim().length > 0 && lname.trim().length > 0;
  const isNameSameAslName = hasnameAndLastname && name.trim() === lname.trim();

  const hasnameAndbirthPlace =
    name.trim().length > 0 && birthPlace.trim().length > 0;
  const isNameSameAsbirthPlace =
    hasnameAndbirthPlace && name.trim() === birthPlace.trim();

  const hasnameAndcurrentAddress =
    name.trim().length > 0 && currentAddress.trim().length > 0;
  const isNameSameAscurrentAddress =
    hasnameAndcurrentAddress && name.trim() === currentAddress.trim();

  const hasnameAndfatherName =
    name.trim().length > 0 && fatherName.trim().length > 0;
  const isNameSameAsfatherName =
    hasnameAndfatherName && name.trim() === fatherName.trim();

  const hasnameAndfatherBirthOfPlace =
    name.trim().length > 0 && fatherBirthOfPlace.trim().length > 0;
  const isNameSameAsfatherBirthOfPlace =
    hasnameAndfatherBirthOfPlace && name.trim() === fatherBirthOfPlace.trim();

  const hasnameAndmotherName =
    name.trim().length > 0 && motherName.trim().length > 0;
  const isNameSameAsmotherName =
    hasnameAndmotherName && name.trim() === motherName.trim();

  const hasnameAndmotherBirthOfPlace =
    name.trim().length > 0 && motherBirthOfPlace.trim().length > 0;
  const isNameSameAsmotherBirthOfPlace =
    hasnameAndmotherBirthOfPlace && name.trim() === motherBirthOfPlace.trim();

  const hasnameAndmarriedPlace =
    name.trim().length > 0 && marriedPlace.trim().length > 0;
  const isNameSameAsmarriedPlace =
    hasnameAndmarriedPlace && name.trim() === marriedPlace.trim();

  const haslnameAndName = lname.trim().length > 0 && name.trim().length > 0;
  const islnameSameAsName = haslnameAndName && lname.trim() === name.trim();

  const haslnameAndbirthPlace =
    lname.trim().length > 0 && birthPlace.trim().length > 0;
  const islnameSameAsbirthPlace =
    haslnameAndbirthPlace && lname.trim() === birthPlace.trim();

  const haslnameAndcurrentAddress =
    lname.trim().length > 0 && currentAddress.trim().length > 0;
  const islnameSameAscurrentAddress =
    haslnameAndcurrentAddress && lname.trim() === currentAddress.trim();

  const haslnameAndfatherName =
    lname.trim().length > 0 && fatherName.trim().length > 0;
  const islnameSameAsfatherName =
    haslnameAndfatherName && lname.trim() === fatherName.trim();

  const haslnameAndfatherBirthOfPlace =
    lname.trim().length > 0 && fatherBirthOfPlace.trim().length > 0;
  const islnameSameAsfatherBirthOfPlace =
    haslnameAndfatherBirthOfPlace && lname.trim() === fatherBirthOfPlace.trim();

  const haslnameAndmotherName =
    lname.trim().length > 0 && motherName.trim().length > 0;
  const islnameSameAsmotherName =
    haslnameAndmotherName && lname.trim() === motherName.trim();

  const haslnameAndmotherBirthOfPlace =
    lname.trim().length > 0 && motherBirthOfPlace.trim().length > 0;
  const islnameSameAsmotherBirthOfPlace =
    haslnameAndmotherBirthOfPlace && lname.trim() === motherBirthOfPlace.trim();

  const haslnameAndmarriedPlace =
    lname.trim().length > 0 && marriedPlace.trim().length > 0;
  const islnameSameAsmarriedPlace =
    haslnameAndmarriedPlace && lname.trim() === marriedPlace.trim();

  const hasbirthPlaceAndName =
    birthPlace.trim().length > 0 && name.trim().length > 0;
  const isbirthPlaceSameAsName =
    hasbirthPlaceAndName && birthPlace.trim() === name.trim();

  const hasbirthPlaceAndlname =
    birthPlace.trim().length > 0 && lname.trim().length > 0;
  const isbirthPlaceSameAslname =
    hasbirthPlaceAndlname && birthPlace.trim() === lname.trim();

  const hasbirthPlaceAndfatherName =
    birthPlace.trim().length > 0 && fatherName.trim().length > 0;
  const isbirthPlaceSameAsfatherName =
    hasbirthPlaceAndfatherName && birthPlace.trim() === fatherName.trim();

  const hasbirthPlaceAndfatherBirthOfPlace =
    birthPlace.trim().length > 0 && fatherBirthOfPlace.trim().length > 0;
  const isbirthPlaceSameAsfatherBirthOfPlace =
    hasbirthPlaceAndfatherBirthOfPlace &&
    birthPlace.trim() === fatherBirthOfPlace.trim();

  const hasbirthPlaceAndmotherName =
    birthPlace.trim().length > 0 && motherName.trim().length > 0;
  const isbirthPlaceSameAsmotherName =
    hasbirthPlaceAndmotherName && birthPlace.trim() === motherName.trim();

  const hasbirthPlaceAndmotherBirthOfPlace =
    birthPlace.trim().length > 0 && motherBirthOfPlace.trim().length > 0;
  const isbirthPlaceSameAsmotherBirthOfPlace =
    hasbirthPlaceAndmotherBirthOfPlace &&
    birthPlace.trim() === motherBirthOfPlace.trim();

  const hasbirthPlaceAndmarriedPlace =
    birthPlace.trim().length > 0 && marriedPlace.trim().length > 0;
  const isbirthPlaceSameAsmarriedPlace =
    hasbirthPlaceAndmarriedPlace && birthPlace.trim() === marriedPlace.trim();

  const hascurrentAddressAndName =
    currentAddress.trim().length > 0 && name.trim().length > 0;
  const iscurrentAddressSameAsName =
    hascurrentAddressAndName && currentAddress.trim() === name.trim();

  const hascurrentAddressAndlname =
    currentAddress.trim().length > 0 && lname.trim().length > 0;
  const iscurrentAddressSameAslname =
    hascurrentAddressAndlname && currentAddress.trim() === lname.trim();

  const hascurrentAddressAndbirthPlace =
    currentAddress.trim().length > 0 && birthPlace.trim().length > 0;
  const iscurrentAddressSameAsbirthPlace =
    hascurrentAddressAndbirthPlace &&
    currentAddress.trim() === birthPlace.trim();

  const hascurrentAddressAndfatherName =
    currentAddress.trim().length > 0 && fatherName.trim().length > 0;
  const iscurrentAddressSameAsfatherName =
    hascurrentAddressAndfatherName &&
    currentAddress.trim() === fatherName.trim();

  const hascurrentAddressAndmotherName =
    currentAddress.trim().length > 0 && motherName.trim().length > 0;
  const iscurrentAddressSameAsmotherName =
    hascurrentAddressAndmotherName &&
    currentAddress.trim() === motherName.trim();

  const hascurrentAddressAndmarriedPlace =
    currentAddress.trim().length > 0 && marriedPlace.trim().length > 0;
  const iscurrentAddressSameAsmarriedPlace =
    hascurrentAddressAndmarriedPlace &&
    currentAddress.trim() === marriedPlace.trim();

  // For fatherName
  const hasfatherNameAndName =
    fatherName.trim().length > 0 && name.trim().length > 0;
  const isfatherNameSameAsName =
    hasfatherNameAndName && fatherName.trim() === name.trim();

  const hasfatherNameAndlname =
    fatherName.trim().length > 0 && lname.trim().length > 0;
  const isfatherNameSameAslname =
    hasfatherNameAndlname && fatherName.trim() === lname.trim();

  const hasfatherNameAndbirthPlace =
    fatherName.trim().length > 0 && birthPlace.trim().length > 0;
  const isfatherNameSameAsbirthPlace =
    hasfatherNameAndbirthPlace && fatherName.trim() === birthPlace.trim();

  const hasfatherNameAndcurrentAddress =
    fatherName.trim().length > 0 && currentAddress.trim().length > 0;
  const isfatherNameSameAscurrentAddress =
    hasfatherNameAndcurrentAddress &&
    fatherName.trim() === currentAddress.trim();

  const hasfatherNameAndfatherBirthOfPlace =
    fatherName.trim().length > 0 && fatherBirthOfPlace.trim().length > 0;
  const isfatherNameSameAsfatherBirthOfPlace =
    hasfatherNameAndfatherBirthOfPlace &&
    fatherName.trim() === fatherBirthOfPlace.trim();

  const hasfatherNameAndmotherName =
    fatherName.trim().length > 0 && motherName.trim().length > 0;
  const isfatherNameSameAsmotherName =
    hasfatherNameAndmotherName && fatherName.trim() === motherName.trim();

  const hasfatherNameAndmotherBirthOfPlace =
    fatherName.trim().length > 0 && motherBirthOfPlace.trim().length > 0;
  const isfatherNameSameAsmotherBirthOfPlace =
    hasfatherNameAndmotherBirthOfPlace &&
    fatherName.trim() === motherBirthOfPlace.trim();

  const hasfatherNameAndmarriedPlace =
    fatherName.trim().length > 0 && marriedPlace.trim().length > 0;
  const isfatherNameSameAsmarriedPlace =
    hasfatherNameAndmarriedPlace && fatherName.trim() === marriedPlace.trim();

  // For fatherBirthOfPlace
  const hasfatherBirthOfPlaceAndName =
    fatherBirthOfPlace.trim().length > 0 && name.trim().length > 0;
  const isfatherBirthOfPlaceSameAsName =
    hasfatherBirthOfPlaceAndName && fatherBirthOfPlace.trim() === name.trim();

  const hasfatherBirthOfPlaceAndlname =
    fatherBirthOfPlace.trim().length > 0 && lname.trim().length > 0;
  const isfatherBirthOfPlaceSameAslname =
    hasfatherBirthOfPlaceAndlname && fatherBirthOfPlace.trim() === lname.trim();

  const hasfatherBirthOfPlaceAndbirthPlace =
    fatherBirthOfPlace.trim().length > 0 && birthPlace.trim().length > 0;
  const isfatherBirthOfPlaceSameAsbirthPlace =
    hasfatherBirthOfPlaceAndbirthPlace &&
    fatherBirthOfPlace.trim() === birthPlace.trim();

  const hasfatherBirthOfPlaceAndcurrentAddress =
    fatherBirthOfPlace.trim().length > 0 && currentAddress.trim().length > 0;
  const isfatherBirthOfPlaceSameAscurrentAddress =
    hasfatherBirthOfPlaceAndcurrentAddress &&
    fatherBirthOfPlace.trim() === currentAddress.trim();

  const hasfatherBirthOfPlaceAndfatherName =
    fatherBirthOfPlace.trim().length > 0 && fatherName.trim().length > 0;
  const isfatherBirthOfPlaceSameAsfatherName =
    hasfatherBirthOfPlaceAndfatherName &&
    fatherBirthOfPlace.trim() === fatherName.trim();

  const hasfatherBirthOfPlaceAndmotherName =
    fatherBirthOfPlace.trim().length > 0 && motherName.trim().length > 0;
  const isfatherBirthOfPlaceSameAsmotherName =
    hasfatherBirthOfPlaceAndmotherName &&
    fatherBirthOfPlace.trim() === motherName.trim();

  const hasfatherBirthOfPlaceAndmarriedPlace =
    fatherBirthOfPlace.trim().length > 0 && marriedPlace.trim().length > 0;
  const isfatherBirthOfPlaceSameAsmarriedPlace =
    hasfatherBirthOfPlaceAndmarriedPlace &&
    fatherBirthOfPlace.trim() === marriedPlace.trim();

  // For motherName
  const hasmotherNameAndName =
    motherName.trim().length > 0 && name.trim().length > 0;
  const ismotherNameSameAsName =
    hasmotherNameAndName && motherName.trim() === name.trim();

  const hasmotherNameAndlname =
    motherName.trim().length > 0 && lname.trim().length > 0;
  const ismotherNameSameAslname =
    hasmotherNameAndlname && motherName.trim() === lname.trim();

  const hasmotherNameAndbirthPlace =
    motherName.trim().length > 0 && birthPlace.trim().length > 0;
  const ismotherNameSameAsbirthPlace =
    hasmotherNameAndbirthPlace && motherName.trim() === birthPlace.trim();

  const hasmotherNameAndcurrentAddress =
    motherName.trim().length > 0 && currentAddress.trim().length > 0;
  const ismotherNameSameAscurrentAddress =
    hasmotherNameAndcurrentAddress &&
    motherName.trim() === currentAddress.trim();

  const hasmotherNameAndfatherName =
    motherName.trim().length > 0 && fatherName.trim().length > 0;
  const ismotherNameSameAsfatherName =
    hasmotherNameAndfatherName && motherName.trim() === fatherName.trim();

  const hasmotherNameAndfatherBirthOfPlace =
    motherName.trim().length > 0 && fatherBirthOfPlace.trim().length > 0;
  const ismotherNameSameAsfatherBirthOfPlace =
    hasmotherNameAndfatherBirthOfPlace &&
    motherName.trim() === fatherBirthOfPlace.trim();

  const hasmotherNameAndmotherBirthOfPlace =
    motherName.trim().length > 0 && motherBirthOfPlace.trim().length > 0;
  const ismotherNameSameAsmotherBirthOfPlace =
    hasmotherNameAndmotherBirthOfPlace &&
    motherName.trim() === motherBirthOfPlace.trim();

  const hasmotherNameAndmarriedPlace =
    motherName.trim().length > 0 && marriedPlace.trim().length > 0;
  const ismotherNameSameAsmarriedPlace =
    hasmotherNameAndmarriedPlace && motherName.trim() === marriedPlace.trim();

  // For motherBirthOfPlace
  const hasmotherBirthOfPlaceAndName =
    motherBirthOfPlace.trim().length > 0 && name.trim().length > 0;
  const ismotherBirthOfPlaceSameAsName =
    hasmotherBirthOfPlaceAndName && motherBirthOfPlace.trim() === name.trim();

  const hasmotherBirthOfPlaceAndlname =
    motherBirthOfPlace.trim().length > 0 && lname.trim().length > 0;
  const ismotherBirthOfPlaceSameAslname =
    hasmotherBirthOfPlaceAndlname && motherBirthOfPlace.trim() === lname.trim();

  const hasmotherBirthOfPlaceAndbirthPlace =
    motherBirthOfPlace.trim().length > 0 && birthPlace.trim().length > 0;
  const ismotherBirthOfPlaceSameAsbirthPlace =
    hasmotherBirthOfPlaceAndbirthPlace &&
    motherBirthOfPlace.trim() === birthPlace.trim();

  const hasmotherBirthOfPlaceAndcurrentAddress =
    motherBirthOfPlace.trim().length > 0 && currentAddress.trim().length > 0;
  const ismotherBirthOfPlaceSameAscurrentAddress =
    hasmotherBirthOfPlaceAndcurrentAddress &&
    motherBirthOfPlace.trim() === currentAddress.trim();

  const hasmotherBirthOfPlaceAndfatherName =
    motherBirthOfPlace.trim().length > 0 && fatherName.trim().length > 0;
  const ismotherBirthOfPlaceSameAsfatherName =
    hasmotherBirthOfPlaceAndfatherName &&
    motherBirthOfPlace.trim() === fatherName.trim();

  const hasmotherBirthOfPlaceAndfatherBirthOfPlace =
    motherBirthOfPlace.trim().length > 0 &&
    fatherBirthOfPlace.trim().length > 0;
  const ismotherBirthOfPlaceSameAsfatherBirthOfPlace =
    hasmotherBirthOfPlaceAndfatherBirthOfPlace &&
    motherBirthOfPlace.trim() === fatherBirthOfPlace.trim();

  const hasmotherBirthOfPlaceAndmotherName =
    motherBirthOfPlace.trim().length > 0 && motherName.trim().length > 0;
  const ismotherBirthOfPlaceSameAsmotherName =
    hasmotherBirthOfPlaceAndmotherName &&
    motherBirthOfPlace.trim() === motherName.trim();

  const hasmotherBirthOfPlaceAndmarriedPlace =
    motherBirthOfPlace.trim().length > 0 && marriedPlace.trim().length > 0;
  const ismotherBirthOfPlaceSameAsmarriedPlace =
    hasmotherBirthOfPlaceAndmarriedPlace &&
    motherBirthOfPlace.trim() === marriedPlace.trim();

  // For marriedPlace
  const hasmarriedPlaceAndName =
    marriedPlace.trim().length > 0 && name.trim().length > 0;
  const ismarriedPlaceSameAsName =
    hasmarriedPlaceAndName && marriedPlace.trim() === name.trim();

  const hasmarriedPlaceAndlname =
    marriedPlace.trim().length > 0 && lname.trim().length > 0;
  const ismarriedPlaceSameAslname =
    hasmarriedPlaceAndlname && marriedPlace.trim() === lname.trim();

  const hasmarriedPlaceAndbirthPlace =
    marriedPlace.trim().length > 0 && birthPlace.trim().length > 0;
  const ismarriedPlaceSameAsbirthPlace =
    hasmarriedPlaceAndbirthPlace && marriedPlace.trim() === birthPlace.trim();

  const hasmarriedPlaceAndcurrentAddress =
    marriedPlace.trim().length > 0 && currentAddress.trim().length > 0;
  const ismarriedPlaceSameAscurrentAddress =
    hasmarriedPlaceAndcurrentAddress &&
    marriedPlace.trim() === currentAddress.trim();

  const hasmarriedPlaceAndfatherName =
    marriedPlace.trim().length > 0 && fatherName.trim().length > 0;
  const ismarriedPlaceSameAsfatherName =
    hasmarriedPlaceAndfatherName && marriedPlace.trim() === fatherName.trim();

  const hasmarriedPlaceAndfatherBirthOfPlace =
    marriedPlace.trim().length > 0 && fatherBirthOfPlace.trim().length > 0;
  const ismarriedPlaceSameAsfatherBirthOfPlace =
    hasmarriedPlaceAndfatherBirthOfPlace &&
    marriedPlace.trim() === fatherBirthOfPlace.trim();

  const hasmarriedPlaceAndmotherName =
    marriedPlace.trim().length > 0 && motherName.trim().length > 0;
  const ismarriedPlaceSameAsmotherName =
    hasmarriedPlaceAndmotherName && marriedPlace.trim() === motherName.trim();

  const hasmarriedPlaceAndmotherBirthOfPlace =
    marriedPlace.trim().length > 0 && motherBirthOfPlace.trim().length > 0;
  const ismarriedPlaceSameAsmotherBirthOfPlace =
    hasmarriedPlaceAndmotherBirthOfPlace &&
    marriedPlace.trim() === motherBirthOfPlace.trim();
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
            {isNameSameAslName && (
              <p className="text-danger mt-3 ml-2">
                Name and Last name cannot be the same
              </p>
            )}
            {isNameSameAsbirthPlace && (
              <p className="text-danger mt-3 ml-2">
                Name and Birth Place cannot be the same
              </p>
            )}
            {isNameSameAscurrentAddress && (
              <p className="text-danger mt-3 ml-2">
                Name and Current Address cannot be the same
              </p>
            )}
            {isNameSameAsfatherName && (
              <p className="text-danger mt-3 ml-2">
                Name and Father Name cannot be the same
              </p>
            )}
            {isNameSameAsfatherBirthOfPlace && (
              <p className="text-danger mt-3 ml-2">
                Name and Father Birth Of Place cannot be the same
              </p>
            )}
            {isNameSameAsmotherName && (
              <p className="text-danger mt-3 ml-2">
                Name and Mother Name cannot be the same
              </p>
            )}
            {isNameSameAsmotherBirthOfPlace && (
              <p className="text-danger mt-3 ml-2">
                Name and Mother Birth Of Place cannot be the same
              </p>
            )}
            {isNameSameAsmarriedPlace && (
              <p className="text-danger mt-3 ml-2">
                Name and Married Place cannot be the same
              </p>
            )}
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
            {islnameSameAsName && (
              <p className="text-danger mt-3 ml-2">
                Last Name and Name cannot be the same
              </p>
            )}
            {!islname && (
              <p className="text-danger mt-3 ml-2">Last name is required</p>
            )}
            {islnameSameAsbirthPlace && (
              <p className="text-danger mt-3 ml-2">
                Last Name and Birth Place cannot be the same
              </p>
            )}
            {islnameSameAscurrentAddress && (
              <p className="text-danger mt-3 ml-2">
                Last Name and Current Address cannot be the same
              </p>
            )}
            {islnameSameAsfatherName && (
              <p className="text-danger mt-3 ml-2">
                Last Name and Father Name cannot be the same
              </p>
            )}
            {islnameSameAsfatherBirthOfPlace && (
              <p className="text-danger mt-3 ml-2">
                Last Name and Father Birth Of Place cannot be the same
              </p>
            )}
            {islnameSameAsmotherName && (
              <p className="text-danger mt-3 ml-2">
                Last Name and Mother Name cannot be the same
              </p>
            )}
            {islnameSameAsmotherBirthOfPlace && (
              <p className="text-danger mt-3 ml-2">
                Last Name and Mother Birth Of Place cannot be the same
              </p>
            )}
            {islnameSameAsmarriedPlace && (
              <p className="text-danger mt-3 ml-2">
                Last Name and Married Place cannot be the same
              </p>
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
          {isbirthPlaceSameAsName && (
            <p className="text-danger mt-3 ml-2">
              Birth Place and Name cannot be the same
            </p>
          )}
          {isbirthPlaceSameAslname && (
            <p className="text-danger mt-3 ml-2">
              Birth Place and Last Name cannot be the same
            </p>
          )}

          {isbirthPlaceSameAsfatherName && (
            <p className="text-danger mt-3 ml-2">
              Birth Place and Father Name cannot be the same
            </p>
          )}
          {isbirthPlaceSameAsfatherBirthOfPlace && (
            <p className="text-danger mt-3 ml-2">
              Birth Place and Father Birth Of Place cannot be the same
            </p>
          )}
          {isbirthPlaceSameAsmotherName && (
            <p className="text-danger mt-3 ml-2">
              Birth Place and Mother Name cannot be the same
            </p>
          )}
          {isbirthPlaceSameAsmotherBirthOfPlace && (
            <p className="text-danger mt-3 ml-2">
              Birth Place and Mother Birth Of Place cannot be the same
            </p>
          )}
          {isbirthPlaceSameAsmarriedPlace && (
            <p className="text-danger mt-3 ml-2">
              Birth Place and Married Place cannot be the same
            </p>
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
          {iscurrentAddressSameAsName && (
            <p className="text-danger mt-3 ml-2">
              Current Address and Name cannot be the same
            </p>
          )}
          {iscurrentAddressSameAslname && (
            <p className="text-danger mt-3 ml-2">
              Current Address and Last Name cannot be the same
            </p>
          )}
          {iscurrentAddressSameAsbirthPlace && (
            <p className="text-danger mt-3 ml-2">
              Current Address and Birth Place cannot be the same
            </p>
          )}
          {iscurrentAddressSameAsfatherName && (
            <p className="text-danger mt-3 ml-2">
              Current Address and Father Name cannot be the same
            </p>
          )}

          {iscurrentAddressSameAsmotherName && (
            <p className="text-danger mt-3 ml-2">
              Current Address and Mother Name cannot be the same
            </p>
          )}

          {iscurrentAddressSameAsmarriedPlace && (
            <p className="text-danger mt-3 ml-2">
              Current Address and Married Place cannot be the same
            </p>
          )}
        </div>
        <div className="mb-5.5">
          <label className="mb-3 block text-black dark:text-white">
            Date of Baptismal
          </label>
          <div className="relative">
          <ReactDatePicker
          className="ring-1 text-lg font-medium text-black w-full"
          placeholderText="Select date"
          selected={dateofBaptismal}
          onChange={(date: Date | null) => updateFields({ dateofBaptismal: date || undefined })}
          showTimeSelect
                      timeIntervals={60}
                      timeCaption="Time"
                      timeFormat="h:mm aa"
                      dateFormat="MMMM d, yyyy h:mm aa"
                      minTime={new Date(0, 0, 0, 8, 0, 0)} // 6:00 AM
                      maxTime={new Date(0, 0, 0, 10, 0, 0)} // 5:00 PM
                      filterDate={isNotMonday}
        />


          </div>
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
            {isfatherNameSameAsName && (
              <p className="text-danger mt-3 ml-2">
                Father Name and Name cannot be the same
              </p>
            )}
            {isfatherNameSameAslname && (
              <p className="text-danger mt-3 ml-2">
                Father Name and Last Name cannot be the same
              </p>
            )}
            {isfatherNameSameAsbirthPlace && (
              <p className="text-danger mt-3 ml-2">
                Father Name and Birth Place cannot be the same
              </p>
            )}
            {isfatherNameSameAscurrentAddress && (
              <p className="text-danger mt-3 ml-2">
                Father Name and Father Name cannot be the same
              </p>
            )}
            {isfatherNameSameAsfatherBirthOfPlace && (
              <p className="text-danger mt-3 ml-2">
                Father Name and Father Birth Of Place cannot be the same
              </p>
            )}
            {isfatherNameSameAsmotherName && (
              <p className="text-danger mt-3 ml-2">
                Father Name and Mother Name cannot be the same
              </p>
            )}
            {isfatherNameSameAsmotherBirthOfPlace && (
              <p className="text-danger mt-3 ml-2">
                Father Name and Mother Birth Of Place cannot be the same
              </p>
            )}
            {isfatherNameSameAsmarriedPlace && (
              <p className="text-danger mt-3 ml-2">
                Father Name and Married Place cannot be the same
              </p>
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
