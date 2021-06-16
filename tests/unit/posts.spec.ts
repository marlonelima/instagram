import supertest from 'supertest'
import faker from 'faker'

import { describe, it, expect } from '@jest/globals'
import api from '../../src/app'

const app = supertest(api)

const email = faker.internet.email()
const full_name = faker.name.findName()
const username = faker.internet.userName()
const password = faker.internet.password()

let token: string

async function signupAndLogin() {
  await app.post('/users').send({ email, full_name, username, password })
  const login = await app.post('/users/login').send({ username, password })
  return (token = login.body.token)
}

beforeAll(async () => {
  await signupAndLogin()
})

describe('Create post', () => {
  it('should send a new post', async () => {
    const response = await app
      .post('/posts')
      .set({ Authorization: token })
      .send({
        description: faker.lorem.sentence(),
        image_url: faker.image.imageUrl()
      })

    expect(response.statusCode).toBe(201)
    expect(response.body).toHaveProperty('user_id')
    expect(response.body).toHaveProperty('image_url')
    expect(response.body).toHaveProperty('description')
    expect(response.body).toHaveProperty('likes')
    expect(response.body).toHaveProperty('comments')
  })

  it('should receive 401 because the token is missing', async () => {
    const response = await app.post('/posts').send({
      description: faker.lorem.sentence(),
      image_url: faker.image.imageUrl()
    })

    expect(response.statusCode).toBe(401)
  })

  it('should receive 400 because the is missing data', async () => {
    const response = await app
      .post('/posts')
      .set({ Authorization: token })
      .send({ description: faker.lorem.sentence() })

    expect(response.statusCode).toBe(500)
  })
})
