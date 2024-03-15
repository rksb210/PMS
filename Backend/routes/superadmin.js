const express = require("express");
const { addSuperAdmin, superAdminLoginData } = require("../controllers/superAdminController");
const router = express.Router();

router.post('/superadminsignup',addSuperAdmin)
router.post('/superadminlogin',superAdminLoginData)

module.exports = router;
