import express from 'express'
import {
    acceptWedidngClient,
    listWeddingClient,
    updateWeddingClient,
    getSingleClient,
    // updatedToAppointment
} from '../../controller/Client/wedding.js'

const router = express.Router();

router.post('/accept', acceptWedidngClient)
// router.put('/update/:start', updatedToAppointment)
router.get('/listOfClient', listWeddingClient)
router.put('/update/:id', updateWeddingClient)
router.get('/singleClient/:id', getSingleClient)
export default router;