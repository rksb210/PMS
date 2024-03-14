const express = require("express");
const { addBilling } = require("../controllers/billingController");
const router = express.Router();

router.post('/billing',addBilling)

module.exports = router;
