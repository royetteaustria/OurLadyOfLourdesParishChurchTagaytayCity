import express from 'express'
import { createMasslClient,
    listMassClient,
    updateMassClient,
    getSingleClient
 } from '../../controller/Client/mass.js'

const router = express.Router()

router.post('/accept', createMasslClient)
router.get('/getAll', listMassClient)
router.put('/update/:id', updateMassClient)
router.get('/singleClient/:id', getSingleClient)

export default router;
