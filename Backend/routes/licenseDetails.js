const express = require("express");
const { getLicenceDetails } = require("../controllers/licenseDetailsControllers");
const router = express.Router();

router.get('/licencedetails',getLicenceDetails)


module.exports = router;
