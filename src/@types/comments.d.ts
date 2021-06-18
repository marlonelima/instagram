export interface INewComment {
  post_id: string
  comment: string
}

export interface INewCommentDatabase extends INewComment {
  user_id: string
}

export interface IComment extends INewCommentDatabase {
  _id: string
  created_at: Date
}
