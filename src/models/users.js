const mongoose = require('mongoose');
const {Schema} = mongoose

const userSchema = new Schema({
    email : {type : String, required : true, unique : true},
    user : {type : String, required : true},
    password : {type : String, required : true},
    dateCreated : {type : Date, default :  Date.now}
});

module.exports = mongoose.model('users', userSchema);