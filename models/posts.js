const express = require('express')
const mongoose = require('mongoose')




const Post = mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    description:{
        type : String,
        required : true
    },
    technology:{
        type : String,
        required : true
        
    },
    pos_code:{
        type : String,

    }
    

    
})
Post.pre('save',async function(next){
    try{
        const key_ran = require('crypto').randomBytes(3).toString('hex')
        this.pos_code = key_ran
        next()

    }
    catch(error){
        next(error)
    }
})


module.exports = mongoose.model('posts', Post);