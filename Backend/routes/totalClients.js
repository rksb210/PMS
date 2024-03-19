const express = require("express");
const { getTotalClients } = require("../controllers/totalClientsController");
const router = express.Router();

router.get('/totalClients', getTotalClients) 

module.exports = router;
