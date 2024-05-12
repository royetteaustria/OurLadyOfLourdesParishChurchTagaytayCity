import express from 'express'
import { 
    CreateReservation,
    updateReservation,
    deleteReservation,
    listReservation,
    SingleDate
} from '../../controller/reservation/reservation.js'

const router = express.Router()

router.post('/createReservation', CreateReservation)
router.delete('/deleteReservation/:id', deleteReservation)
router.put('/updateReservation/:id', updateReservation)
router.get('/getReservation', listReservation)
router.get('/singleDate', SingleDate)

export default router;