const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const parser = require('body-parser')
const path = require('path')
const port = process.env.PORT || 3000


const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '/../client/public')))
app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))

app.get('/db', (req, res) => {
  res.download('/filepath')
})

app.post('/chillingUnits', (req, res) => {
  console.log('body:', req.body)
  // calc chilling units from db
  res.send()
})

// app.get('/', (req, res) => {
//   res.send('../client/public/index.html')
// })

app.listen(port, () => console.log(`server is listening on port ${port}`))
