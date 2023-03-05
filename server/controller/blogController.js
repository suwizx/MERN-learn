const slugify = require("slugify")
const Blogs = require("../models/blogs")
const { v4: uuidv4 } = require('uuid');

exports.create=(req,res)=>{
    let { title , content , author , slug } = req.body;
    slug = slugify(slug)

    if(!slug){
        slug = uuidv4
    }

    switch(true){
        case !title:
            return res.status(400).json({
                error : "กรุณากรอก title"
            })
            break;
        case !content:
            return res.status(400).json({
                error : "กรุณากรอก content"
            })
            break;
        case !slug:
            return res.status(400).json({
                error : "กรุณากรอก slug"
            })
            break;
    }

    Blogs.create({title,content,author,slug},(err,blog)=>{
       if(err){
        res.status(400).json({
            error : "เกิดข้อผิดพลาดการบันทึกข้อมูล อาจเกิดจากมี slug นี้อยู่แล้ว",
            errcode:err
            
        })
       }
       res.json(blog)
    })

}

exports.getblogs=(req,res) => {

    Blogs.find({}).exec((err,blogs)=>{
        res.json(blogs)
    })

}