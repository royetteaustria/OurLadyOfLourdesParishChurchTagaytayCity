import mongoose from "mongoose";

const massSchema = mongoose.Schema (
    {
        date: {
            type: Date,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        // time: {
        //     type: String,
        //     required: true
        // },
        masstype: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
    },
    { 
        timestamps: true
      }
)

const massInquire = mongoose.model('MassInquire', massSchema);

export default massInquire