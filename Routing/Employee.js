const express = require('express');
const router  = express.Router();
const Emp = require('../Model/model_emp')

// Make Router For Emp
// Get All Employee
router.get('/',(req,res,next)=>{
     Emp.find()
     .exec()
     .then(result => {
        res.json({
            result:result
        })
     })
     .catch(err =>{
         res.json({
             msg:err.message
         })
     })
});
// Get One Emp ById
router.get('/:id',(req,res)=>{
    const id = req.params.id

   Emp.findById(id)    
   .exec()
   .then(result=>{
       res.json({
           result:result
       })
   })
   .catch(err=>{
       res.json({
           msg:err.message
       })
   })
});
// Send a Data
router.post('/',(req,res ,next)=>{
    
    new Emp({
        name:req.body.name,
        salary:req.body.salary,
        bonus:req.body.bonus
    })
    .save()
    .then(result => {
        res.json({
            name:result.name,
            salary:result.salary,
            bonus:result.bonus
        })
    })
    .catch(err => {
        res.json({
            msg : err.message
        })
    })
}) 
// Put Data
router.put('/:id',(req,res)=>{
   Emp.updateOne( {
        id:req.params.id
    },{
        name:req.body.name
    })
    .exec()
    .then(result=>{
      res.json({
        result:result
      })
    })
    .catch(err =>{
        res.json({
            msg :err.message
        })
    })
   
})
// Delete Data
router.delete('/:id',(req,res)=>{
    Emp.deleteOne({
        id:req.params.id
    })
    .exec()
    .then(result=>{
        res.json({
            result:result
        })
    })
    .catch(err=>{
        res.josn({
            msg:err.message
        })
    })
})
module.exports = router;
