import express from 'express'
import * as AuthController from '../controllers/auth-controller.js'

const router = express.Router()
router.get('/profile', AuthController.profile)
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.post('/logout', AuthController.logout)

export { router }