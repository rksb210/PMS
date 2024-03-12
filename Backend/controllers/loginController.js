var db = require("../models/index");
var Registration = db.registration;

const logindata = async (req, res) => {
  console.log("reqqqq:", req.body);
  const { loginemailid, loginpassword } = req.body;
  const login = await Registration.findAll({
    where: {
      companyemailid: loginemailid,
      password: loginpassword,
    },
    
  },
  {raw:true});         /////////////to remove extra information
  
  console.log("logggginnn:", login);
  console.log("logggginLen:", login.length);
  if (login) {
    if (login.length==1) {
      res
        .status(200)
        .json({ message: "Success", status: true, data: login[0] });
    } else {
      res.status(200).json({
        message: "Invalid EmailId/Username/ Password",
        status: false,
      });
    }
  } else {
    res.status(200).json({ message: "Database Error", status: false });
  }

  // if (login) {
  //   res.status(200).json({ message: "Success", status: true, data: login });
  // } else {
  //   res.status(200).json({ message: "Invalid Email/Password", status: false });
  // }
};

module.exports = { logindata };
