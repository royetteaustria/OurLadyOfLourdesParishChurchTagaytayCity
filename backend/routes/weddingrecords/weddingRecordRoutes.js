import express from 'express'
import {addWeddingRecords,
        deleteweddingRecords,
        listWeddingRecords,
        updateweddingRecords,
        UpdateSingleRecord  } from '../../controller/weddingRecords/weddingRecordsController.js';

const router = express.Router();

router.post('/create', addWeddingRecords)
router.delete('/deleteRecords/:id', deleteweddingRecords)
router.get('/weddingRecordsList', listWeddingRecords)
router.get('/SingleUser/:id', UpdateSingleRecord)
router.put('/updaterecords/:id', updateweddingRecords)

export default router;