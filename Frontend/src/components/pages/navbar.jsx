import React, { useState } from 'react';
import './CSS/navbar.css';
import { Link } from 'react-router-dom'
import logo from '../../assets/img/home/MPK-nobg.png';

const Navbar = () => {
    const [invisible, setInvisible] = useState(false);

    const toggleList = () => {
        setInvisible(!invisible);
    }

    return (
        <div className='navbar'>
            <div className="navbar-container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <h1>MPK SMKN 26 Jakarta</h1>
                </div>
                <ul className={invisible ? "slide-out" : "slide-in"}>
                    <li><a href='#'>Beranda</a></li>
                    <li><a href="#learning">Materi</a></li>
                    <li><a href="#feedback">Saran</a></li>
                    <Link to='/' style={{textDecoration:"none", color:"white"}}><li>Keluar</li></Link>
                </ul>
                <div className="list" onClick={toggleList}>
                    <i className='bx bx-list-ul'></i>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
