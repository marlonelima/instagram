export interface INewPost {
  user_id: string
  filename: string
  description?: string
}

export interface IPosts extends INewPost {
  id: string
  likes: number
  comments: number
}
