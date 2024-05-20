import {uploadFile, 
  updateFile, getAllClient, getSingleRequirements} from "../../controller/req/Req.js";
import express from 'express'
import multer from "multer";
// import { put } from '@vercel/blob'

const storage = multer.memoryStorage({
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
  {name: 'Groom_Baptismal_Certificate', maxCount: 1},
  {name: 'Groom_Confirmation_Certificate', maxCount: 1},
  {name: 'Groom_Birth_Certificate', maxCount: 1},
  {name: 'Groom_CeNomar_Civil_Married', maxCount: 1},
  {name: 'Groom_Cannonical_Application', maxCount: 1},
  {name: 'Groom_Cannonical_Interview', maxCount: 1},
  {name: 'Groom_Id_Picture', maxCount: 1},
  {name: 'Groom_Marriage_Banns', maxCount: 1},
  {name: 'Groom_Pre_Cana', maxCount: 1},
  {name: 'Groom_Marriage_Contract', maxCount: 1},
  {name: 'Groom_Banns_Reply', maxCount: 1},
  {name: 'Bride_Baptismal_Certificate', maxCount: 1},
  {name: 'Bride_Confirmation_Certificate', maxCount: 1},
  {name: 'Bride_Birth_Certificate', maxCount: 1},
  {name: 'Bride_CeNomar_Civil_Married', maxCount: 1},
  {name: 'Bride_Cannonical_Application', maxCount: 1},
  {name: 'Bride_Cannonical_Interview', maxCount: 1},
  {name: 'Bride_Id_Picture', maxCount: 1},
  {name: 'Bride_Marriage_Banns', maxCount: 1},
  {name: 'Bride_Pre_Cana', maxCount: 1},
  {name: 'FirstPaymentReciept', maxCount: 1},
  {name: 'SecondPaymentReciept', maxCount: 1},
  {name: 'Bride_Marriage_Contract', maxCount: 1},
  {name: 'Bride_Banns_Reply', maxCount: 1},])
,uploadFile)

router.put('/update/:id', upload.fields([
  {name: 'Groom_Baptismal_Certificate', maxCount: 1},
  {name: 'Groom_Confirmation_Certificate', maxCount: 1},
  {name: 'Groom_Birth_Certificate', maxCount: 1},
  {name: 'Groom_CeNomar_Civil_Married', maxCount: 1},
  {name: 'Groom_Cannonical_Application', maxCount: 1},
  {name: 'Groom_Cannonical_Interview', maxCount: 1},
  {name: 'Groom_Id_Picture', maxCount: 1},
  {name: 'Groom_Marriage_Banns', maxCount: 1},
  {name: 'Groom_Pre_Cana', maxCount: 1},
  {name: 'Groom_Marriage_Contract', maxCount: 1},
  {name: 'Groom_Banns_Reply', maxCount: 1},
  {name: 'Bride_Baptismal_Certificate', maxCount: 1},
  {name: 'Bride_Confirmation_Certificate', maxCount: 1},
  {name: 'Bride_Birth_Certificate', maxCount: 1},
  {name: 'Bride_CeNomar_Civil_Married', maxCount: 1},
  {name: 'Bride_Cannonical_Application', maxCount: 1},
  {name: 'Bride_Cannonical_Interview', maxCount: 1},
  {name: 'Bride_Id_Picture', maxCount: 1},
  {name: 'Bride_Marriage_Banns', maxCount: 1},
  {name: 'Bride_Pre_Cana', maxCount: 1},
  {name: 'Bride_Marriage_Contract', maxCount: 1},
  {name: 'FirstPaymentReciept', maxCount: 1},
  {name: 'SecondPaymentReciept', maxCount: 1},
  {name: 'Bride_Banns_Reply', maxCount: 1},]), updateFile);
  

router.get('/', getAllClient)
router.get('/:id', getSingleRequirements)
export default router