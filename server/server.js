require('dotenv').config()
const express = require('express')
const { SERVER_PORT } = process.env
const ctrl = require('./controllers/controller')

const app = express()

app.use(express.json())

app.get('/api/list', ctrl.getList)
app.post('/api/list', ctrl.addItem)
app.put('/api/list/:id', ctrl.updateItem)
app.delete('/api/list/:id', ctrl.removeItem)

app.listen(SERVER_PORT, () =>
  console.log(`${SERVER_PORT} monkeys jumping on the bed.`)
)
