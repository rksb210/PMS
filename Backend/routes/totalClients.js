const express = require("express");
const { getTotalClients, getTotalPlatinumClients, getTotalGoldClients, getTotalFreeClients } = require("../controllers/totalClientsController");
const router = express.Router();

router.get('/totalClients', getTotalClients)
router.get('/totalPlatinum',getTotalPlatinumClients) 
router.get('/totalGold',getTotalGoldClients) 
router.get('/totalFree',getTotalFreeClients) 




module.exports = router;
