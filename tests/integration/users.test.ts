import supertest from 'supertest'
import faker from 'faker'

import app from '../../src/app'
import { signupUser } from '../helpers/create'

const api = supertest(app)

describe('Create user', () => {
  it('shoud create user', async () => {
    const response = await api.post('/users').send({
      email: faker.internet.email(),
      full_name: faker.name.findName(),
      username: faker.internet.userName(),
      password: faker.internet.password()
    })

    expect(response.statusCode).toBe(201)
  })

  it('shoud not create user because is missing the email', async () => {
    const response = await api.post('/users').send({
      full_name: faker.name.findName(),
      username: faker.internet.userName(),
      password: faker.internet.password()
    })

    expect(response.statusCode).toBe(400)
  })

  it('shoud not create user because is missing the full_name', async () => {
    const response = await api.post('/users').send({
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: faker.internet.password()
    })

    expect(response.statusCode).toBe(400)
  })

  it('shoud not create user because is missing the username', async () => {
    const response = await api.post('/users').send({
      email: faker.internet.email(),
      full_name: faker.name.findName(),
      password: faker.internet.password()
    })

    expect(response.statusCode).toBe(400)
  })

  it('shoud not create user because is missing the password', async () => {
    const response = await api.post('/users').send({
      email: faker.internet.email(),
      full_name: faker.name.findName(),
      username: faker.internet.userName()
    })

    expect(response.statusCode).toBe(400)
  })

  it('shoud not create user because already exists', async () => {
    const user = {
      email: faker.internet.email(),
      full_name: faker.name.findName(),
      username: faker.internet.userName(),
      password: faker.internet.password()
    }

    await api.post('/users').send(user)

    const response = await api.post('/users').send(user)

    expect(response.statusCode).toBe(400)
  })
})

describe('Update user', () => {
  it('should update user', async () => {
    const user = await signupUser(api)

    const response = await api
      .put('/users')
      .set({ Authorization: `Bearer ${user.token}` })
      .send({
        email: faker.internet.email(),
        full_name: faker.name.findName(),
        username: faker.internet.userName(),
        password: faker.internet.password()
      })

    expect(response.statusCode).toBe(200)
  })

  it('should not update user because the token is invalid', async () => {
    const response = await api
      .put('/users')
      .set({ Authorization: 'invalid-token' })
      .send({
        email: faker.internet.email(),
        full_name: faker.name.findName(),
        username: faker.internet.userName(),
        password: faker.internet.password()
      })

    expect(response.statusCode).toBe(401)
  })

  it('should not update user because the token is missing', async () => {
    const response = await api.put('/users').send({
      email: faker.internet.email(),
      full_name: faker.name.findName(),
      username: faker.internet.userName(),
      password: faker.internet.password()
    })

    expect(response.statusCode).toBe(401)
  })

  it('should not update user because the password is too short', async () => {
    const user = await signupUser(api)

    const response = await api
      .put('/users')
      .set({ Authorization: `Bearer ${user.token}` })
      .send({
        password: '1234'
      })

    expect(response.statusCode).toBe(400)
  })

  it('should update the username successfully', async () => {
    const user = await signupUser(api)

    const newUserName = faker.internet.userName()

    const response = await api
      .put('/users')
      .set({ Authorization: `Bearer ${user.token}` })
      .send({
        username: newUserName
      })

    expect(response.body.username).toBe(newUserName)
  })

  it('should update the full_name successfully', async () => {
    const user = await signupUser(api)

    const newFullName = faker.name.findName()

    const response = await api
      .put('/users')
      .set({ Authorization: `Bearer ${user.token}` })
      .send({
        full_name: newFullName
      })

    expect(response.body.full_name).toBe(newFullName)
  })

  it('should update the email successfully', async () => {
    const user = await signupUser(api)

    const newEmail = faker.internet.email()

    const response = await api
      .put('/users')
      .set({ Authorization: `Bearer ${user.token}` })
      .send({
        email: newEmail
      })

    expect(response.body.email).toBe(newEmail)
  })
})

describe('Login user', () => {
  it('should login', async () => {
    const user = {
      email: faker.internet.email(),
      full_name: faker.name.findName(),
      username: faker.internet.userName(),
      password: faker.internet.password()
    }

    await api.post('/users').send(user)

    const response = await api
      .post('/users/login')
      .send({ username: user.username, password: user.password })

    expect(response.statusCode).toBe(200)
  })

  it('should not login because the username is wrong', async () => {
    const user = {
      email: faker.internet.email(),
      full_name: faker.name.findName(),
      username: faker.internet.userName(),
      password: faker.internet.password()
    }

    await api.post('/users').send(user)

    const response = await api
      .post('/users/login')
      .send({ username: 'wrong-username', password: user.password })

    expect(response.statusCode).toBe(404)
  })

  it('should not login because the password is wrong', async () => {
    const user = {
      email: faker.internet.email(),
      full_name: faker.name.findName(),
      username: faker.internet.userName(),
      password: faker.internet.password()
    }

    await api.post('/users').send(user)

    const response = await api
      .post('/users/login')
      .send({ username: user.username, password: 'wrong-password' })

    expect(response.statusCode).toBe(401)
  })
})

describe('Delete user', () => {
  it('should delete user', async () => {
    const user = await signupUser(api)

    const response = await api
      .delete('/users')
      .set({ Authorization: `Bearer ${user.token}` })

    expect(response.statusCode).toBe(202)
  })

  it('should not delete user because the token is invalid', async () => {
    const response = await api
      .delete('/users')
      .set({ Authorization: 'invalid-token' })

    expect(response.statusCode).toBe(401)
  })

  it('should not delete user because the token is missing', async () => {
    const response = await api.delete('/users')

    expect(response.statusCode).toBe(401)
  })
})
