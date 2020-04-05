const mongoose = require('mongoose');

const URI = 'mongodb://localhost/bodega';

mongoose.connect(URI,{useNewUrlParser: true, useUnifiedTopology: true })
    .then(db=>console.log('DataBase runing'))
    .catch(err => console.log(err))

module.exports= mongoose;