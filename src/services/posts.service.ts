import jwt from 'jsonwebtoken'

import User from '../models/users.model'

import { MyError } from '../errors'

import Post from '../models/posts.model'
import { INewPost } from './../@types/posts.d'

const PostsService = {
  async create(post: INewPost) {
    const newPost = await Post.create(post)
    return newPost
  },

  async get(id: string) {
    const post = await Post.findOne({ _id: id })
    return post
  },

  async delete(id: string) {
    const post = await Post.deleteOne({ _id: id })
  }
}

export default PostsService
