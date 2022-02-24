const express = require('express')

const app = express()

const port = 5000

// app.use(express.urlencoded({extended:false}))
app.use(express.json())

const people = require('./people')
//middleware untuk baca json dari body
const json = require('./json')

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.post('/insert',(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).send("Sorry Cannot get the Name")
    }
    return res.send(`Hello ${name}`)
})

app.use('/people',people)

app.use('/json',json)

app.listen(port,()=>{
    console.log("Server is listening in port 5000");
})