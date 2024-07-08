import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './CSS/login.css'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    // Timer message
      useEffect(() => {
        if (message) {
          const timer = setTimeout(() => {
            setMessage('');
          }, 2000);

          return () => clearTimeout(timer);
        }
      }, [message]);

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('https://forum-my70kzbbc-rayzen7s-projects.vercel.app/api/users/login', {
                email,
                password
              });

            setMessage(response.data.message); 

            document.querySelector('.message').classList.add('active');

            if(response.status === 200) {
                navigate('/HomeAuthorizeSecure-Rayzen7_123');
            }
        } catch (error) {
            if(error.message) {
                setMessage(error.response.data.message)
            } else if(error.request) {
                setMessage("No response from server")
            } else {
                setMessage("an error occuredd")
            }

            document.querySelector('.message').classList.add('active');
        }
    };

  return (
    <div className='login'>
        <form action="" className='form' onSubmit={handleSubmit}>
            <h1>Masuk</h1>
            <p>Silahkan memasukkan email dan kata sandi yang benar</p>
            <div className="login-container">
                <input type="email"
                 placeholder='Email'
                 value={email}
                 onChange={(e)=> setEmail(e.target.value)}
                 required
                 />
                <input 
                type="password" 
                placeholder='Kata Sandi'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                required
                />
            </div>
            <button type='submit'>Login</button>
            <div className={`message ${message ? 'active' : ''}`}>
                {message && <p>{message}</p>}
            </div>
            <p>Admin? <span><a href="http://localhost:5173/admin" style={{color:"white"}}> Masuk di sini</a></span></p>
        </form>
    </div>
  )
}

export default Login