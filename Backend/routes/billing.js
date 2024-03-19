const express = require("express");
const { addBilling, getPlatinumClients } = require("../controllers/billingController");
const router = express.Router();

router.post('/billing',addBilling)



module.exports = router;
