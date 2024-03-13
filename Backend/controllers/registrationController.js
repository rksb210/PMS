const db = require("../models/index");
const Registration = db.registration;

const addSuperAdmin = async (req, res) => {
  console.log("req.body:", req.body);
  const { companyemailid } = req.body;
  const check_email = await Registration.findAll({
    where: {
      companyemailid: companyemailid,
    },
  });
  console.log("check:",check_email.length)
  if (check_email.length>=1) {
    res.json({ msg: "Email Id already exist" ,status:true,data:[]});
  } else {
    const registration = await Registration.create(req.body);
    res
      .status(200)
      .json({ msg: "Registration Successfull", data: registration ,status:false});
  }
};

// const registration = await Registration.create(req.body)
// res.status(200).json({msg:'Registration Successfull',data:registration})
// }

module.exports = { addSuperAdmin };
