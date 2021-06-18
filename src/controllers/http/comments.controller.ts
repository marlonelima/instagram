import { Request, Response } from 'express'

import { CommentsValidator } from '../../validators'
import { TokenManager } from '../../utils/token'
import { CommentService } from '../../services'

import { MyError } from '../../errors'

import { INewComment } from './../../@types/comments.d'

const PostsController = {
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

    const comment = await CommentService.create({
      comment: newComment.comment,
      post_id: newComment.post_id,
      user_id
    })

    return res.status(201).json({ id: comment._id, comment: comment.comment })
  }
}

export default PostsController
