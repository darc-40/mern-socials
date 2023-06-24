const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')

// connecting our application
const app = express();

// middlewares
app.use(express.json())
app.use(bodyParser.json())
app.use(cors({
    origin:['http://localhost:3000'],
    methods:['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true
}));

//connecting to our backend 
const port = process.env.PORT
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(() => {
    // listening to port
    app.listen(port, () => {
        console.log(`connected to db and listeningon port ${port} `)
    })
}).catch((error) => {
    console.log(error)
})
    




