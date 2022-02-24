const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send("This is people Page")
})

router.get('/:id',(req,res)=>{
    const {id} = req.params
    res.send(`THis is People ID : ${id}`)
})

module.exports = router