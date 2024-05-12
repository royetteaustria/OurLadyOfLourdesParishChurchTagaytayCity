import express from 'express'
import { protect } from '../../middleware/UserMiddleware.js';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  listUsers,
  updateUserStatus,
  forgotPassword,
  resetPassword,
  GetSingleInfo
} from '../../controller/auth/User.js'
const router = express.Router();

router.post('/login', authUser)
router.post('/logout', logoutUser)
router.post('/register', registerUser)
router.post('/forgot-password', forgotPassword)
router.post('/reset-password/:id/:token', resetPassword)
router.get('/listofusers', listUsers)
router.route('/profile').get(protect, getUserProfile);
router.put('/update', protect, updateUserProfile);
router.put('/updateUser/:id/:token', updateUserStatus);
router.get('/getInfo/:id', GetSingleInfo)
export default router;