const note = require('../models/note_model.js');

const getnotes = async (req, res) => {

    try {
        const notes = await note.find({ userId: req.userId });
        if (!notes) {
            return res.status(200).json("Add notes!");
        }
        return res.status(200).json(notes);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ "message": error });

    }

}

const addnote = async (req, res) => {

    try {
        const { title, description } = req.body;
        const newNote =await note.create({
            title: title,
            description: description,
            userId: req.userId
        });
        res.status(201).json(newNote);

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "something went wrong"
        });

    }

}

const updatenote = async (req, res) => {
    let noteid=req.params.noteid;
    const {title, description}=req.body;
    let newnote={
        title: title,
        description: description,
        userId: req.userId,
    }
     
    try {
        await note.findByIdAndUpdate(noteid, newnote,{new: true});
        res.status(200).json("modified");
        
    } catch (error) {
        res.status(400).json(error);
    }
}


const deletenote = async (req, res) => {

    let noteid=req.params.noteid;
    try {
        await note.findByIdAndDelete(noteid);
        res.status(200).json("deleted");
        
    } catch (error) {
        return res.status(400).send(error);
        
    }

    

}

module.exports = {
    getnotes,
    addnote,
    updatenote,
    deletenote
}