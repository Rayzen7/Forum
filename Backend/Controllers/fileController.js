import File from "../Models/file.js";
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from "url";

// Config multer for storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('./Uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

export const uploads = multer({ storage }).single('file');

// upload file
export const uploadFile = async (req, res) => {
    const filePath = req.file.path;

    try {
        const newFile = new File({ name: req.file.filename, filePath });
        await newFile.save();
        res.status(201).json({ message: "file uploaded succes", file: newFile });
    } catch (error) {
        res.status(500).json({ message: "Error uploading", error });
    }
};

// Read file
export const getFiles = async(req, res) => {
    try {
        const files = await File.find();
        res.status(200).json(files);
    } catch (error) {
        res.status(500).json({ message: "Error read file", error });
    }
};

// Download file
export const downloadFile = async (req, res) => {
    const fileId = req.params.fileId;
    try {
        const file = await File.findById(fileId);
        if (!file) {
            return res.status(404).json({ message: 'File not found' });
        }

        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const filePath = path.resolve(__dirname, '..', file.filePath);

        // Check if file exists before attempting to read
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ message: 'File not found in filesystem' });
        }

        // response stream
        const fileStream = fs.createReadStream(filePath);

        // response headers
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=${file.name}`);
        
        // streaming file
        fileStream.pipe(res);
    } catch (error) {
        console.error('Error downloading file:', error);
        res.status(500).json({ message: 'Error downloading file', error });
    }
};

// Delete file
export const deleteFile = async (req, res) => {
    const fileId = req.params.fileId;
    try {
        // Search by id
        const file = await File.findById(fileId);
        if (!file) {
            return res.status(404).json({ message: 'File not found' });
        }

        // path file
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const filePath = path.resolve(__dirname, '..', file.filePath);

        // cheack
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ message: 'File not found in filesystem' });
        }

        // remove file from file explorer
        fs.unlinkSync(filePath);

        // remove file from database
        const deletedFile = await File.findByIdAndDelete(fileId);
        if (!deletedFile) {
            return res.status(404).json({ message: 'File not found in database' });
        }

        // response
        res.status(200).json({ message: 'File deleted successfully' });
    } catch (error) {
        console.error('Error deleting file:', error);
        res.status(500).json({ message: 'Error deleting file', error });
    }
};