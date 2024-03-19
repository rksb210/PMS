const db = require("../models/index");
const Billing = db.billing
const Registration = db.registration;


const getTotalClients = async (req,res) => {
    try{
    const totalClients = await Registration.findAll({})
    const totalPlatinum = await Billing.findAll({
        where:{
            plan:'PLATINUM'
        }
    })
    const totalGold = await Billing.findAll({
        where:{
            plan:'GOLD'
        }
    })
    console.log("totalClients",totalClients.length)
    console.log('totalPlatinum',totalPlatinum.length)
    console.log('totalGold',totalGold.length)

    const totalFreeClients = totalClients.length - totalPlatinum.length - totalGold.length
    console.log('totalFreeClients',totalFreeClients)

    res.json({totalClients:totalClients.length,totalPlatinum:totalPlatinum.length,totalGold:totalGold.length,totalFreeClients})
}
catch(error){
    console.log(error)
}
}

module.exports = {getTotalClients}