import React from 'react';
import './CSS/Input.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Input = () => {
    const navigate = useNavigate();

    const handleFileUpload = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', event.target.elements.file.files[0]);

        try {
            const response = await axios.post('https://forum-api-theta.vercel.app/api/files/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('File uploaded successfully', response);
            // navigate url
            navigate('/Admin_Dashboard_Authorize_Security_Rayzen7');
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div className='input'>
            <div className="input-container">
                <h1>Upload Materi</h1>
                <form onSubmit={handleFileUpload} encType='multipart/form-data'>
                    <input type="text" placeholder='Nama File' required />
                    <input type="file" name="file" required />
                    <button type='submit'>Posting</button>
                    <button className='back'><Link to="/Admin_Dashboard_Authorize_Security_Rayzen7" style={{textDecoration:"none", color:"black"}}>Back</Link></button>
                </form>
            </div>
        </div>
    );
};

export default Input;
