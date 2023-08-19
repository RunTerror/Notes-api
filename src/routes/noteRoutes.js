
const express=require('express');
const { getnotes, addnote, deletenote, updatenote } = require('../controller/noteController');
const auth = require('../middleware/auth');
const noteRouter= express.Router();

noteRouter.get('/',auth,getnotes);

noteRouter.post('/add', auth,addnote);

noteRouter.delete('/delete/:noteid', auth, deletenote);

noteRouter.put('/update/:noteid', auth, updatenote);


module.exports=noteRouter;