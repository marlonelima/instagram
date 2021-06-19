import supertest from 'supertest'
import faker from 'faker'

import app from '../../src/app'
import { createComment, createPost, signupUser } from '../helpers/create'

const api = supertest(app)

describe('Create comment', () => {
  it('should create commment', async () => {
    const { token } = await signupUser(api)

    const { id: post_id } = await createPost(api)

    const response = await api
      .post('/comments')
      .set({ Authorization: token })
      .send({
        post_id,
        comment: faker.lorem.sentence()
      })

    expect(response.statusCode).toBe(201)
  })

  it('should not commment because the token is missing', async () => {
    const { id: post_id } = await createPost(api)

    const response = await api.post('/comments').send({
      post_id,
      comment: faker.lorem.sentence()
    })

    expect(response.statusCode).toBe(401)
  })

  it('should not commment because the token is invalid', async () => {
    const { id: post_id } = await createPost(api)

    const response = await api
      .post('/comments')
      .set({ Authorization: 'invalid-token' })
      .send({
        post_id,
        comment: faker.lorem.sentence()
      })

    expect(response.statusCode).toBe(401)
  })

  it('should not commment because the post_id is missing', async () => {
    const { token } = await signupUser(api)

    const response = await api
      .post('/comments')
      .set({ Authorization: token })
      .send({
        comment: faker.lorem.sentence()
      })

    expect(response.statusCode).toBe(400)
  })

  it('should not commment because the comment is missing', async () => {
    const { id: post_id } = await createPost(api)

    const { token } = await signupUser(api)

    const response = await api
      .post('/comments')
      .set({ Authorization: token })
      .send({
        post_id
      })

    expect(response.statusCode).toBe(400)
  })
})

describe('Delete comment', () => {
  it('should delete the comment', async () => {
    const { token } = await signupUser(api)

    const comment = await createComment(api, token)

    const response = await api
      .delete('/comments')
      .set({ Authorization: token, comment_id: comment.id })

    expect(response.statusCode).toBe(202)
  })

  it('should not delete the comment because the user is not right', async () => {
    const { token } = await signupUser(api)
    const { token: secondUserToken } = await signupUser(api)

    const comment = await createComment(api, token)

    const response = await api
      .delete('/comments')
      .set({ Authorization: secondUserToken, comment_id: comment.id })

    expect(response.statusCode).toBe(401)
  })

  it('should not delete the comment because the comment not exists', async () => {
    const { token } = await signupUser(api)

    const response = await api
      .delete('/comments')
      .set({ Authorization: token, comment_id: 'invalid-comment-id' })

    expect(response.statusCode).toBe(404)
  })

  it('should not delete the comment because is missing the token', async () => {
    const response = await api
      .delete('/comments')
      .set({ comment_id: 'random-id' })

    expect(response.statusCode).toBe(401)
  })

  it('should not delete the comment because is missing the comment_id', async () => {
    const { token } = await signupUser(api)

    const response = await api.delete('/comments').set({ Authorization: token })

    expect(response.statusCode).toBe(400)
  })

  it('should not delete the comment because the token is invalid', async () => {
    const { token } = await signupUser(api)

    const comment = await createComment(api, token)

    const response = await api
      .delete('/comments')
      .set({ Authorization: 'invalid-token', comment_id: comment.id })

    expect(response.statusCode).toBe(401)
  })
})
