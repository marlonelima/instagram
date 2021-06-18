import supertest from 'supertest'
import faker from 'faker'

import api from '../src/app'

import { createPost, signupAndLoginGetToken } from './helpers/functions'

const app = supertest(api)

let token: string
let post_id: string

beforeAll(async () => {
  token = await signupAndLoginGetToken(app)
  post_id = await createPost(app)
})

describe('Create comment', () => {
  it('should create a comment successfully', async () => {
    const comment = faker.lorem.sentence()
    const response = await app
      .post('/comments')
      .set({ Authorization: token })
      .send({ comment, post_id })

    expect(response.statusCode).toBe(201)
    expect(response.body.comment).toBe(comment)
    expect(response.body).toHaveProperty('id')
  })

  it('should not authorize because the token is missing', async () => {
    const response = await app
      .post('/comments')
      .send({ comment: faker.lorem.sentence(), post_id })

    expect(response.statusCode).toBe(401)
  })
})
