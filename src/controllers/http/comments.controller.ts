import { Request, Response } from 'express'

import { CommentsValidator } from '../../validators'
import { TokenManager } from '../../utils/token'
import { CommentsService } from '../../services'

import { MyError } from '../../errors'

import { IComment, INewComment } from './../../@types/comments.d'

const CommentsController = {
  async create(req: Request, res: Response) {
    if (!req.headers.authorization)
      throw new MyError(
        'Você não tem permissão para isso. O token não foi informado!',
        401
      )

    await CommentsValidator.create.validate(req.body, { abortEarly: false })

    const newComment: INewComment = req.body

    const { id: user_id } = await TokenManager.verifyAndDecodeJWT(
      req.headers.authorization
    )

    const comment = await CommentsService.create({
      comment: newComment.comment,
      post_id: newComment.post_id,
      user_id
    })

    return res.status(201).json({
      id: comment._id,
      comment: comment.comment,
      created_at: comment.created_at,
      user_id: comment.user_id
    })
  },

  async delete(req: Request, res: Response) {
    if (!req.headers.authorization)
      throw new MyError(
        'Você não tem permissão para isso. O token não foi informado!',
        401
      )

    if (!req.headers.comment_id)
      throw new MyError('Você não informou o id do comentário!', 400)

    const { id: user_id } = await TokenManager.verifyAndDecodeJWT(
      req.headers.authorization
    )

    const comment = await CommentsService.get(<string>req.headers.comment_id)

    if (user_id != comment.user_id) {
      throw new MyError('Você não tem permissão para isso!', 401)
    }

    await CommentsService.delete(<string>req.headers.comment_id)

    return res.status(202).json({ message: 'Comentário apagado com sucesso!' })
  }
}

export default CommentsController
