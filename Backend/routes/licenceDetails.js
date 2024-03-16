const express = require("express");
const { getLicenceDetails } = require("../controllers/licenceDetailsControllers");
const router = express.Router();

router.get('/licencedetails',getLicenceDetails)

module.exports = router;
