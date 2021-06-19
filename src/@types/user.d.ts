export interface INewUser {
  email: string
  full_name: string
  username: string
  password: string
}

export interface IUser extends INewUser {
  _id: string
  bio: string
  website: string
  followers: number
  following: number
  private: boolean
  created_at: Date
  updated_at: Date
  token?: string
}
