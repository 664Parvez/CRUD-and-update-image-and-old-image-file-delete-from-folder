const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const axios = require('axios')

const dataRoute  = require('./routes/data.route')


app.use(bodyParser.urlencoded( { extended : true } ))
app.use(bodyParser.json())


// Static file from uploads folder
app.use(express.static('uploads'))


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    axios.get('http://localhost:3000/all-data')
    .then((response) => {
        res.render('index', {
            items : response.data
        })
    })
})

app.use(dataRoute)


app.use((req, res) => {
    res.send("The Page is not found")
})


module.exports = app