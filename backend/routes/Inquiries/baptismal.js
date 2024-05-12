import express from 'express'
import {
    CreateBaptismalInquiries,
    deletebaptismalInquiries,
    listbaptismalInquiries,
    getSingleInquire
} from '../../controller/inquiries/baptismalInquiriesController.js'

const router = express.Router();

router.get('/', listbaptismalInquiries)
router.get('/singleInquiries/:id', getSingleInquire)
router.post('/createInquiries', CreateBaptismalInquiries,)
router.delete('/reject/:id', deletebaptismalInquiries)

export default router;