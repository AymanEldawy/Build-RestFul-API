const mongoose = require('mongoose');

const empSchema = mongoose.Schema({
   name:{type:String,require:true},
   salary:{type:Number,min:10,max:100000},
   // image:String
})

module.exports = mongoose.model('Emp',empSchema);