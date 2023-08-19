const mongoose=require('mongoose');

const notesSchema=mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
},{timestamps: true});

module.exports=mongoose.model('note', notesSchema);