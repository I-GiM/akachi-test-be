import { createUser } from '../contollers/name'
import express from 'express'

const router = express.Router()

router.post('/user/register', createUser)

export { router as userRoute }
