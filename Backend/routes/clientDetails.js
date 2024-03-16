const express = require("express");
const { getClientDetails } = require("../controllers/clientDetailsController");
const router = express.Router();

router.get('/clientdetails/:id',getClientDetails)

module.exports = router;
