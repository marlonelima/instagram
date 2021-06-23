import { Router } from 'express'

import CommentsController from '../controllers/http/comments.controller'
import tokenVerifier from '../middlewares/token'

const commentsRouter = Router()

commentsRouter.post('/', tokenVerifier, CommentsController.create)
commentsRouter.delete('/', tokenVerifier, CommentsController.delete)

export default commentsRouter
