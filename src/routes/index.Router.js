const express=require('express')
const ruta=express.Router()

ruta.use('/users',require('./users.Router'))
ruta.use('/products',require('./producto.Router'))


module.exports=ruta
