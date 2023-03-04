const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const mongoose = require('mongoose');
const blogRoute = require('./route/blog')

require("dotenv").config();

const app = express()

//connect db
mongoose.connect(process.env.DB,{
    useNewUrlParser:true,
    useUnifiedTopology:false
})
    .then(()=>console.log("Connect database success"))
    .catch((err)=>{
    console.log(`err : ${err}`)
})

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use('/api',blogRoute)

const port = process.env.PORT || 5500
app.listen(port,()=>{console.log(`server is listen ${port}`)})