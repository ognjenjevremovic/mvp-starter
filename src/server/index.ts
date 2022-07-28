import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import { message } from '@/db/data/messages'

const app = express()

app.use(cookieParser())
app.use(bodyParser.json())

app.get('/hello', (req, res) => {
  res.json(message)
})

async function start() {
  app.listen(8000, () => {
    console.log('Listening on port 8000')
  })
}

start()
