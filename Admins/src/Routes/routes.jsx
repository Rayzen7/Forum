import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginAdmin from '../components/loginAdmin.jsx'
import HomeAdmin from '../components/HomeAdmin.jsx'
import Input from '../components/Input.jsx'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/admin' element={<LoginAdmin/>}/>
                <Route path='/Admin_Dashboard_Authorize_Security_Rayzen7' element={<HomeAdmin/>}/>
                <Route path='/Input' element={<Input/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router