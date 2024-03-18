const express = require("express");
const router = express.Router();
const { logindata } = require("../controllers/loginController");



router.post('/login' ,logindata)

module.exports = router;
