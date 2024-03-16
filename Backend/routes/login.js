const express = require("express");
const router = express.Router();
var pool = require("./pool");
const { logindata } = require("../controllers/loginController");


router.post('/login',logindata)

module.exports = router;
