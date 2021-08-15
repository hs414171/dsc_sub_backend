const express = require('express')
const mongoose = require('mongoose')




const Applicant = mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    notes:{
        type : String,
        required : true
    },
    technology:{
        type : String,
        required : true
    }
    

    
})



module.exports = mongoose.model('aplicants', Applicant);