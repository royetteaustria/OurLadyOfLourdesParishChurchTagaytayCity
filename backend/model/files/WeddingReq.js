import mongoose from "mongoose";

const WeddingReqSchema = mongoose.Schema({
  groomName: {
    type: String,
  },
  groomLastName: {
    type: String,
  },
  brideName: {
    type: String,
  },
  brideLastName: {
    type: String,
  },
  Groom_Baptismal_Certificate: {
    type: String,
  },
  Groom_Confirmation_Certificate: {
    type: String,
  },
  Groom_Birth_Certificate: {
    type: String,
  },
  Groom_CeNomar_Civil_Married: {
    type: String,
  },
  Groom_Cannonical_Application: {
    type: String,
  },
  Groom_Cannonical_Interview: {
    type: String,
  },
  Groom_Id_Picture: {
    type: String,
  },
  Groom_Marriage_Banns: {
    type: String,
  },
  Groom_Banns_Reply: {
    type: String,
  },
  Groom_Pre_Cana: {
    type: String,
  },
  Groom_Marriage_Contract: {
    type: String,
  },
  Bride_Baptismal_Certificate: {
    type: String,
  },
  Bride_Confirmation_Certificate: {
    type: String,
  },
  Bride_Birth_Certificate: {
    type: String,
  },
  Bride_CeNomar_Civil_Married: {
    type: String,
  },
  Bride_Cannonical_Application: {
    type: String,
  },
  Bride_Cannonical_Interview: {
    type: String,
  },
  Bride_Id_Picture: {
    type: String,
  },
  Bride_Marriage_Banns: {
    type: String,
  },
  Bride_Banns_Reply: {
    type: String,
  },
  Bride_Pre_Cana: {
    type: String,
  },
  Bride_Marriage_Contract: {
    type: String,
  },
  FirstPaymentReciept: {
    type: String,
  },
  SecondPaymentReciept: {
    type: String,
  },
});

const Wedding_requirements = mongoose.model(
  "Wedding_Requirements",
  WeddingReqSchema
);

export default Wedding_requirements;