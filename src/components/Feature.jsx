import React from 'react'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PublicIcon from '@mui/icons-material/Public';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';
import '../styles/Feature.css'

export default function Feature() {
    const styles = {
        fontSize: '4rem',
        color: 'white'
    }
    function scrollTop(){
      window.scroll(0,0)
    }
  return (
    <div>
      <section className="home" id="home">
        <h1 className="heading-line">Get your <span className="heading-span">Education</span> today!</h1>
        <div className="features-sec">
          <div className="feature">
            <div className="feature-icon">
              <PublicIcon style={styles}/>
            </div>
            <div className="feature-description">
              <h2>Online Courses</h2>
              <Link to="/courses" className='feature-description-links' onClick={scrollTop}>View More</Link>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <MenuBookIcon style={styles}/>
            </div>
            <div className="feature-description">
              <h2>Online Library</h2>
              <Link to="/courses" className='feature-description-links' onClick={scrollTop}>View More</Link>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <SchoolIcon style={styles}/>
            </div>
            <div className="feature-description">
              <h2>Online Teachers</h2>
              <Link to="/courses" className='feature-description-links' onClick={scrollTop}>View More</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}