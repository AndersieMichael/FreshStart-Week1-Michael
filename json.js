const express = require('express')
const router = express.Router()

const peoples = require('./data')

router.get('/',(req,res)=>{
    res.json(peoples)
})

router.get('/justid',(req,res)=>{
    const justID = peoples.map((people)=>{
        const {id} = people
        return {id}
    })
    res.json(justID)
})

router.get('/:id',(req,res)=>{
    const{id} = req.params
    const person = peoples.find((person)=>person.id===Number(id))
    if(!person){
        return res.status(400).send(`Cannot FInd The id :${id}`)
    }
    return res.status(200).json(person)
})

router.put('/:id',(req,res)=>{
    const{id} = req.params
    const{name} = req.body

    const person = peoples.find((person)=>person.id===Number(id))
    if(!person){
        return res.status(400).send(`Cannot FInd The id :${id}`)
    }else{
        if(!name){
            return res.status(400).send("Sorry Cannot get the Name")
        }else{
            const newPeople = peoples.map((person)=>{
                if(person.id===Number(id)){
                    person.name = name
                }
                return person
            })
            return res.status(200).json(newPeople)
        }
    }
})

router.delete('/:id',(req,res)=>{
    const{id} = req.params
    // const{name} = req.body

    const person = peoples.find((person)=>person.id===Number(id))
    if(!person){
        return res.status(400).send(`Cannot FInd The id :${id}`)
    }else{
       const newPerson = peoples.filter((person)=>person.id!==Number(id))
       return res.status(200).json(newPerson)
    }
})



module.exports = router