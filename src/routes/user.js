const express = require("express");
const userSchema = require("../models/user");
const router = express.Router();

//create user

router.post('/users',(req,res)=> {
    res.send("Create user");
});


module.exports = router;

