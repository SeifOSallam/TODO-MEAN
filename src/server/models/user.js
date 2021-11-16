const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
});


module.exports = mongoose.model('user', UserSchema);