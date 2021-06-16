import { Router } from 'express'

import UsersController from './../controllers/http/users.controller'

const usersRouter = Router()

usersRouter.post('/', UsersController.create)
usersRouter.post('/login', UsersController.login)
usersRouter.put('/', UsersController.update)
usersRouter.delete('/', UsersController.delete)

export default usersRouter
