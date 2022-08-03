const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const logger = require('morgan')

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.static(`${__dirname}/frontend/build`))
app.use(express.json())
app.use(cors())
app.use(logger('dev'))

app.use('/', routes)
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/frontend/build/index.html`)
})
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
