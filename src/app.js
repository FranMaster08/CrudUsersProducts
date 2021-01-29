const express=require('express')
const app=express()
app.use(express.json())
app.use('/',require('./routes/index.Router'))

module.exports=app

