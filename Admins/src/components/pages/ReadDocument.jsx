import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CSS/ReadDocument.css';

const FileList = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        fetchFiles();
    }, []);

    const fetchFiles = async () => {
        try {
            const response = await axios.get('https://forum-api-theta.vercel.app/api/files/get');
            setFiles(response.data);
        } catch (error) {
            console.error('Error fetching files:', error);
        }
    };

    const handleDelete = async (fileId) => {
        try {
            await axios.delete(`https://forum-api-theta.vercel.app/api/files/delete/${fileId}`);
            setFiles(files.filter(file => file._id !== fileId));
        } catch (error) {
            console.error('Error deleting file:', error);
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
                            <button className='download'>
                                <a href={file.link} target="_blank" rel="noopener noreferrer">Download</a>
                            </button>
                            <button onClick={() => handleDelete(file._id)} className='delete'>Delete</button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default FileList;
