export default interface IUser {
  email: string
  full_name: string
  username: string
  password: string
  _id?: string
  bio?: string
  website?: string
  created_at?: Date
  updated_at?: Date
}
