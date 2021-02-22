require('dotenv').config({ debug: process.env.DEBUG })
const app = require('./config/express')
const { appLog: log } = require('./config/debug')
const port = process.env.PORT || 3000

app.listen(port, () => {
    log(`process.env.PORT: ${process.env.PORT}`)
    log(`process.env.DEBUG: ${process.env.DEBUG}`)
    log(`Listen in port ${port}`)
})