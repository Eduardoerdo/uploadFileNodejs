const routes = require('express').Router()
const multer = require('multer')
const { appLog: log } = require('./debug')

routes.post('/post', multer(require('./multer')).single('file'), (req, res) => {
    log(req.file)
    res.status(200)
        .json({ message: 'ok' })
    // process file here path.resolve(__dirname, '..', 'tmp');
})

module.exports = routes