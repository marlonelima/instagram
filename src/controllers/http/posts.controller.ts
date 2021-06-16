import { Request, Response } from 'express'

import { UsersService, PostsService } from '../../services'
import { PostsValidator } from '../../validators'

import { MyError } from '../../errors'

const PostsController = {
  async create(req: Request, res: Response) {
    if (!req.headers.authorization)
      throw new MyError(
        'Você não tem permissão para isso. O token não foi informado!',
        401
      )

    await PostsValidator.create.validate(req.body, { abortEarly: false })

    const { id: user_id } = await UsersService.verifyAndDecodeJWT(
      req.headers.authorization
    )

    const { description, image_url } = req.body

    const newPost = await PostsService.create({
      user_id,
      image_url,
      description
    })

    return res.status(201).json({
      user_id: newPost.user_id,
      image_url: newPost.image_url,
      description: newPost.description,
      likes: newPost.likes,
      comments: newPost.comments,
      created_at: newPost.created_at,
      updated_at: newPost.updated_at
    })
  }
}

export default PostsController
