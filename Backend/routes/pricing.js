const express = require("express")
const router = express.Router()
const { freeData, goldData, platinumData } = require("../controllers/pricingController")


router.get('/free',freeData)

router.get('/gold',goldData)

 router.get('/platinum',platinumData)

module.exports = router