const express = require('express')
const cors = require('cors')
const knex = require('knex')
const bodyParser = require('body-parser')

let db = [
    {
        date: "05-08-2020",
        pushUps: 15,
        squats: 61,
        sitUps: 57,
        pullUps: 10
    }
]

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.json(db)
})

app.post("/newWorkout", (req, res) => {
    let {date, pushUps, squats, sitUps, pullUps}  = req.body
    db.push({
        date,
        pushUps,
        squats,
        sitUps,
        pullUps
    })
    res.json("it worked")
})

app.listen(3000, () => console.log("Server up and running!"))