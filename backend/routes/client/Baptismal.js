import express from 'express'
import { createBaptismalClient,
        listbaptismalClient,
        updatebaptismalClient,
        getSingleClient
} from '../../controller/Client/baptismal.js'

const router = express.Router()

router.post('/accept', createBaptismalClient)
router.get('/list', listbaptismalClient)
router.put('/update/:id', updatebaptismalClient)
router.get('/singleClient/:id', getSingleClient)

export default router;

