import User from '../models/users.model'

import { MyError } from '../errors'

import IUser from '../@types/user'

const UsersService = {
  async create(userData: IUser) {
    const newUserData = await User.create(userData)
    return newUserData
  },

  async login(username: string) {
    const userData = await User.findOne({ username })
    return userData
  },

  async update(id: string, updatedData: IUser) {
    const userData = await User.findOneAndUpdate(
      { _id: id },
      { $set: updatedData },
      { new: true }
    )

    return userData
  },

  async delete(id: string) {
    await User.deleteOne({ _id: id })
    return
  },

  async exists(username: string) {
    const user = await User.findOne({ username })

    if (user)
      throw new MyError(
        'O nome de usuário já existe! Tente utilizando outro nome de usuário.',
        400
      )

    return
  }
}

export default UsersService
