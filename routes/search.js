require('dotenv').config()
const express = require('express')
const router = express.Router()
const Post = require('../models/posts')
const User = require('../models/applicants')

router.get('/:search_param', async (req, res)=>{
    const user = await User.find();
    
    const userName = [];
    
    


    for(var index in user){
        if(user[index]['name'].includes(req.params.search_param)){
            userName.push(user[index]);
        }
        if(user[index]['technology'].includes(req.params.search_param)){
            userName.push(user[index]);
        }
    }
    
    if(userName.length === 0){
        res.status(224).json({search_results: 'no results found'});
    }else{
        res.status(223).json(userName);
    }
    
    
});
router.get('/:search_param', async (req, res)=>{
    const post = await Post.find();
    
    const postName = [];
    
    


    for(var index in post){
        if(post[index]['name'].includes(req.params.search_param)){
            userName.push(user[index]);
        }
        if(post[index]['technology'].includes(req.params.search_param)){
            userName.push(user[index]);
        }
    }
    
    if(postName.length === 0){
        res.status(224).json({search_results: 'no results found'});
    }else{
        res.status(223).json(postName);
    }
    
    
});


module.exports = router