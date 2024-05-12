import mongoose from "mongoose";

const baptismalInquiriesSchema = mongoose.Schema(
    {
    dateofBaptismal: {
        type: String,
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
        required: true
        },
    baptismalType: {
        type: String,
        required: true
    },
    
    },
    { 
        timestamps: true
      }
)

const baptismalinquiries = mongoose.model('baptismalnquiries', baptismalInquiriesSchema);

export default baptismalinquiries