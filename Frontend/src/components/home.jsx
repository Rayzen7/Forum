import React from 'react'
import Navbar from './pages/navbar.jsx'
import './CSS/home.css'
import Hero from './pages/hero.jsx'
import Learning from './pages/learning.jsx'
import Feedback from './pages/feedback.jsx'
import Footer from './pages/footer.jsx'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Hero/>
        <Learning/>
        <Feedback/>
        <Footer/>
    </div>
  )
}

export default Home