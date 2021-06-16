import bcrypt, { genSaltSync } from 'bcrypt'
import { Request, Response } from 'express'

import { UsersService } from '../../services'
import { UsersValidator } from '../../validators'

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

    const token = await UsersService.generateJWT(userData._id)

    return res.status(201).json({
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

  async login(req: Request, res: Response) {
    await UsersValidator.login.validate(req.body, { abortEarly: false })

    const { username, password } = req.body

    const userData = await UsersService.login(username)
    if (!userData) throw new MyError('Usuário ou senha inválido!', 401)

    const matchPassword = await bcrypt.compare(password, userData.password)
    if (!matchPassword) throw new MyError('Usuário ou senha inválido!', 401)

    const token = await UsersService.generateJWT(userData._id)

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

  async update(req: Request, res: Response) {
    await UsersValidator.update.validate(req.body, { abortEarly: false })

    let userUpdatedData = req.body

    if (!req.headers.authorization)
      throw new MyError(
        'Você não tem permissão para isso. O token não foi informado!',
        401
      )

    const { id } = await UsersService.verifyAndDecodeJWT(
      req.headers.authorization
    )

    const { password } = userUpdatedData
    if (password)
      userUpdatedData.password = await bcrypt.hash(password, genSaltSync())

    const userData = await UsersService.update(id, userUpdatedData)

    const token = await UsersService.generateJWT(userData._id)

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
    if (!req.headers.authorization)
      throw new MyError(
        'Você não tem permissão para isso. O token não foi informado!',
        401
      )

    const { id } = await UsersService.verifyAndDecodeJWT(
      req.headers.authorization
    )

    await UsersService.delete(id)

    return res.status(202).json({ message: 'Usuário deletado com sucesso!' })
  }
}

export default UsersController
