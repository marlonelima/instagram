import mongoose from '../config/database'

const postSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    unique: true
  },
  image_url: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: null
  },
  likes: {
    type: Number,
    default: 0
  },
  comments: {
    type: Number,
    default: 0
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: {
    type: Date,
    default: Date.now()
  }
})

const Post = mongoose.model('Post', postSchema)

export default Post
