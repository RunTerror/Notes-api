const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    username: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String
    }
}, {timeStamp: true});

module.exports=mongoose.model('user', UserSchema);