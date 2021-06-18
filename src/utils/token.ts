import jwt from 'jsonwebtoken'

import { IToken } from '../@types/token'

export const TokenManager = {
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
