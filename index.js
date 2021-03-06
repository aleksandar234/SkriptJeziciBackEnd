const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser') 


// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

const PORT = 3003
const URLMONGO = "mongodb+srv://stox:assassin19982@cluster0.kfhet.mongodb.net/Movies" 
mongoose.connect(URLMONGO, { useNewUrlParser: true,useUnifiedTopology: true },(error) => {
    if(!error){
        console.log("Success Connected");
    }else{
        console.log("Error connecting problem");
    }
})

// Routers
const movieRouter = require('./movies/route')

app.use('/movies', movieRouter)

const server = app.listen(PORT, console.log(`Server running on port ${PORT}.`))
