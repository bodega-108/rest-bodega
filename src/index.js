require('./config/config')
const express = require('express');
const morgan = require('morgan')
const cors = require('cors');


//Database connection
const{mongoose} = require('./database/database');
const app = express();



//middlewares

app.use(express.json());
app.use(morgan('dev'));
app.use(cors);

//routes

//start server

app.listen(process.env.PORT,()=>{
    console.log(`Server on port ${process.env.PORT}`)
})