import React from 'react'
import './CSS/HomeAdmin.css'
import Upload from './pages/upload.jsx'
import FileList from './pages/ReadDocument.jsx'

const HomeAdmin = () => {
  return (
    <div className='homeAdmin' data-aos="fade-up">
        <Upload/>
        <FileList/>
        <a href="/admin"><button>Keluar</button></a>
    </div>
  )
}

export default HomeAdmin