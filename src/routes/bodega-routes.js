const express = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const routes = express.Router();
const _ =require('underscore')


routes.get('/users',async(req,res)=>{
    
    let desde = req.query.desde || 0;
    desde = Number(desde);

    let limite = req.query.limite || 5;
    limite = Number(limite)
    Usuario.find({estado:true})
           .limit(limite)
           .skip(desde)
           .exec((err,usuarios)=>{
               if(err){
                   return res.status(400).json({
                       ok:false,
                       err
                   });
               }
               Usuario.count({estado:true},(err,conteo)=>{
                res.json({
                    ok:true,
                    usuarios,
                    conteo
                });
               })
              
           })
})


routes.post('/users',(req,res)=>{
    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password:bcrypt.hashSync(body.password, 10),
        role: body.role
    });

    usuario.save((err, usuarioDB)=>{
        if(err){
           return res.status(400).json({
                ok:false,
                err
            })
        };

        res.json({
            ok:true,
            usuario:usuarioDB
        })
    })

})


routes.put('/users/:id',async (req,res)=>{
    let id = req.params.id; 
    let body = _.pick(req.body,['nombre','email','role','estado']);

     await Usuario.findOneAndUpdate(id,body,{new:true},(err, usuarioDB)=>{
        
        if(err){
            return res.status(400).json({
                 ok:false,
                 err
             })
         };
        
         res.json({
            ok:true,
            usuario:usuarioDB
        })
       
    })
    
})


routes.delete('/users/:id',(req,res)=>{
    let id= req.params.id;

    Usuario.findByIdAndRemove(id,(err, usuarioBorrado)=>{
        if(err){
            return res.status(400).json({
                ok:false,
                err
            })
        };

        if(!usuarioBorrado){
            return res.status(400).json({
                ok:false,
                err:{
                    message : 'Usuario no existe'
                }
            })
        }
        res.json({
            ok:true,
            usuario:usuarioBorrado
        })
    })

})

module.exports=routes;