<<<<<<< HEAD
import File from '../Models/file.js'

// Endpoint untuk mengunggah file
export const uploadFile = async (req, res) => {
    const { name, link } = req.body;
    if (!name || !link) {
        return res.status(400).json({ message: 'Name and link are required' });
    }

    try {
        const newFile = new File({ name, link });
        await newFile.save();
        res.status(201).json({ message: 'File uploaded successfully', file: newFile });
    } catch (error) {
        res.status(500).json({ message: 'Error uploading file', error });
    }
};

// Endpoint untuk mendapatkan semua file
export const getFiles = async (req, res) => {
    try {
        const files = await File.find();
        res.status(200).json(files);
    } catch (error) {
        res.status(500).json({ message: 'Error reading files', error });
    }
};

// Endpoint untuk mengunduh file (mengunjungi link)
export const downloadFile = async (req, res) => {
    const fileId = req.params.fileId;
    try {
        const file = await File.findById(fileId);
        if (!file) {
            return res.status(404).json({ message: 'File not found' });
        }

        res.redirect(file.link);
    } catch (error) {
        res.status(500).json({ message: 'Error downloading file', error });
    }
};

// Endpoint untuk menghapus file
export const deleteFile = async (req, res) => {
    const fileId = req.params.fileId;
    try {
        const file = await File.findById(fileId);
        if (!file) {
            return res.status(404).json({ message: 'File not found' });
        }

        await file.deleteOne();
        res.status(200).json({ message: 'File deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting file', error });
    }
};
=======
import admin from 'firebase-admin';
import { getStorage } from 'firebase-admin/storage';
import multer from 'multer';
import File from '../Models/file.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const serviceAccount = JSON.parse(process.env.STORAGE);

// Inisialisasi Firebase Admin SDK
try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        storageBucket: "forum-crud.appspot.com"
    });
} catch (error) {
    console.error('Error initializing Firebase:', error);
    process.exit(1);
}

const storage = getStorage().bucket();

// Multer configuration
const multerStorage = multer.memoryStorage(); // Use memory storage for multer
export const uploads = multer({ storage: multerStorage }).single('file');

// Upload file
export const uploadFile = async (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    try {
        const blob = storage.file(`Files/${file.originalname}`);
        const blobStream = blob.createWriteStream({
            resumable: false,
            contentType: 'application/pdf'
        });

        blobStream.on('error', (err) => {
            console.error('Blob stream error:', err);
            throw new Error(err);
        });

        blobStream.on('finish', async () => {
            const downloadURL = `https://storage.googleapis.com/${storage.name}/Files/${file.originalname}`;

            const newFile = new File({ name: file.originalname, filePath: downloadURL });
            await newFile.save();
            console.log('File uploaded successfully:', newFile);
            res.status(201).json({ message: "File uploaded successfully", file: newFile });
        });

        blobStream.end(file.buffer);
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ message: 'Error uploading file', error });
    }
};

// Read files
export const getFiles = async (req, res) => {
    try {
        const files = await File.find();
        res.status(200).json(files);
    } catch (error) {
        console.error('Error reading files:', error);
        res.status(500).json({ message: "Error reading files", error });
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

        const downloadURL = file.filePath;
        console.log('Download URL:', downloadURL);
        res.status(200).json({ downloadURL });
    } catch (error) {
        console.error('Error downloading file:', error);
        res.status(500).json({ message: 'Error downloading file', error });
    }
};

// Delete file
export const deleteFile = async (req, res) => {
    const fileId = req.params.fileId;
    try {
        const file = await File.findById(fileId);
        if (!file) {
            return res.status(404).json({ message: 'File not found' });
        }

        const filePath = `Files/${file.name}`;
        await storage.file(filePath).delete();

        await File.findByIdAndDelete(fileId);
        console.log('File deleted successfully:', file);
        res.status(200).json({ message: 'File deleted successfully' });
    } catch (error) {
        console.error('Error deleting file:', error);
        res.status(500).json({ message: 'Error deleting file', error });
    }
};
>>>>>>> 5a29e34455abc449fae5c0be8781d84b521b9968
