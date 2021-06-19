import { MyError } from '../errors'

import Post from '../models/posts.model'

import { INewPost } from './../@types/posts.d'

const PostsService = {
  async create(post: INewPost) {
    const newPost = await Post.create(post)
    return newPost
  },

  async get(id: string) {
    try {
      const post = await Post.findOne({ _id: id })
      return post
    } catch (err) {
      throw new MyError('A publicação não existe!', 404)
    }
  },

  async delete(id: string) {
    await Post.deleteOne({ _id: id })
  }
}

export default PostsService
