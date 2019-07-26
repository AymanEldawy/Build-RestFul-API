const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Mongo Conection
mongoose.connect('mongodb://localhost/api')
let db = mongoose.conection;


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extednd:true}));


app.get('/api',(req,res)=>{
    res.send('Hello,World');
})



app.listen('3000',()=>{
    console.log('The Server Has Running In Port 3000')
})
