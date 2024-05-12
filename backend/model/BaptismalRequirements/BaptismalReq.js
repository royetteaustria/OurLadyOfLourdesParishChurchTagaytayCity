import mongoose from "mongoose";

const BaptismalReqSchema = mongoose.Schema({
    name: {
        type: String,
    },
    lname: {
        type: String,
    },
    birthCertificate: {
        type: String,
    },
    MarriageContract: {
        type: String,
    },
    FatherBaptismalCerticate: {
      type: String,
    },
    MotherBaptismalCerticate: {
        type: String,
      },
      ParishPermit: {
        type: String,
      },
  });
  
  const Baptismal_requirements = mongoose.model(
    "Baptismal_Requirements",
    BaptismalReqSchema
  );
  
  export default Baptismal_requirements;