import express from 'express'
import { CreateReport,
    deleteReports,
    listReport,
    updateReports,
    GetSingleReport } from '../../controller/report/Report.js'

const router = express.Router();

router.post('/create', CreateReport)
router.get('/listofReport', listReport)
router.put('/updateReports', updateReports)
router.delete('/deleteReports/:id', deleteReports)
router.get('/:id', GetSingleReport)
export default router;