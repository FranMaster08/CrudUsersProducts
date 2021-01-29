const express=require('express')
const ruta=express.Router()


ruta.get('/',(req,res)=>{
    res.status(200).json({data:'hola'});
});

module.exports=ruta
