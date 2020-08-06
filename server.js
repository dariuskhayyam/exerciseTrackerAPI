const express = require('express')
const cors = require('cors')
const knex = require('knex')
const bodyParser = require('body-parser')

const app = express()

app.use(cors)
app.use(bodyParser)

app.listen(3000, () => console.log("Server up and running!"))