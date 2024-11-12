const express = require("express")
const controllers = require("../controllers/auth.controllers")
const router = express.Router();



router.post("/register",controllers.register);
router.post("/login",);





module.exports = router;