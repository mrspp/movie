const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let User = new Schema({
    userName: { type: String, unique: true },
    password: { type: String },
    email: { type: String, unique: true },
    phoneNumber: { type: Number, unique: true }
})

module.exports = mongoose.model('User', User);