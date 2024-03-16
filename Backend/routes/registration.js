const express = require("express");
const router = express.Router();
const {
  addSuperAdmin,
  getClientDetails,
  deleteClientDetails,
  editClientDetails,
  addClient,
  getAllClientDetails,
} = require("../controllers/registrationController");

router.post("/signup", addClient);
router.get("/signup", getAllClientDetails);
router.delete("/signup/:id", deleteClientDetails);
router.patch("/signup/:id", editClientDetails);

module.exports = router;
