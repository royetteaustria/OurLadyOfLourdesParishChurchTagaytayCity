import mongoose from "mongoose";

const massClientSchema = mongoose.Schema (
    {
        date: {
            type: String,
            required: true
        },
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
        description: {
            type: String,
            default: 'Mass not be done'
        },
        status: {
            type: String,
            default: 'Pending'
        },
    },
    { 
        timestamps: true
      }
)

const massClient = mongoose.model('MassClient', massClientSchema);

export default massClient