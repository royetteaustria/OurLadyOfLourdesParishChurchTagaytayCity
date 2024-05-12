import mongoose from "mongoose";

const ReservationSchema = mongoose.Schema(
    {
        date: {
            type: String,
            required: true,
        },
        time: {
            type: [String],
            required: true,
        },
    }
)

const Reservation = mongoose.model('Manage_Reservation', ReservationSchema)

export default Reservation