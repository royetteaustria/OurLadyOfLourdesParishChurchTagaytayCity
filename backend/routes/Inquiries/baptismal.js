import express from 'express'
import {
    CreateBaptismalInquiries,
    deletebaptismalInquiries,
    listbaptismalInquiries,
    getSingleInquire,
    rejectBaptismalInquiry
} from '../../controller/inquiries/baptismalInquiriesController.js'

const router = express.Router();

router.get('/', listbaptismalInquiries)
router.get('/singleInquiries/:id', getSingleInquire)
router.delete('/reject/:id', rejectBaptismalInquiry)
router.post('/createInquiries', CreateBaptismalInquiries,)
router.delete('/delete/:id', deletebaptismalInquiries)

export default router;