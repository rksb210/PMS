const express = require("express");
const checkSubscription = require("../middleware/billingAuth");
const getclientdashboard = require("../controllers/clientDashboardController");
const router = express.Router();

router.get('/clientdashboard/:id',checkSubscription , getclientdashboard )
 
module.exports = router;
