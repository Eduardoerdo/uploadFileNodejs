const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

module.exports = {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', 'tmp'))
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (error, hash) => {
        if (error) cb(error)
        const fileName = `${hash.toString('hex')}`
        cb(null, fileName)

      })
    }
  })
}
