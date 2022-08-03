const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')

const PORT = process.env.PORT || 3001

const app = express()

//middleware
app.use(express.static(`${__dirname}/frontend/build`))
app.use(express.json())
app.use(cors())
app.use(logger('dev'))

app.use('/', routes)

//testing
// app.get('/', (req, res) => {
//   res.send('connect!!')
// })

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/frontend/build/index.html`)
})
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
