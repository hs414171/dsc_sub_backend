require('dotenv').config()
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const Post= require('../models/posts')

router.post('/add-post',async(req,res)=>{
    const post = new Post({
        name : req.body.name,
        technology : req.body.technology,
        description : req.body.description 
    })   
    try{
        const newPost = await post.save()
        res.status(201).json({message: 'new post created', user: newPost})
    }catch(error){
        res.status(400).json({message: error.message})
    }
}
);

router.patch('/change-name',async(req,res)=>{
    const query = {name:req.body.name}
    const update_doc = {
        $set:{
            "name":req.body.name_ch

        }
    }
    try{
        const result = await Post.findOneAndUpdate(query,update_doc,{useFindAndModify : false , new:true})
        res.status(221).json({message:"name of the post has been changed",doc:result})
    }
    catch(e){
        res.status(421).json({message : error.message})
    }
}
)
router.patch('/change-technology',async(req,res)=>{
    const query = {name:req.body.name}
    const update_doc = {
        $set:{
            "technology":req.body.technology

        }
    }
    try{
        const result = await Post.findOneAndUpdate(query,update_doc,{useFindAndModify : false , new:true})
        res.status(221).json({message:"technology for the post has been changed",doc:result})
    }
    catch(e){
        res.status(421).json({message : error.message})
    }
}
)
router.patch('/change-description',async(req,res)=>{
    const query = {name:req.body.name}
    const update_doc = {
        $set:{
            "description":req.body.description

        }
    }
    try{
        const result = await Post.findOneAndUpdate(query,update_doc,{useFindAndModify : false , new:true})
        res.status(221).json({message:"description for the post has been changed",doc:result})
    }
    catch(e){
        res.status(421).json({message : error.message})
    }
}
)

router.get('/get-posts',async(req,res)=>{
    try{
        const postData = await Post.find()
        res.json({postData})
    }catch(error){
        res.status(500).json({message: error.message})
    }

})


router.delete('/delete-post/:id',async(req,res)=>{
    const { id } = req.params;
  
    Post.findOneAndDelete({_id: id})
    .exec((err, post) => {
      if(err)
        return res.status(500).json({code: 500, message: 'there was an error deleting the post', error: err})
      res.status(200).json({code: 200, message: 'post deleted', deletedPost: post})
    });
})








module.exports = router