import { MyError } from '../errors'

import Comment from '../models/comments.model'

import { IComment, INewCommentDatabase } from './../@types/comments.d'

const CommentsService = {
  async create(comment: INewCommentDatabase): Promise<IComment> {
    const newComment = await Comment.create(comment)
    return newComment
  },

  async get(id: string): Promise<IComment> {
    try {
      const comment = await Comment.findOne({ _id: id })
      return comment
    } catch (err) {
      throw new MyError('O comentário não existe!', 404)
    }
  },

  async delete(id: string) {
    await Comment.deleteOne({ _id: id })
  }
}

export default CommentsService
