import Comment from '../models/comments.model'

import { IComment, INewCommentDatabase } from './../@types/comments.d'

const CommentService = {
  async create(comment: INewCommentDatabase): Promise<IComment> {
    const newComment = await Comment.create(comment)
    return newComment
  }
}

export default CommentService
