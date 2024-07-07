import React, { useState } from 'react'
import './CSS/feedback.css'

const Feedback = () => {
    const[name, setName] = useState('');
    const[testimoni, setTestimoni] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneNumber = "+6281213028772";
        const message = `Nama: ${name}%0A%0ATestimoni: ${testimoni}`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappURL, '_blank');
    };

  return (
    <div className='feedback' id='feedback'>
        <div className="feedback-container" data-aos="fade-up">
            <form action="" onSubmit={handleSubmit}>
                <h1>Testimoni</h1>
                <input type="text"
                 placeholder='Nama'
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 required
                 />
                <textarea 
                type="text" 
                placeholder='Testimoni'
                value={testimoni}
                onChange={(e) => setTestimoni(e.target.value)}
                required
                />
                <button type='submit'>Kirim</button>
            </form>
        </div>
    </div>
  )
}

export default Feedback