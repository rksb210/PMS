const  db = require("../models/index");
const Registration = db.registration;

const addSuperAdmin = async (req, res) => {
     console.log("ttt:", req.body);
     // const { companyemailid} = req.body;


     // const check_email = await Registration.findAll({
     //      where: {
     //           companyemailid: companyemailid,
     //         }, 
     // })
     // if(check_email){
     //      console.log("hy")
     //   res.status(500).json({msg:'Email Id already exist'})
     // }
     // else{
     //      console.log("hello")
     // const registration = await Registration.create(req.body)
     // res.status(200).json({msg:'Registration Successfull',data:registration})
     const registration = await Registration.create(req.body)
      res.status(200).json({msg:'Registration Successfull',data:registration})
     // }
};


// const registration = await Registration.create(req.body)
// res.status(200).json({msg:'Registration Successfull',data:registration})

module.exports = {addSuperAdmin}