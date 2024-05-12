import {
    uploadFile, updateFile, getAllClient, getSingleRequirements
} from '../../controller/BaptismalRequirements/BaptismalRequirements.js'

import express from 'express'
import multer from 'multer'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  const upload = multer({ storage: storage })
  
  
  const router = express.Router()

router.post('/upload', upload.fields([
    {name: 'birthCertificate', maxCount: 1},
    {name: 'MarriageContract', maxCount: 1},
    {name: 'FatherBaptismalCerticate', maxCount: 1},
    {name: 'MotherBaptismalCerticate', maxCount: 1},
    {name: 'ParishPermit', maxCount: 1},
]), uploadFile)

router.put('/update/:id', upload.fields([
    {name: 'birthCertificate', maxCount: 1},
    {name: 'MarriageContract', maxCount: 1},
    {name: 'FatherBaptismalCerticate', maxCount: 1},
    {name: 'MotherBaptismalCerticate', maxCount: 1},
    {name: 'ParishPermit', maxCount: 1},
]), updateFile)


router.get('/', getAllClient)
router.get('/:id', getSingleRequirements)

export default router