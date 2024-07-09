import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './CSS/loginAdmin.css'
import axios from 'axios'

const LoginAdmin = () => {
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
            const response = await axios.post('https://forum-api-theta.vercel.app/api/admin/Adminlogin', {
                email,
                password
              });

            setMessage(response.data.message); 

            document.querySelector('.message').classList.add('active');

            if(response.status === 200) {
                navigate('/Admin_Dashboard_Authorize_Security_Rayzen7');
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
            <h1>Admin</h1>
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
            <p>Bukan admin? <span><a href="https://forum-user.vercel.app/" style={{color:"white"}}> Masuk di sini</a></span></p>
        </form>
    </div>
  )
}

export default LoginAdmin