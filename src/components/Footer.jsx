import React from 'react'
import { Link } from 'react-router-dom';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import Logo from '../assets/logo.png'
import '../styles/Footer.css'

export default function Footer() {
  const styles2 = {
    fontSize: '1.9rem',
    color: '#ffb606',
  }
  return (
    <div>
      <section className="newsletter" id="newsletter">
        <div className="underline"></div>
        <h2>Subscribe To newsletter</h2>
        <div className="input-text">
          <input className="text-ip" type="email" placeholder='Enter email address'/>
          <button className="submit-btn" type="submit">Subscribe</button>
        </div>
        <hr className='border-line'/>
      </section>
      <section className='bottom-section'>
        <div className="bottom-section-main-div">
          <div className="bottom-div">
            <img src={Logo} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Tempore blanditiis dolor deserunt, ex et iure tempora eos, 
              voluptatum aspernatur reprehenderit nam unde nisi aliquid, 
              aliquam dolores omnis repellendus sapiente ipsum.</p>
          </div>
          <div className="bottom-div">
            <h3>Menu</h3>
            <div className="links-div">
              <Link className="links" to='/'>Home</Link>
              <Link className="links" to='/about'>About Us</Link>
              <Link className="links" to='/courses'>Courses</Link>
              <Link className="links" to='/elements'>Elements</Link>
              <Link className="links" to='/news'>News</Link>
              <Link className="links" to='/contact'>Contact</Link>
            </div>
          </div>
          <div className="bottom-div">
            <h3>Useful Links</h3>
            <div className="links-div">
              <a href="#" className="links">Testimonials</a>
              <a href="#" className="links">FAQ</a>
              <a href="#" className="links">Community</a>
              <a href="#" className="links">Campus Pictures</a>
              <a href="#" className="links">Tuitions</a>
            </div>
          </div>
          <div className="bottom-div">
            <h3>Contact</h3>
            <div className="contact-div">
              <div className="contact-div-el">
                <LocationOnIcon style={styles2}/>
                <span>Blvd Libertad, 34 m05200 Arévalo</span>
              </div>
              <div className="contact-div-el">
                <PhoneAndroidIcon style={styles2}/>
                <span>0034 37483 2445 322</span>
              </div>
              <div className="contact-div-el">
                <EmailIcon style={styles2}/>
                <span>hello@company.com</span> 
              </div>
            </div>
          </div>
        </div>
        <hr className='border-line-1'/>
      </section>
      <footer>
          <p>Copyright @ 2022. All rights reserved! Created By <span>Techie</span> Andrew</p>
          <div className="social-media-link">
            <span className='social-icons'><YouTubeIcon/></span>
            <span className='social-icons'><InstagramIcon/></span>
            <span className='social-icons'><FacebookIcon/></span>
            <span className='social-icons'><TwitterIcon/></span>
          </div>
      </footer>
    </div>
  )
}