const { default: mongoose, Schema } = require('mongoose');
const connectDB = require('../src/db/db.js');


const postSchema= new mongoose.Schema({
    image:String,
    caption:String
})
const postModel= mongoose.model("post",postSchema)

module.exports=postModel