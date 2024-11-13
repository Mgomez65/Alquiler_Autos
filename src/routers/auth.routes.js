const express = require("express");
const controllers = require("../controllers/auth.controllers");
const router = express.Router();
const valition_usuario = require("../validator/usuario.validation");


router.post("/register", valition_usuario(), controllers.register);

router.post("/login",);

module.exports = router;
