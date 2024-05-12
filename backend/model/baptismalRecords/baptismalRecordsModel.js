import mongoose from "mongoose";

const baptismalrecordsSchema = mongoose.Schema (
    {
        dateofBaptismal: {
        type: String,
        required: true,
        },
        name: {
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
        required: true,
        },
        priestWhoBaptized: {
        type: String,
        required: true,
        },
        godMother: {
        type: [String],
        required: true,
        },
        godFather: {
        type: [String],
        required: true,
        },
    
    }
);

const baptismal_records = mongoose.model('baptismalRecords', baptismalrecordsSchema);

export default baptismal_records;