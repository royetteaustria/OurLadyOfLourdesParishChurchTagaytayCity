import express from 'express'
import {
    listOfReservation,
    getReservation,
    addReservation,
    EditReservation,
    DeleteReservation,
    getAvailableDates,
    // updateReservationStatus
} from '../../controller/reservation/CalendarForReservation.js'

const router = express.Router()

router.get('/', listOfReservation)
router.get("/available-dates", getAvailableDates);
router.get('/:id', getReservation)
router.post('/add', addReservation)
router.put('/:id', EditReservation)
router.delete("/delete/:id", DeleteReservation)
// router.put("/update-status/:id", updateReservationStatus);
export default router