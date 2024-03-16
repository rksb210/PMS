const db = require("../models/index");
const SuperAdmin = db.superadmin

const addSuperAdmin = async (req, res) => {
    // console.log("req.body:", req.body);
    const { email } = req.body;
    const check_email = await SuperAdmin.findAll({
      where: {
        email: email,
      },
    });
    // console.log("check:", check_email.length);
    if (check_email.length >= 1) {
      res.json({ msg: "Email Id already exist", status: true, data: [] });
    } else {
      const registration = await SuperAdmin.create(req.body);
      res
        .status(200)
        .json({
          msg: "Registration Successfull",
          data: registration,
          status: false,
        });
    }
  };

  const superAdminLoginData = async (req, res) => {
    // console.log("reqqqq:", req.body);
    const { email, password } = req.body;
    const login = await SuperAdmin.findAll({
      where: {
        email: email,
        password: password,
      },
      
    },
    {raw:true});         /////////////to remove extra information
    
    // console.log("logggginnn:", login);
    // console.log("logggginLen:", login.length);
    
      if (login.length===1) {
        res
          .status(200)
          .json({ message: "Success", status: true, data: login[0] });
      } else {
        res.json({
          message: "Invalid Login Credentials",
          status: false,
        });
      }
    }

  module.exports = {addSuperAdmin,superAdminLoginData}
