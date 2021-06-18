export interface INewPost {
  user_id: string
  filename: string
  description?: string
}

export interface IPosts extends INewPost {
  likes?: number
  comments?: number
}
