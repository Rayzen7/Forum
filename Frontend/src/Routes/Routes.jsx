import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../components/login.jsx';
import Home from '../components/home.jsx';
import FileList from '../components/Learning.jsx';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/HomeAuthorizeSecure-Rayzen7_123' element={<Home/>}/>
            <Route path='/HomeAuthorizeSecure-Rayzen7_123/Learning' element={<FileList/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
