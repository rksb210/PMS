const express = require("express");
const router = express.Router();
var pool = require("./pool");

router.post("/login", function (req, res, next) {
  console.log("login:", req.body);
  pool.query(
    "select * from registration where (companyemailid=? or phonenumber=?) and password=?",
    [req.body.loginemailid, req.body.loginemailid, req.body.loginpassword],
    function (error, result) {
      if (error) {
        res.status(200).json({ message: "Database Error", status: false });
      } else {
        console.log("result",result)
        if (result.length == 1) {
          res
            .status(200)
            .json({ message: "Success", status: true, data: result[0] });
        } else {
          res
            .status(200)
            .json({
              message: "Invalid EmailId/Username/ Password",
              status: false,
            });
        }
      }
    }
  );
});

module.exports = router;
