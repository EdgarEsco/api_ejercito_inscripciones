const mongoose = require('mongoose');
const bcrytpt =  require('bcrypt-nodejs');
const {Schema} = mongoose

const userSchema = new Schema({
    email : {type : String, required : true, unique : true},
    user : {type : String, required : true},
    password : {type : String, required : true},
    dateCreated : {type : Date, default :  Date.now}
});

//se utiliza una funcion normal para pder acceder al metodo this de la clase
userSchema.methods.comparePassword = async function(password) {
    return await bcrytpt.compare(password, this.password);
}

module.exports = mongoose.model('users', userSchema);