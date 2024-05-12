import express from 'express'
import {
    addBaptismalRecords,
    deletebaptismalRecords,
    updatebaptismalRecords,
    listBaptismalRecords,
    GetSingleRecord
} from '../../controller/baptismalrecords/baptismalRecordsController.js'


const router = express.Router();

router.post('/create', addBaptismalRecords)
router.get('/SingleUserUpdate/:id', GetSingleRecord)
router.get('/bapstismalRecordList', listBaptismalRecords)
router.put('/updateBaptismalRecords/:id', updatebaptismalRecords)
router.delete('/deletebaptismalRecords/:id', deletebaptismalRecords)

export default router;