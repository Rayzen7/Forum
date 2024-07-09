import { uploadFile, getFiles, downloadFile, deleteFile } from '../Controllers/fileController.js'
import express from "express";

const fileRouter = express.Router();

fileRouter.post('/upload', uploadFile);
fileRouter.get('/get', getFiles);
fileRouter.get('/download/:fileId', downloadFile);
fileRouter.delete('/delete/:fileId', deleteFile);

export default fileRouter