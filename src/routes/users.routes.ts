import { Router } from 'express'

import UsersController from './../controllers/http/users.controller'
import tokenVerifier from '../middlewares/token'

const usersRouter = Router()

usersRouter.post('/', UsersController.create)
usersRouter.post('/login', UsersController.login)
usersRouter.put('/', tokenVerifier, UsersController.update)
usersRouter.delete('/', tokenVerifier, UsersController.delete)

export default usersRouter
