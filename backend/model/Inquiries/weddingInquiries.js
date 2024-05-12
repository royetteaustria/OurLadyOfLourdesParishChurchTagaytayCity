import mongoose from "mongoose";

const weddingInquiriesSchema = mongoose.Schema(
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
    groomAge: {
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
    // groomBaptizedAt :{
    //     type: String,
    //     required: true,
    // },
    // groomAddress :{
    //     type: String,
    //     required: true,
    // },
    // groomNameOfParishChurch :{
    //     type: String,
    //     required: true,
    // },
    // groomaddressOfParishChurch :{
    //     type: String,
    //     required: true,
    // },
    // groomFatherName :{
    //     type: String,
    //     required: true,
    // },
    // groomMotherName :{
    //     type: String,
    //     required: true,
    // },
    // groomalreadyBaptist :{
    //     type: String,
    //     required: true,
    // },
    // groomalreadyKumpil :{
    //     type: String,
    //     required: true,
    // },

    brideName: {
      type: String,
      required: true,
    },
    brideAge: {
      type: String,
      required: true,
    },
    // brideBaptizedAt :{
    //     type: String,
    //     required: true,
    //     },
    // brideAddress :{
    //     type: String,
    //     required: true,
    //     },
    // brideNameOfParishChurch :{
    //     type: String,
    //     required: true,
    //     },
    // brideaddressOfParishChurch :{
    //     type: String,
    //     required: true,
    //     },
    // brideFatherName :{
    //     type: String,
    //     required: true,
    //     },
    // brideMotherName :{
    //     type: String,
    //     required: true,
    // },
    // bridealreadyBaptist :{
    //     type: String,
    //     required: true,
    // },
    // bridealreadyKumpil :{
    //     type: String,
    //     required: true,
    // },

    Brideemail: {
      type: String,
      required: true,
    },
    BridephoneNumber: {
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
    start: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const weddinginquiries = mongoose.model(
  "weddingInquiries",
  weddingInquiriesSchema
);

export default weddinginquiries;
