const db = require("../models/index");
const Billing = db.billing

const addBilling = async (req,res) => {
    // console.log("reqBilling:",req.body)
    const billing = await Billing.create(req.body);
    res.json({message:'Bill add Successful',status:true,data:billing})
}



module.exports = {addBilling }