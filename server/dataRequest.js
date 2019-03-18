const axios = require('axios')
const add = require('../db/helpers').add
const key = require('../')

setTimeout(() => {
  axios.get('')
    .then(({data}) => {
      add(data)
    }).catch((err) => {
      console.log('could not add data to database', err)
    })
}, 86400000 + 60000)

module.exports = {}