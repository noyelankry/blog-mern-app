import express from 'express'
import * as PostController from '../controllers/post-controller.js'
import multer from "multer"

const uploadMiddleware = multer({ dest: 'uploads/' });

const router = express.Router()
// router.get('/post', PostController.viewAll)
// router.get('/post/:id', PostController.view)
router.post('/post', uploadMiddleware.single('file'), PostController.create)
// router.put('/post', PostController.update)
// router.delete('/post', PostController.delete)

export { router }