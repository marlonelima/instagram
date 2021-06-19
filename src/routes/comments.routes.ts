import { Router } from 'express'

import CommentsController from '../controllers/http/comments.controller'

const commentsRouter = Router()

commentsRouter.post('/', CommentsController.create)
commentsRouter.delete('/', CommentsController.delete)

export default commentsRouter
