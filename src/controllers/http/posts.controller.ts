import { Request, Response } from 'express'

import { PostsService } from '../../services'
import { PostsValidator } from '../../validators'
import { TokenManager } from '../../utils/token'

import { MyError } from '../../errors'

const PostsController = {
  async create(req: Request, res: Response) {
    if (!req.headers.authorization)
      throw new MyError(
        'Você não tem permissão para isso. O token não foi informado!',
        401
      )

    await PostsValidator.create.validate(req.body, { abortEarly: false })

    if (!req.file)
      throw new MyError('Impossível prosseguir sem uma imagem!', 400)

    const { id: user_id } = await TokenManager.verifyAndDecodeJWT(
      req.headers.authorization
    )

    const { description } = req.body

    const filename = req.file.filename

    const newPost = await PostsService.create({
      user_id,
      filename,
      description
    })

    return res.status(201).json({
      id: newPost._id,
      user_id: newPost.user_id,
      filename: newPost.filename,
      description: newPost.description,
      likes: newPost.likes,
      comments: newPost.comments,
      created_at: newPost.created_at,
      updated_at: newPost.updated_at
    })
  },

  async delete(req: Request, res: Response) {
    if (!req.headers.authorization)
      throw new MyError(
        'Você não tem permissão para isso. O token não foi informado!',
        401
      )

    if (!req.headers.post_id)
      throw new MyError('Você não informou o id do post!', 400)

    const { id: user_id } = await TokenManager.verifyAndDecodeJWT(
      req.headers.authorization
    )

    const post = await PostsService.get(<string>req.headers.post_id)

    if (user_id != post.user_id) {
      throw new MyError('Você não tem permissão para isso!', 401)
    }

    await PostsService.delete(<string>req.headers.post_id)

    return res.status(202).json({ message: 'Publicação apagada com sucesso!' })
  }
}

export default PostsController
