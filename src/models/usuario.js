const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const _ =require('underscore')

const {Schema} = mongoose
mongoose.set('useCreateIndex', true);

let rolesValidos = {
    values: ['ADMIN_ROLE','USER_ROLE'],
    message : '{VALUE} no es un rol valido'
}
const UsuarioSchema = new Schema({
    nombre:{
        type:String,
        required:[true, 'El campo es obligatorio']
    },
    email:{
        type:String,
        unique:true,
        required: [true, 'El campo es obligatorio']
    },
    password:{
        type:String,
        required:[true, 'El campo es obligatorio']
    },
    role:{
        type:String,
        default:'USER_ROLE',
        enum:rolesValidos
    },
    estado:{
        type:Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:false
    },
    img:{
        type:String,
        required:false
    }
});

UsuarioSchema.methods.toJSON = function(){
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject
}

UsuarioSchema.plugin(uniqueValidator,{ message:'{PATH} debe de ser Unico'})

module.exports = mongoose.model('Usuario', UsuarioSchema);