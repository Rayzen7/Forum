<<<<<<< HEAD
import React from 'react'
import './CSS/HomeAdmin.css'
import Upload from './pages/upload.jsx'
import FileList from './pages/ReadDocument.jsx'
import { Link } from 'react-router-dom'

const HomeAdmin = () => {
  return (
    <div className='homeAdmin' data-aos="fade-up">
        <Upload/>
        <FileList/>
        <Link to="/admin" style={{textDecoration:"none", color:"white"}}><button>Keluar</button></Link>
    </div>
  )
}

=======
import React from 'react'
import './CSS/HomeAdmin.css'
import Upload from './pages/upload.jsx'
import FileList from './pages/ReadDocument.jsx'
import { Link } from 'react-router-dom'

const HomeAdmin = () => {
  return (
    <div className='homeAdmin' data-aos="fade-up">
        <Upload/>
        <FileList/>
        <Link to="/admin" style={{textDecoration:"none", color:"white"}}><button>Keluar</button></Link>
    </div>
  )
}

>>>>>>> 5a29e34455abc449fae5c0be8781d84b521b9968
export default HomeAdmin