const express = require('express')
const bodyParser = require('body-parser')
const multiparty = require('multiparty')
const { days, blocks, slots, companies, mentors, schedule} = require('./db.js')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 3033

app.get('/api/mentors', (req, res) => {
    mentors.findAll().then(mentors => res.json(mentors))
})

app.post('/api/mentors', (req, res) => {
    mentors.create(req.body).then(mentor => res.json(mentor))
})

if(require.main === module) {
  app.listen(port, () => {
    console.log( `Express started on http://localhost:${port}` +
      '; press Ctrl-C to terminate.' )
  })
} else {
  module.exports = app
}