import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CSS/Learning.css';

const FileList = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        fetchFiles();
    }, []);

    const fetchFiles = async () => {
        try {
            const response = await axios.get('https://vercel.com/rayzen7s-projects/forum-api/api/files/get');
            setFiles(response.data);
        } catch (error) {
            console.error('Error fetching files:', error);
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
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default FileList;
