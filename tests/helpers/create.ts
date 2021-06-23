import { SuperTest, Test } from 'supertest'
import faker from 'faker'

import { IUser } from '../../src/@types/user'
import { IPosts } from '../../src/@types/posts'

async function signupUser(api: SuperTest<Test>): Promise<IUser> {
  const email = faker.internet.email()
  const full_name = faker.name.findName()
  const username = faker.internet.userName()
  const password = faker.internet.password()

  const response = await api
    .post('/users')
    .send({ email, full_name, username, password })

  return response.body
}

async function createPost(api: SuperTest<Test>): Promise<IPosts> {
  const { token } = await signupUser(api)

  const response = await api
    .post('/posts')
    .set({ Authorization: `Bearer ${token}` })
    .field('description', faker.lorem.sentence())
    .attach('file', './tests/fixtures/post_image.png')

  const post = response.body

  return post
}

async function createComment(api: SuperTest<Test>, token: string) {
  const post = await api
    .post('/posts')
    .set({ Authorization: `Bearer ${token}` })
    .field('description', faker.lorem.sentence())
    .attach('file', './tests/fixtures/post_image.png')

  const response = await api
    .post('/comments')
    .set({ Authorization: `Bearer ${token}` })
    .send({
      post_id: post.body.id,
      comment: faker.lorem.sentence()
    })

  return response.body
}

export { signupUser, createPost, createComment }
