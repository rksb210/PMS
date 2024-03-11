const express = require("express")
const router = express.Router()
var pool=require("./pool")

router.get('/free',(req,res)=>{
   pool.query('select * from pricing',function(error,result){
    if(error){
        res.json({msg:'not found'})
    }
    else{
        console.log("rr",result[0])
        res.json({data:result[0],msg:'found'})
    }
   })
})

router.get('/gold',(req,res)=>{
    pool.query('select * from pricing',function(error,result){
     if(error){
         res.json({msg:'not found'})
     }
     else{
         res.json({data:result[1],msg:'found'})
     }
    })
 })

 router.get('/platinum',(req,res)=>{
    pool.query('select * from pricing',function(error,result){
     if(error){
         res.json({msg:'not found'})
     }
     else{
         res.json({data:result[2],msg:'found'})
     }
    })
 })

module.exports = router