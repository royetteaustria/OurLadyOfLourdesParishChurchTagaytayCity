import express from 'express'
import {CreateMassInquiries,
    deletemassInquiries,
    listmassInquiries,
    getSingleInquire } from '../../controller/inquiries/massInquiriesController.js'

const router = express.Router()

router.post('/create', CreateMassInquiries)
router.get('/listofInquire', listmassInquiries)
router.get('/Info/:id', getSingleInquire)
router.delete('/reject/:id', deletemassInquiries)

export default router;