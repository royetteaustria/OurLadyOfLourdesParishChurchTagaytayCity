import mongoose from "mongoose";

const weddingClientSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    groomName: {
      type: String,
      required: true,
    },
    groomLastName: {
      type: String,
      required: true,
    },
    groomMiddleName: {
      type: String,
      required: true,
    },
    groomAge: {
      type: String,
      required: true,
    },
    groomBaptizedAt: {
      type: String,
      required: true,
    },
    groomAddress: {
      type: String,
      required: true,
    },
    groomNameOfParishChurch: {
      type: String,
      required: true,
    },
    groomaddressOfParishChurch: {
      type: String,
      required: true,
    },
    groomFatherName: {
      type: String,
      required: true,
    },
    groomMotherName: {
      type: String,
      required: true,
    },
    groom_Cannonical_Interview :{
      type: String,
      default: 'Pending'
  },
    //certificates
    groomalreadyBaptist: {
      type: String,
      required: true,
    },
    groomalreadyKumpil: {
      type: String,
      required: true,
    },

    //bride
    brideName: {
      type: String,
      required: true,
    },
    brideLastName: {
      type: String,
      required: true,
    },
    brideMiddleName: {
      type: String,
      required: true,
    },
    brideAge: {
      type: String,
      required: true,
    },
    brideBaptizedAt: {
      type: String,
      required: true,
    },
    brideAddress: {
      type: String,
      required: true,
    },
    brideNameOfParishChurch: {
      type: String,
      required: true,
    },
    brideaddressOfParishChurch: {
      type: String,
      required: true,
    },
    brideFatherName: {
      type: String,
      required: true,
    },
    brideMotherName: {
      type: String,
      required: true,
    },
    Brideemail: {
      type: String,
      required: true,
    },
    BridephoneNumber: {
      type: String,
      required: true,
    },

    //certificates
    bridealreadyBaptist: {
      type: String,
      required: true,
    },
    bridealreadyKumpil: {
      type: String,
      required: true,
    },

    //bride requirements

    Bride_Cannonical_Interview :{
        type: String,
        default: 'Pending'
    },

    //status
    weddingStatus: {
      type: String,
      default: "Pending",
    },

    start: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const weddingClient = mongoose.model("weddingClient", weddingClientSchema);
export default weddingClient;
