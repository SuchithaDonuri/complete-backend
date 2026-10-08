
const express = require('express')
const multer=require('multer')
require('dotenv').config()
const postModel = require('../models/post_model.js')
const storageService = require('./services/storage.service.js')

const cors=require('cors')



const app = express()
app.use(cors())
app.use(express.json())
const upload = multer({storage:multer.memoryStorage()})
app.post('/create-post',  upload.single("image"), async (req,res) => {
    
    const result = await storageService.uploadImage(req.file.buffer)

    const post = await postModel.create({
        image: result.fileId,
        caption: req.body.caption
    })

    res.status(201).json({message:"Post created successfully", post})
})

app.get('/get-posts', async (req,res) => {
    const posts = await postModel.find();
    res.status(200).json({message:"Posts fetched successfully", posts: posts});
});
module.exports = app