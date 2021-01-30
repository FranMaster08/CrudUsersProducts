const express=require('express')
const ruta=express.Router()
const {addItem,deleteItem,UpdateItem,ClearArray,getAll}=require('../models/users.model');


//Devuelve todos los registros de la base de datos
ruta.get('/getUser',(req,res)=>{
    res.status(200).json({Success:true,data:getAll()});
});

//Devuelve un  registro de la base de datos
ruta.get('/getUser/:id',(req,res)=>{
    let idBuscado=req.params.id
    let result=getAll().find(item=>(item.id==idBuscado)) 
    if(result){
        res.status(200).json({Success:true,data:result});
    }else{
        res.status(404).json({Success:false,data:null});
    }
});



//Insertar datos al la tabla de Usuarios
ruta.post('/addUser',(req,res)=>{
    let body=req.body
    addItem(body)
    res.status(200).json({Sucess:true,data:getAll()})
});


ruta.delete('/deleteUser/:id',(req,res)=>{
    let idBuscado=req.params.id
    let result=getAll().find(item=>(item.id==idBuscado)) 
    if(result){
        deleteItem(result)
        res.status(200).json({Success:true,data:result});
    }else{
        res.status(404).json({Success:false,data:null});
    }
});


ruta.put('/updateUser/:id',(req,res)=>{
    let idBuscado=req.params.id
    let body=req.body
    let result=getAll().find(item=>(item.id==idBuscado)) 
    if(result){
        UpdateItem(result,body)
        res.status(200).json({Success:true,data:result,arrayData:getAll()});
    }else{
        res.status(404).json({Success:false,data:null});
    }
});


module.exports=ruta
