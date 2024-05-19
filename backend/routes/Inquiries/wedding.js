import express from 'express'
import {
    CreateWeddingInquiries,
    listWeddingInquiries,
    deleteweddingInquiries,
    SingleInfo,
    singleSubmitForm
} from '../../controller/inquiries/weddingInquiriesController.js'

const router = express.Router();

router.post('/create', CreateWeddingInquiries)
router.get('/listWeddingInquiries', listWeddingInquiries)
router.delete('/reject/:id', deleteweddingInquiries)
router.put('/update/:start', singleSubmitForm)
router.get('/Info/:id', SingleInfo)
export default router;