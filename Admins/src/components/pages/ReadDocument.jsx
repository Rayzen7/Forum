import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CSS/ReadDocument.css'

const FileList = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        fetchFiles();
    }, []);

    // Fetch files from the API
    const fetchFiles = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/files/get');
            setFiles(response.data);
        } catch (error) {
            console.error("Error fetching files:", error);
        }
    };

    // Handle file download
    const handleDownload = async (fileId) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/files/download/${fileId}`, {
                responseType: 'blob'
            });
            const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
            const link = document.createElement('a');
            link.href = url;

            // Extract filename from the response headers
            const contentDisposition = response.headers['content-disposition'];
            const filename = contentDisposition
                ? contentDisposition.split('filename=')[1].trim()
                : 'downloadedFile.pdf';
            
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url); 
        } catch (error) {
            console.error("Error downloading file:", error);
        }
    };

    // handle file delete
    const handleDelete = async (fileId) => {
        try {
            await axios.delete(`http://localhost:5000/api/files/delete/${fileId}`)
            setFiles(files.filter(file => file._id !== fileId))
        } catch (error) {
            console.error("Error deleting file", error);
        }
    };

    return (
        <div className='read'>
            <h1>Daftar Materi</h1>
            <ol>
                {files.map((file) => (
                    <li key={file._id}>
                        <div className='name'>{file.name}</div>
                        <div className='btn'>
                            <button onClick={() => handleDownload(file._id)} className='download'>Download</button>
                            <button onClick={() => handleDelete(file._id)} className='delete'>Delete</button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default FileList;
