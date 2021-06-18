import supertest from 'supertest'
import faker from 'faker'

import api from '../src/app'

import { signupAndLoginGetToken } from './helpers/functions'
import User from '../src/models/users.model'
import mongoose from '../src/config/database'

const app = supertest(api)

let token: string

beforeAll(async () => {
  token = await signupAndLoginGetToken(app)
})

let post_id: string

describe('Create post', () => {
  it('should send a new post', async () => {
    const response = await app
      .post('/posts')
      .set({ Authorization: token })
      .field('description', faker.lorem.sentence())
      .attach('file', './tests/fixtures/post_image.png')

    post_id = response.body.id
    expect(response.statusCode).toBe(201)
  })

  it('should receive 400 because the extension image is invalid', async () => {
    const response = await app
      .post('/posts')
      .set({ Authorization: token })
      .field('description', faker.lorem.sentence())
      .attach('file', './tests/fixtures/invalid_image.pnsdf')

    expect(response.statusCode).toBe(400)
  })

  it('should receive 401 because the token is missing', async () => {
    const response = await app.post('/posts').send({
      description: faker.lorem.sentence(),
      filename: faker.image.imageUrl()
    })

    expect(response.statusCode).toBe(401)
  })

  it('should receive 400 because the is missing the image', async () => {
    const response = await app
      .post('/posts')
      .set({ Authorization: token })
      .send({ description: faker.lorem.sentence() })

    expect(response.statusCode).toBe(400)
  })
})

describe('Delete post', () => {
  it('should receive 401 because authorization doenst match', async () => {
    const response = await app
      .delete('/posts')
      .set({ Authorization: await signupAndLoginGetToken(app) })
      .set({ post_id })

    expect(response.statusCode).toBe(401)
  })
  it('should delete post', async () => {
    const response = await app
      .delete('/posts')
      .set({ Authorization: token })
      .set({ post_id: post_id })

    expect(response.statusCode).toBe(201)
  })

  it('should receive 400 because is missing the post_id', async () => {
    const response = await app.delete('/posts').set({ Authorization: token })

    expect(response.statusCode).toBe(400)
  })

  it('should receive 500 because the post_id is wrong', async () => {
    const response = await app
      .delete('/posts')
      .set({ Authorization: token })
      .set({ post_id: 'invalid_post_id' })

    expect(response.statusCode).toBe(404)
  })

  it('should receive 401 because authorization is missing', async () => {
    const response = await app.delete('/posts').set({ post_id: post_id })

    expect(response.statusCode).toBe(401)
  })
})
