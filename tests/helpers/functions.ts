import { SuperTest, Test } from 'supertest'
import faker from 'faker'

import { IUser } from '../../src/@types/user'

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

async function createPost(api: SuperTest<Test>) {
  const { token } = await signupUser(api)

  const response = await api
    .post('/posts')
    .set({ Authorization: token })
    .field('description', faker.lorem.sentence())
    .attach('file', './tests/fixtures/post_image.png')

  const post_id = response.body.id
  return post_id
}

export { signupUser }
