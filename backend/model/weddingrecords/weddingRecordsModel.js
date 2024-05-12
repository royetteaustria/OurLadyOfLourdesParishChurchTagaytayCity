import mongoose from "mongoose";

const weddingRecordsSchema = mongoose.Schema(
    {
        groomName:{
            type: String,
            required: true,
        },
        groomMiddleName:{
            type: String,
            required: true,
        },
        groomLastName:{
            type: String,
            required: true,
        },
        groomBirth:{
            type: String,
            required: true,
        },
        groomPlaceofBirth:{
            type: String,
            required: true,
        },
        // groomSex:{
        //     type: String,
        //     required: true,
        // },
        groomCitezenship:{
            type: String,
            required: true,
        },
        groomResidence:{
            type: String,
            required: true,
        },
        groomReligion:{
            type: String,
            required: true,
        },
        groomCivilStatus:{
            type: String,
            required: true,
        },
        groomNameofFather:{
            type: String,
            required: true,
        },
        groomFatherCitezenship:{
            type: String,
            required: true,
        },
        groomNameofMother:{
            type: String,
            required: true,
        },
        groomMotherCitezenship:{
            type: String,
            required: true,
        },
        groomNameOfPersonWhoGaveConcent:{
            type: String,
            required: true,
        },
        groomNameOfPersonWhoGaveConcentRelationship:{
            type: String,
            required: true,
        },
        groomPersonWhoGaveConcentResidence:{
            type: String,
            required: true,
        },

        //bride
        brideName:{
            type: String,
            required: true,
        },
        brideMiddleName:{
            type: String,
            required: true,
        },
        brideLastName:{
            type: String,
            required: true,
        },
        brideBirth:{
            type: String,
            required: true,
        },
        bridePlaceofBirth:{
            type: String,
            required: true,
        },
        // brideSex:{
        //     type: String,
        //     required: true,
        // },
        brideCitezenship:{
            type: String,
            required: true,
        },
        brideResidence:{
            type: String,
            required: true,
        },
        brideReligion:{
            type: String,
            required: true,
        },
        brideCivilStatus:{
            type: String,
            required: true,
        },
        brideNameofFather:{
            type: String,
            required: true,
        },
        brideFatherCitezenship:{
            type: String,
            required: true,
        },
        brideNameofMother:{
            type: String,
            required: true,
        },
        brideMotherCitezenship:{
            type: String,
            required: true,
        },
        brideNameOfPersonWhoGaveConcent:{
            type: String,
            required: true,
        },
        brideNameOfPersonWhoGaveConcentRelationship:{
            type: String,
            required: true,
        },
        bridePersonWhoGaveConcentResidence:{
            type: String,
            required: true,
        },

        //other info
        RegistryNo: {
            type: String,
            required: true,
        },
        Province: {
            type: String,
            required: true,
        },
        City_Municipality: {
            type: String,
            required: true,
        },
        placeOfMarriage: {
            type: String,
            required: true,
        },
        dateOfMarriage: {
            type: String,
            required: true,
        },
        timeOfMarriage: {
            type: String,
            required: true,
        },
        priestWhoMarried: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const wedding_Records = mongoose.model('weddingRecords', weddingRecordsSchema);

export default wedding_Records