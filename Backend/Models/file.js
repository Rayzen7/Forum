import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    }
});

const File = mongoose.model('File', fileSchema);
export default File;