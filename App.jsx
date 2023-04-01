import React from 'react'
import './src/styles/App.css'
import Navbar from './src/components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './src/pages/Home'
import Contact from './src/pages/Contact'
import About from './src/pages/About'
import Courses from './src/pages/Courses'
import News from './src/pages/News'

function App() {
  return (
    <div className="main-container">
    <Router>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/courses" element={<Courses/>}></Route>
            <Route path="/news" element={<News/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
      </Router>
    </div>
  )
}

export default App