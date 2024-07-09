import React, { useState } from 'react';
import './CSS/Input.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Input = () => {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://forum-api-theta.vercel.app/api/files/upload', { name, link });
            if (response.status === 201) {
                navigate('/Admin_Dashboard_Authorize_Security_Rayzen7'); 
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div className='input'>
            <div className="input-container">
                <h1>Upload Materi</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder='Nama File' 
                        required 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <input 
                        type="url" 
                        placeholder='Url' 
                        required 
                        value={link} 
                        onChange={(e) => setLink(e.target.value)} 
                    />
                    <button type='submit'>Posting</button>
                    <button className='back'>
                        <Link to="/Admin_Dashboard_Authorize_Security_Rayzen7" style={{ textDecoration: "none", color: "black" }}>
                            Back
                        </Link>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Input;
