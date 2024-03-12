const express = require("express");
const router = express.Router();
var pool = require("./pool");
const { addSuperAdmin } = require("../controllers/registrationController");

// router.post("/signup", (req, res) => {
//   console.log("ttt:", req.body);
//   pool.query(
//     "insert into registration (companyname, companyemailid, password, phonenumber, location, label) values(?,?,?,?,?,?)",
//     [
//       req.body.companyname,
//       req.body.companyemailid,
//       req.body.password,
//       req.body.phonenumber,
//       req.body.location,
//       req.body.label,
//     ],
//     function (error, result) {
//       if (error) {
//         console.log(error);
//         res.json({ msg: "not register" });
//       } else {
//         console.log(result);
//         res.json({ msg: "register" });
//       }
//     }
//   );
// });

router.post('/signup',addSuperAdmin)

module.exports = router;
