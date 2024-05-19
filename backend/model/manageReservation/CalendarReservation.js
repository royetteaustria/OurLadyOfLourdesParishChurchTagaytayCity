import mongoose from "mongoose";

const CalendarSchema = new mongoose.Schema({
    start: {
        type: Date,
        unique: true,
        required: [true, "Please Insert The Start of your event"],
        min: [new Date(), "can't be before now!!"],
        
        },
        
       end: {
        type: Date,
        unique: true,
        min: [new Date(), "can't be before now!!"],
      },
    description: { 
        type: String, 
    },
    
})

const CalendarForReservation = mongoose.model('CalendarReservation', CalendarSchema)

export default CalendarForReservation