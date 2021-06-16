import jwt from 'jsonwebtoken'

import User from '../models/users.model'

import { MyError } from '../errors'

import Post from '../models/posts.model'
import { INewPost } from './../@types/posts.d'

const PostsService = {
  async create(post: INewPost) {
    const newPost = await Post.create(post)
    return newPost
  }
}

export default PostsService
