import { NextFunction, Request, Response } from 'express'
import { MyError } from '../errors'
import { TokenManager } from '../utils/token'

async function tokenVerifier(req: Request, res: Response, next: NextFunction) {
  if (!req.headers.authorization)
    throw new MyError(
      'Você não tem permissão para isso. O token não foi informado!',
      401
    )

  const authorization = req.headers.authorization

  const payload = authorization.split(' ')

  if (payload[0] !== 'Bearer')
    throw new MyError('Token JWT mal formatado!', 401)

  await TokenManager.verifyAndDecodeJWT(payload[1]).then(
    (payload) => (res.locals.token_payload = payload)
  )

  next()
}

export default tokenVerifier
