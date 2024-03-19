const express = require("express");
const { getPreviousPlan } = require("../controllers/previousPlanController");
const router = express.Router();

router.get('/previousPlan/:id',getPreviousPlan)

module.exports = router;
