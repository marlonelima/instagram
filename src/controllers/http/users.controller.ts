import bcrypt, { genSaltSync } from 'bcrypt'
import { Request, Response } from 'express'

import UsersService from '../../services/users.service'
import UsersValidator from '../../validators/users.validator'
import { TokenManager } from '../../utils/token'

import { MyError } from '../../errors'

const UsersController = {
  async create(req: Request, res: Response) {
    await UsersValidator.create.validate(req.body, { abortEarly: false })

    const { email, full_name, username, password: plainPassword } = req.body

    await UsersService.exists(username)

    const password = await bcrypt.hash(plainPassword, genSaltSync())

    const userData = await UsersService.create({
      email,
      full_name,
      username,
      password
    })

    const token = await TokenManager.generateJWT(userData._id)

    return res.status(201).json({
      email: userData.email,
      full_name: userData.full_name,
      username: userData.username,
      bio: userData.bio,
      website: userData.website,
      followers: userData.followers,
      following: userData.following,
      private: userData.private,
      created_at: userData.created_at,
      updated_at: userData.updated_at,
      token
    })
  },

  async login(req: Request, res: Response) {
    await UsersValidator.login.validate(req.body, { abortEarly: false })

    const { username, password } = req.body

    const userData = await UsersService.login(username)
    if (!userData) throw new MyError('Usuário inválido!', 404)

    const matchPassword = await bcrypt.compare(password, userData.password)
    if (!matchPassword) throw new MyError('Senha inválida!', 401)

    const token = await TokenManager.generateJWT(userData._id)

    return res.status(200).json({
      email: userData.email,
      full_name: userData.full_name,
      username: userData.username,
      bio: userData.bio,
      website: userData.website,
      followers: userData.followers,
      following: userData.following,
      private: userData.private,
      created_at: userData.created_at,
      updated_at: userData.updated_at,
      token
    })
  },

  async update(req: Request, res: Response) {
    await UsersValidator.update.validate(req.body, { abortEarly: false })

    let userUpdatedData = req.body

    const { id } = res.locals.token_payload

    const { password } = userUpdatedData
    if (password)
      userUpdatedData.password = await bcrypt.hash(password, genSaltSync())

    const userData = await UsersService.update(id, userUpdatedData)

    const token = await TokenManager.generateJWT(userData._id)

    return res.status(200).json({
      email: userData.email,
      full_name: userData.full_name,
      username: userData.username,
      bio: userData.bio,
      website: userData.website,
      created_at: userData.created_at,
      updated_at: userData.updated_at,
      token
    })
  },

  async delete(req: Request, res: Response) {
    const { id } = res.locals.token_payload

    await UsersService.delete(id)

    return res.status(202).json({ message: 'Usuário deletado com sucesso!' })
  }
}

export default UsersController
