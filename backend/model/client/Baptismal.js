import mongoose from "mongoose";

const ClientBaptismalSchema = mongoose.Schema(
  {
    start: {
      type: Date,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dateofBirth: {
      type: String,
      required: true,
    },
    birthPlace: {
      type: String,
      required: true,
    },
    cellphoneNumber: {
      type: String,
      required: true,
    },
    currentAddress: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    fatherBirthOfPlace: {
      type: String,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
    },
    motherBirthOfPlace: {
      type: String,
      required: true,
    },
    marriedPlace: {
      type: String,
    },
    status: {
      type: String,
      default: "Pending",
    },
    seminar: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const Binyag = mongoose.model("Client_Baptismal", ClientBaptismalSchema);

export default Binyag;
