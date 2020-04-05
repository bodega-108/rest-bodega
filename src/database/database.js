const mongoose = require('mongoose');

const URI = 'mongodb://localhost/bodega';

mongoose.connect(process.env.URLDB,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false})
    .then(db=>console.log('DataBase runing'))
    .catch(err => console.log(err))

module.exports= mongoose;