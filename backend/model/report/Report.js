import mongoose from "mongoose";

const ReportSchema = mongoose.Schema(
    {
        GroomName: {
            type: String,
            // required: true
        },
        GroomLastName: {
            type: String,
            // required: true
        },
        BrideName: {
            type: String,
            // required: true
        },
        BrideLastname: {
            type: String,
            // required: true
        },
        DateOfWedding: {
            type: String,
            // required: true
        },
        // Rites: {
        //     type: String,
        //     // required: true
        // },
        // GuestPriest: {
        //     type: String,
        //     // required: true
        // },
    }
)

const Report = mongoose.model('Reports', ReportSchema)

export default Report
