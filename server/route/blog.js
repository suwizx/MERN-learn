const express = require("express");
const router = express.Router();
const { create , getblogs , getblog , remove , updateblog } = require("../controller/blogController")

router.post("/create", create)
router.get("/blogs", getblogs)
router.get("/blog/:slug", getblog)
router.delete("/blog/:slug", remove)
router.put("/blog/:slug",updateblog)

module.exports=router