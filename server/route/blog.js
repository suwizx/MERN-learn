const express = require("express");
const router = express.Router();
const { create , getblogs } = require("../controller/blogController")

router.post("/create", create)
router.get("/blogs", getblogs)

module.exports=router