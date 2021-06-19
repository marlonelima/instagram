import supertest from 'supertest'
import faker from 'faker'

import api from '../../src/app'

const app = supertest(api)

const email = faker.internet.email()
const full_name = faker.name.findName()
const username = faker.internet.userName()
const password = faker.internet.password()

let token: string

describe('Create user', () => {
  it('should create users succesfully', async () => {
    const response = await app
      .post('/users')
      .send({ email, full_name, username, password })

    expect(response.statusCode).toBe(201)
    expect(response.body).toHaveProperty('email')
    expect(response.body).toHaveProperty('full_name')
    expect(response.body).toHaveProperty('username')
    expect(response.body).toHaveProperty('created_at')
    expect(response.body).toHaveProperty('updated_at')
    expect(response.body).toHaveProperty('token')
    expect(response.body).toHaveProperty('bio')
    expect(response.body).toHaveProperty('website')
  })

  it('should receive 400 because the user already exists', async () => {
    const response = await app
      .post('/users')
      .send({ email, full_name, username, password })

    expect(response.statusCode).toBe(400)
  })

  it('should receive status 400 because its missing the email information', async () => {
    const response = await app
      .post('/users')
      .send({ full_name, username, password })

    expect(response.statusCode).toBe(400)
    expect(response.body.message).toBe('VALIDATION_FAILED')
  })

  it('should receive status 400 because its missing the full name information', async () => {
    const response = await app
      .post('/users')
      .send({ email, username, password })

    expect(response.statusCode).toBe(400)
    expect(response.body.message).toBe('VALIDATION_FAILED')
  })

  it('should receive status 400 because its missing the username information', async () => {
    const response = await app
      .post('/users')
      .send({ email, full_name, password })

    expect(response.statusCode).toBe(400)
    expect(response.body.message).toBe('VALIDATION_FAILED')
  })

  it('should receive status 400 because its missing the password information', async () => {
    const response = await app
      .post('/users')
      .send({ email, full_name, username })

    expect(response.statusCode).toBe(400)
    expect(response.body.message).toBe('VALIDATION_FAILED')
  })
})

describe('Login user', () => {
  it('should login user succesfully', async () => {
    const response = await app.post('/users/login').send({ username, password })

    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveProperty('email')
    expect(response.body).toHaveProperty('full_name')
    expect(response.body).toHaveProperty('username')
    expect(response.body).toHaveProperty('created_at')
    expect(response.body).toHaveProperty('updated_at')
    expect(response.body).toHaveProperty('token')
    expect(response.body).toHaveProperty('bio')
    expect(response.body).toHaveProperty('website')

    token = response.body.token
  })

  it('should receive status 401 because the user is invalid', async () => {
    const response = await app
      .post('/users/login')
      .send({ username: `${Math.random()}`, password })

    expect(response.statusCode).toBe(404)
  })

  it('should receive status 401 because the password is invalid', async () => {
    const response = await app
      .post('/users/login')
      .send({ username, password: `${Math.random()}` })

    expect(response.statusCode).toBe(401)
  })

  it('should receive status 400 because the user is missing', async () => {
    const response = await app.post('/users/login').send({ password })

    expect(response.statusCode).toBe(400)
    expect(response.body.message).toBe('VALIDATION_FAILED')
  })

  it('should receive status 400 because the password is missing', async () => {
    const response = await app.post('/users/login').send({ username })

    expect(response.statusCode).toBe(400)
    expect(response.body.message).toBe('VALIDATION_FAILED')
  })
})

describe('Update user', () => {
  it('should update the user password succesfully', async () => {
    const response = await app
      .put('/users')
      .set({ Authorization: token })
      .send({
        password: faker.internet.password()
      })

    expect(response.statusCode).toBe(200)
  })

  it('should update the username succesfully', async () => {
    const response = await app
      .put('/users')
      .set({ Authorization: token })
      .send({
        username: faker.internet.userName()
      })

    expect(response.statusCode).toBe(200)
    expect(response.body.username).not.toBe(username)
  })

  it('should receive 401 because the token is missing', async () => {
    const response = await app.put('/users').send({
      username: faker.internet.userName(),
      password: faker.internet.password()
    })

    expect(response.statusCode).toBe(401)
  })

  it('should receive 401 because the token is invalid', async () => {
    const response = await app
      .put('/users')
      .set({ Authorization: 'invalid-token' })
      .send({ username: faker.internet.userName() })

    expect(response.statusCode).toBe(401)
  })

  it('should receive 400 because the username is too short', async () => {
    const response = await app
      .put('/users')
      .set({ Authorization: token })
      .send({ username: '' })

    expect(response.statusCode).toBe(400)
  })

  it('should receive 400 because the password is too short', async () => {
    const response = await app
      .put('/users')
      .set({ Authorization: token })
      .send({ password: '1221' })

    expect(response.statusCode).toBe(400)
  })
})

describe('Delete user', () => {
  it('should delete user succesfully', async () => {
    const response = await app.delete('/users').set({ Authorization: token })

    expect(response.statusCode).toBe(202)
  })

  it('should receive 401 because the token is invalid', async () => {
    const response = await app
      .delete('/users')
      .set({ Authorization: 'invalid-token' })

    expect(response.statusCode).toBe(401)
  })

  it('should receive 401 because the token is missing', async () => {
    const response = await app.delete('/users')

    expect(response.statusCode).toBe(401)
  })
})
