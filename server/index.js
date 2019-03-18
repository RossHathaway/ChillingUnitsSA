const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const port = process.env.PORT || 3000


const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.static('public'))

app.get('/data', (req, res) => {
  // database function
})

app.listen(port, () => console.log(`server is listening on port ${port}`))
