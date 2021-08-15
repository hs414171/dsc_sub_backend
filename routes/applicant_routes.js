require('dotenv').config()
const express = require('express')
const router = express.Router()
const User = require('../models/applicants')


router.post('/add-user',async(req,res)=>{
    const user = new User({
        name : req.body.name,
        technology : req.body.technology,
        notes: req.body.notes 
    })   
    try{
        const newUser = await user.save()
        res.status(201).json({message: 'new applicant created', user: newUser})
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
        const result = await User.findOneAndUpdate(query,update_doc,{useFindAndModify : false , new:true})
        res.status(221).json({message:"name of the Applicant has been changed",doc:result})
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
        const result = await User.findOneAndUpdate(query,update_doc,{useFindAndModify : false , new:true})
        res.status(221).json({message:"technology for the Applicant has been changed",doc:result})
    }
    catch(e){
        res.status(421).json({message : error.message})
    }
}
)
router.patch('/change-notes',async(req,res)=>{
    const query = {name:req.body.name}
    const update_doc = {
        $set:{
            "notes":req.body.notes

        }
    }
    try{
        const result = await User.findOneAndUpdate(query,update_doc,{useFindAndModify : false , new:true})
        res.status(221).json({message:"notes for the Applicant has been changed",doc:result})
    }
    catch(e){
        res.status(421).json({message : error.message})
    }
}
)

router.get('/get-posts',async(req,res)=>{
    try{
        const userData = await User.find()
        res.json({userData})
    }catch(error){
        res.status(500).json({message: error.message})
    }

})


router.delete('/delete-applicant/:id',async(req,res)=>{
    const { id } = req.params;
  
    Post.findOneAndDelete({_id: id})
    .exec((err, post) => {
      if(err)
        return res.status(500).json({code: 500, message: 'there was an error deleting the user', error: err})
      res.status(200).json({code: 200, message: 'user deleted', deletedPost: post})
    });
})

module.exports = router