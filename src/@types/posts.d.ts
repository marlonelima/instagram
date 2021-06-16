export interface INewPost {
  user_id: string
  filename: string
  description?: string
}

export interface IPosts {
  user_id?: string
  image_url?: string
  description?: string
  likes?: number
  comments?: number
}
