const express = require("express")
const router = express.Router()
var pool=require("./pool")
const { freeData, goldData, platinumData } = require("../controllers/pricingController")

// router.get('/free',(req,res)=>{
//    pool.query('select * from pricing',function(error,result){
//     if(error){
//         res.json({msg:'not found'})
//     }
//     else{
//         console.log("rr",result[0])
//         res.json({data:result[0],msg:'found'})
//     }
//    })
// })

router.get('/free',freeData)

router.get('/gold',goldData)

 router.get('/platinum',platinumData)

module.exports = router