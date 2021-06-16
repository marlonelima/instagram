import jwt from 'jsonwebtoken'

import User from '../models/users.model'

import { MyError } from '../errors'

import IUser from '../@types/user'
import { IToken } from '../@types/token'

const UsersService = {
  async create(userData: IUser) {
    try {
      const newUserData = await User.create(userData)
      return newUserData
    } catch (err) {
      console.log(err)
      throw new MyError('Algo deu errado ao criar um novo usuário!', 400)
    }
  },

  async login(username: string) {
    try {
      const userData = await User.findOne({ username })
      return userData
    } catch (err) {
      throw new MyError(err.message, 500)
    }
  },

  async update(id: string, updatedData: IUser) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: id },
        { $set: updatedData },
        { new: true }
      )

      return userData
    } catch (err) {
      throw new MyError(err.message, 500)
    }
  },

  async delete(id: string) {
    try {
      await User.deleteOne({ _id: id })
      return true
    } catch (err) {
      throw new MyError(err.message, 500)
    }
  },

  async exists(username: string) {
    const user = await User.findOne({ username })

    if (user)
      throw new MyError(
        'O nome de usuário já existe! Tente utilizando outro nome de usuário.',
        400
      )

    return
  },

  async generateJWT(id: string) {
    const token = jwt.sign({ id }, <string>process.env.PRIVATE_KEY, {
      expiresIn: '15m'
    })
    return token
  },

  async verifyAndDecodeJWT(token: string) {
    const decoded = <IToken>jwt.verify(token, <string>process.env.PRIVATE_KEY)
    return decoded
  }
}

export default UsersService
