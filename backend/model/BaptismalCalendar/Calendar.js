import mongoose from "mongoose";

const BaptismalCalendar = new mongoose.Schema({
    start: {
        type: Date,
        required: [true, "Please Insert The Start of your event"],
        min: [new Date(), "can't be before now!!"],
        },
       end: {
        type: Date,
        min: [new Date(), "can't be before now!!"],
      },
    description: { 
        type: String, 
    },
    slot: { 
        type: Number,
        default: 5 
    },
    
})


const CalendarBaptismal = mongoose.model('CalendarReservationBaptismal', BaptismalCalendar)

export default CalendarBaptismal