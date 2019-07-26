const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const emp = require('./Routing/Employee');
// Mongo Conection
mongoose.connect('mongodb://localhost/api')
let db = mongoose.connection;


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/emp',emp)

// app.get('/emp',(req,res)=>{
//     res.send('Hello,World');
// })



app.listen('3000',()=>{
    console.log('The Server Has Running In Port 3000')
})
