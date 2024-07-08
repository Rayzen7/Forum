import React from 'react'
import './CSS/upload.css'
import { Link } from 'react-router-dom'

const Upload = () => {
  return (
    <div className="uploads">
      <Link to="/Input" style={{textDecoration:"none", color:"white"}}>
        <div className='upload'>
          <i className='bx bx-upload'></i>
          <h1>Upload Materi</h1>
        </div>
      </Link>
    </div>
  )
}

export default Upload