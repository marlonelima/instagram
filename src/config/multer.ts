import path from 'path'
import multer from 'multer'

import { MyError } from '../errors'

class MulterConfigs {
  private storage: multer.StorageEngine

  public publicPath: string

  constructor(publicPath: string) {
    this.publicPath = publicPath

    this.storage = multer.diskStorage({
      destination: (req, file, cb) => cb(null, publicPath),

      filename: (req, file, cb) =>
        cb(
          null,
          `${Date.now()}-${Math.floor(Math.random() * 9999999999) + 1}.jpg`
        )
    })
  }

  public image(): multer.Options {
    return {
      dest: this.publicPath,
      storage: this.storage,
      limits: {
        fileSize: 10 * 1024 * 1024
      },
      fileFilter: (req, file, cb) => {
        const allowedMimes = [
          'image/jpeg',
          'image/pjpeg',
          'image/png',
          'image/gif'
        ]

        if (allowedMimes.includes(file.mimetype)) cb(null, true)
        else {
          cb(new MyError('Invalid image type', 400))
        }
      }
    }
  }
}

export default new MulterConfigs(
  path.resolve(__dirname, '..', '..', 'public', 'images', 'posts')
)
