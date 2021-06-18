import { Router } from 'express'

import usersRouter from './users.routes'
import postsRouter from './posts.routes'
import commentsRouter from './comments.routes'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/posts', postsRouter)
routes.use('/comments', commentsRouter)

export default routes
