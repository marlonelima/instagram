import { Router } from 'express'
import multer from 'multer'
import multerConfig from '../config/multer'

import PostsController from '../controllers/http/posts.controller'

const postsRouter = Router()

postsRouter.post(
  '/',
  multer(multerConfig.image()).single('file'),
  PostsController.create
)
postsRouter.delete('/', PostsController.delete)

export default postsRouter
