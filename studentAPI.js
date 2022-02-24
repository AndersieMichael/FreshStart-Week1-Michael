const express = require('express')
const router = express.Router()

const data = require('./function').alldata
const searchid = require('./function').viewdataById
const insertData = require('./function').insertData
const updateData = require('./function').updateById
const deleteData = require('./function').deleteById
const pool = require('./Database/student').pool

router.get('/',(req,res)=>{
    res.send("This is Student Page")
})

router.get('/get',async (req,res)=>{
    const pg_client = await pool.connect()
    let[success,result] = await data(pg_client)
    if (!success){
        console.log(result);
        pg_client.release();
        return
    }else{
        pg_client.release();
        res.status(200).json({"message":"Success","data":result})
    }
})

router.get('/get/:id',async (req,res)=>{
    const {id} = req.params
    const pg_client = await pool.connect()
    let[success,result] = await searchid(pg_client,Number(id))
    if (!success){
        console.log(result);
        pg_client.release();
        return
    }else{
        pg_client.release();
        res.status(200).json({"message":"Success","data":result})
    }
})

router.post('/add',async (req,res)=>{
    const{name} = req.body
    const{age} = req.body
    const{gender} = req.body
    const pg_client = await pool.connect()
    let[success,result] = await insertData(pg_client,name,Number(age),gender)
    if (!success){
        console.log(result);
        pg_client.release();
        return
    }else{
        pg_client.release();
        res.status(200).json({"message":"Success","data":result})
    }
})

router.put('/update/:id',async (req,res)=>{
    const {id} = req.params
    const{name} = req.body
    const{age} = req.body
    const{gender} = req.body
    const pg_client = await pool.connect()
    let[success,result] = await updateData(pg_client,Number(id),name,Number(age),gender)
    if (!success){
        console.log(result);
        pg_client.release();
        return
    }else{
        pg_client.release();
        res.status(200).json({"message":"Success","data":result})
    }
})

router.delete('/del/:id',async (req,res)=>{
    const {id} = req.params
    const pg_client = await pool.connect()
    let[success,result] = await deleteData(pg_client,Number(id))
    if (!success){
        console.log(result);
        pg_client.release();
        return
    }else{
        pg_client.release();
        res.status(200).json({"message":"Success","data":result})
    }
})

module.exports = router
