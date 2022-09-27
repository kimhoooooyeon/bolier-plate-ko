const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kimhoyeon:gmIe5RUhxwJbwl17@bolierplate.gyk6iya.mongodb.net/?retryWrites=true&w=majority', {
}).then(() => console.log('MongoDB Connected...'))
.catch(Error => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕핫요 !!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})