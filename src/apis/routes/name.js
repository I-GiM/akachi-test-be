import { createUser, getAllUsers } from '../contollers/name'
import express from 'express'

const router = express.Router()

router.post('/user/register', createUser)
router.get('/users', getAllUsers)

export { router as userRoute }
