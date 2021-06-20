import fs from 'fs'

describe('Check public folder', () => {
  const publicDir = 'public'

  it('should exists public folder', () => {
    const exists = fs.existsSync(publicDir)

    expect(exists).toBe(true)
  })

  it('should exists images folder', () => {
    const imagesDir = '/images'

    const exists = fs.existsSync(publicDir + imagesDir)

    expect(exists).toBe(true)
  })

  it('should exists images/posts folder', () => {
    const imagesPostDir = '/images/posts'

    const exists = fs.existsSync(publicDir + imagesPostDir)

    expect(exists).toBe(true)
  })
})
