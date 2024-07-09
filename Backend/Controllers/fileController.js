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