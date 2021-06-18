import { SuperTest, Test } from 'supertest'
import faker from 'faker'

async function signupAndLoginGetToken(app: SuperTest<Test>) {
  const email = faker.internet.email()
  const full_name = faker.name.findName()
  const username = faker.internet.userName()
  const password = faker.internet.password()

  const login = await app
    .post('/users')
    .send({ email, full_name, username, password })
  return login.body.token
}

async function createPost(app: SuperTest<Test>) {
  const token = await signupAndLoginGetToken(app)

  const response = await app
    .post('/posts')
    .set({ Authorization: token })
    .field('description', faker.lorem.sentence())
    .attach('file', './tests/fixtures/post_image.png')

  const post_id = response.body.id
  return post_id
}

export { signupAndLoginGetToken, createPost }
