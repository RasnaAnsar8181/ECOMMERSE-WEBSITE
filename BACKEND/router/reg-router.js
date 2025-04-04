const express = require('express')
const router = express.Router();
const reg_controller = require("../controller/registration");


router.get('/login',reg_controller.getAllRecords)
router.post('/signup',reg_controller.insertRecords)

module.exports = router