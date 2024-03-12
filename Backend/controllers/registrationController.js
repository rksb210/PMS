const  db = require("../models/index");
const Registration = db.registration;

const addSuperAdmin = async (req, res) => {
     console.log("ttt:", req.body);
     // const { loginemailid} = req.body;


     // const check_email = await Registration.findAll({
     //      where: {
     //           companyemailid: loginemailid,
     //         }, 
     // })
     // if(check_email){
     //   res.status(500).json({msg:'Email Id already exist'})
     // }
     // else{
     const registration = await Registration.create(req.body)
     res.status(200).json({msg:'Registration Successfull',data:registration})
     // }
};

module.exports = {addSuperAdmin}