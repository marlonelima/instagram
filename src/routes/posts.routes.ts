import { Router } from 'express'
import multer from 'multer'
import multerConfig from '../config/multer'

import PostsController from '../controllers/http/posts.controller'
import tokenVerifier from '../middlewares/token'

const postsRouter = Router()

postsRouter.post(
  '/',
  multer(multerConfig.image()).single('file'),
  tokenVerifier,
  PostsController.create
)
postsRouter.delete('/', tokenVerifier, PostsController.delete)

export default postsRouter
