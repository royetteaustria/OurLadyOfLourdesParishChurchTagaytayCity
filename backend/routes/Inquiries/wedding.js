import express from 'express'
import {
    CreateWeddingInquiries,
    listWeddingInquiries,
    rejectweddingInquiries,
    SingleInfo,
    singleSubmitForm,
    UpdateBaptismal,
    UpdateWedding,
    deleteWeddingInquiries

} from '../../controller/inquiries/weddingInquiriesController.js'

const router = express.Router();

router.post('/create', CreateWeddingInquiries)
router.get('/listWeddingInquiries', listWeddingInquiries)
router.delete('/reject/:id', rejectweddingInquiries)
router.delete('/delete/:id', deleteWeddingInquiries)
router.put('/update/:start', singleSubmitForm)
router.put('/UpdateBaptismal/:start', UpdateBaptismal)
router.put('/UpdateWedding/:start', UpdateWedding)
router.get('/Info/:id', SingleInfo)
export default router;