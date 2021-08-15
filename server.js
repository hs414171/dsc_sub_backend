require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const post_routes = require('./routes/post_routes')
const user_routes = require('./routes/applicant_routes')
const search_route = require('./routes/search')
const cors = require('cors')
const port = process.env.PORT || 3000
const app = express()
var options = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }
  app.use(cors(options));

app.get('/',(req,res)=>{
    res.send("Hello World")
})


mongoose.connect(
    process.env.DATABASE_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on('error', (error)=>{console.log(error)});
db.once('open', ()=>{console.log('Connected to Database')});
app.use(express.json())
app.use('/api/post',post_routes)
app.use('/api/applicant',user_routes)
app.use('/api/search',search_route)



app.listen(port,()=>{
    console.log(`Server listening to port ${port}`)
})