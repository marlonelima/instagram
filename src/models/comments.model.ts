import { Schema, model } from 'mongoose'

const commentSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  post_id: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now()
  }
})

const Comment = model('Comment', commentSchema)

export default Comment
