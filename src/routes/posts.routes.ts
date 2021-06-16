import { Router } from 'express'

import PostsController from '../controllers/http/posts.controller'

const postsRouter = Router()

postsRouter.post('/', PostsController.create)

export default postsRouter
