const db = require("../models/index");
const Billing = db.billing
const Registration = db.registration;
const { Op } = require('sequelize');
const { sequelize } = require("../models/index");



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

const getTotalPlatinumClients = async (req,res) => {
    try{
        const data = await Registration.findAll({
            attributes: [
              "registration_id",
              "companyname",
              "companyemailid",
              "phonenumber",
              "location"
            ],
            include: [
              {
                model: Billing,
                attributes: [
                  "plan",
                  "numberofmonths",
                  "createdAt",
                  "planamount",
                  "numberofusers",
                ],
                where:{
                    plan:'PLATINUM'
                }
              },
            ],
            raw: true,
          });
          console.log("dataaaaa:", data);

          res.json(data)
}
catch(error){
    console.log(error)
}
}

const getTotalGoldClients = async (req,res) => {
    try{
        const data = await Registration.findAll({
            attributes: [
              "registration_id",
              "companyname",
              "companyemailid",
              "phonenumber",
              "location"
            ],
            include: [
              {
                model: Billing,
                attributes: [
                  "plan",
                  "numberofmonths",
                  "createdAt",
                  "planamount",
                  "numberofusers",
                ],
                where:{
                    plan:'GOLD'
                }
              },
            ],
            raw: true,
          });
          console.log("dataaaaa:", data);

          res.json(data)
}
catch(error){
    console.log(error)
}
}


// const getTotalFreeClients = async (req,res) => {
//     try{
//         const data = await Registration.findAll({
//             attributes: [
//               "registration_id",
//               "companyname",
//               "companyemailid",
//               "phonenumber",
//               "location"
//             ],
//             include: [
//               {
//                 model: Billing,
//                 attributes: [
//                   "plan",
//                   "numberofmonths",
//                   "createdAt",
//                   "planamount",
//                   "numberofusers",
//                 ],
//                 required: false, // Set required to false to perform LEFT JOIN
//           where: {
//             registration_id: { [Op.ne]: sequelize.col('Registration.registration_id') }
//           }
//               },
//             ],
//             raw: true,
//           });
//           console.log("dataaaaa:", data);

//           res.json(data)
// }
// catch(error){
//     console.log(error)
// }
// }

// const { Op } = require('sequelize'); // Make sure to import Op from Sequelize

const getTotalFreeClients = async (req, res) => {
    try {
      const data = await Registration.findAll({
        attributes: ['registration_id', 'createdAt'],
        include: [{
          model: Billing,
          attributes: [],
          required: false, // LEFT OUTER JOIN
          on: {
            registration_id: { [Op.ne]: sequelize.col('Registration.registration_id')}
          }
        }],
        where: {
          '$Billing.registration_id$': null // WHERE b.registration_id IS NULL
        },
        raw: true
      });
      console.log("dataaaaa:", data);
  
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  
  


module.exports = {getTotalClients,getTotalPlatinumClients,getTotalGoldClients,getTotalFreeClients}