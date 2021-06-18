import mongoose from '../config/database'

const commentSchema = new mongoose.Schema({
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

const Comment = mongoose.model('Comment', commentSchema)

export default Comment
