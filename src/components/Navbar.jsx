import React,{ useState } from 'react'
import logo from '../assets/logo.png'
import '../styles/Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'

export default function Navbar() {
  const [state,setState] = useState(false)
  function btnClick(){
    setState(!state)
  }
  function scrollTop(){
    window.scroll(0,0)
    setState(!state)
  }
  return (
    <nav className='nav-bar'>
      <div className="left-side-nav">
        <img className='nav-bar-logo' src={logo} alt='Logo'/>
      </div>
      <div className={`right-side-nav ${state ? 'active' : ''}`}>
        <Link className="links" to='/' onClick={scrollTop}>Home</Link>
        <Link className="links" to='/about' onClick={scrollTop}>About Us</Link>
        <Link className="links" to='/courses' onClick={scrollTop}>Courses</Link>
        <Link className="links" to='/news' onClick={scrollTop}>News</Link>
        <Link className="links" to='/contact' onClick={scrollTop}>Contact</Link>
      </div>
      <div className={`toggle ${state ? 'active' : ''}`}>
        <button onClick={btnClick} className="toggle-button">
          <MenuIcon/>  
        </button>
      </div>
    </nav>
  )
}