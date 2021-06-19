import dotenv from 'dotenv'

import db from './tests/db'

dotenv.config({ path: '.env.test' })

beforeAll(async () => await db.connect())

beforeEach(async () => await db.clearDatabase())

afterAll(async () => await db.closeDatabase())
