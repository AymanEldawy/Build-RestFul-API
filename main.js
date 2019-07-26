const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const emp = require('./Routing/Employee');
const multer = require('multer');
// Initial Multer 
/**
 * Multer ({
 *    storage,
 *    fileFilter
 * })
 */
/*
// First Storage
let storage = multer.diskStorage({
    // destination
    destination : (req,file,cb)=>{
        cb(null,'Uploaded')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
});
// Seconde Filter 
let filter = (req,file,cb)=>{
    if(file.mimetype == 'image/png' || file.mimetype == 'image/jpeg')
      cb(null , true)
    else
      cb(null ,false)  
}
// Upload  
const upload = multer({
    storage:storage,
    fileFilter:filter
})
*/
// Mongo Connection
mongoose.connect('mongodb://localhost/api-rest')
// Express Middle Ware 
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.use(express.static('Uploaded'))
// app.post('/emp',upload.single('photo'))
app.use('/emp',emp)



app.listen('3000',()=>{
    console.log('The Server Has Running In Port 3000')
})
