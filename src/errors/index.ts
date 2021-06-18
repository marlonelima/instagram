import { ErrorRequestHandler } from 'express'
import { JsonWebTokenError } from 'jsonwebtoken'
import { ValidationError } from 'yup'

interface ValidationErrors {
  [key: string]: string[]
}

export class MyError extends Error {
  statusCode: number

  constructor(message: string, code: number) {
    super(message)
    this.statusCode = code
  }
}

const errorsHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof MyError)
    return res.status(err.statusCode).send({ message: err.message })

  if (err instanceof ValidationError) {
    const errors: ValidationErrors = {}

    err.inner.forEach((err) => {
      err.path && (errors[err.path] = err.errors)
    })

    return res.status(400).json({ message: 'VALIDATION_FAILED', errors })
  }

  return res
    .status(401)
    .json({ message: 'Algo deu errado com a sua  requisição' })
}
export default errorsHandler
