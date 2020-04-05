const express = require('express');

const routes = express.Router();

routes.get('/users',(req,res)=>{
    res.json({status:'Prueba peticion get'})
})
routes.post('/',(req,res)=>{
    res.json({status:'Prueba peticion post'})
})
routes.put('/',(req,res)=>{
    res.json({status:'Prueba peticion put'})
})
routes.delete('/',(req,res)=>{
    res.json({status:'Prueba peticion delete'})
})

module.exports=routes;