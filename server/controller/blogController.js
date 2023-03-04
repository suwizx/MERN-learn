const slugify = require("slugify")
const Blogs = require("../models/blogs")

exports.create=(req,res)=>{
    let { title , content , author , slug } = req.body;
    slug = slugify(slug)

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
        res.status("400").json({
            error:err
        })
       }
       res.json(blog)
    })

}