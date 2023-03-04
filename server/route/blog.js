const express = require("express");
const router = express.Router();
const { create } = require("../controller/blogController")

router.post("/blog", create)

module.exports=router