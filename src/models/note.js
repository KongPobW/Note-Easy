import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});

const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);

export default Note;