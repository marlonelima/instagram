import supertest from 'supertest'
import faker from 'faker'

import app from '../../src/app'
import { createPost, signupUser } from '../helpers/functions'

const api = supertest(app)

describe('Create post', () => {
  it('should create post', async () => {
    const { token } = await signupUser(api)

    const response = await api
      .post('/posts')
      .set({ Authorization: token })
      .field('description', faker.lorem.sentence())
      .attach('file', './tests/fixtures/post_image.png')

    expect(response.statusCode).toBe(201)
  })

  it('should not create post because is missing the token', async () => {
    const response = await api
      .post('/posts')
      .field('description', faker.lorem.sentence())
      .attach('file', './tests/fixtures/post_image.png')

    expect(response.statusCode).toBe(401)
  })

  it('should not create post because the token is invalid', async () => {
    const response = await api
      .post('/posts')
      .set({ Authorization: 'invalid-token' })
      .field('description', faker.lorem.sentence())
      .attach('file', './tests/fixtures/post_image.png')

    expect(response.statusCode).toBe(401)
  })

  it('should not create post because the image is missing', async () => {
    const { token } = await signupUser(api)

    const response = await api
      .post('/posts')
      .set({ Authorization: token })
      .field('description', faker.lorem.sentence())

    expect(response.statusCode).toBe(400)
  })
})

describe('Delete post', () => {
  it('should delete the post', async () => {
    const { token } = await signupUser(api)

    const post = await api
      .post('/posts')
      .set({ Authorization: token })
      .field('description', faker.lorem.sentence())
      .attach('file', './tests/fixtures/post_image.png')

    const response = await api
      .delete('/posts')
      .set({ Authorization: token, post_id: post.body.id })

    expect(response.statusCode).toBe(202)
  })

  it('should not delete the post because the user is not the right', async () => {
    const { token } = await signupUser(api)

    const { token: secondUserToken } = await signupUser(api)

    const post = await api
      .post('/posts')
      .set({ Authorization: token })
      .field('description', faker.lorem.sentence())
      .attach('file', './tests/fixtures/post_image.png')

    const response = await api
      .delete('/posts')
      .set({ Authorization: secondUserToken, post_id: post.body.id })

    expect(response.statusCode).toBe(401)
  })

  it('should not delete the post because is missing the token', async () => {
    const { token } = await signupUser(api)

    const post = await api
      .post('/posts')
      .set({ Authorization: token })
      .field('description', faker.lorem.sentence())
      .attach('file', './tests/fixtures/post_image.png')

    const response = await api.delete('/posts').set({ post_id: post.body.id })

    expect(response.statusCode).toBe(401)
  })

  it('should not delete the post because is missing the post_id', async () => {
    const { token } = await signupUser(api)

    const response = await api.delete('/posts').set({ Authorization: token })

    expect(response.statusCode).toBe(400)
  })

  it('should not delete the post because is missing the post_id is invalid', async () => {
    const { token } = await signupUser(api)

    const response = await api
      .delete('/posts')
      .set({ Authorization: token, post_id: 'invalid-post-id' })

    expect(response.statusCode).toBe(404)
  })
})
