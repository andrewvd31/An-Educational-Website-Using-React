import React from 'react'
import Event from '../assets/event-1.jpg'
import Event1 from '../assets/event-2.jpg'
import Event2 from '../assets/event-3.jpg'
import Footer from '../components/Footer'
import '../styles/News.css'

export default function News() {
  return (
    <div>
      <section className="events news-page" id="events">
        <div className="underline"></div>
        <h2>Upcoming Events</h2>
        <div className="events-main-div">
          <div className="event">
            <div className="event-date">
              <h3>05</h3> 
              <p>February</p>       
            </div>
            <div className="event-description">
              <h3>Student Festival</h3>
              <h4>Grand Central Park</h4>
              <p>Lorem ipsum dolor sit, amet consectetur 
                 adipisicing elit. Soluta, vel culpa dolores
                 modi debitis quo mollitia iure eaque nulla 
                 alias possimus suscipit autem accusantium 
                 explicabo minima. Itaque, consequatur. 
                 Velit quam necessitatibus obcaecati autem 
                 neque culpa.</p>
            </div>
            <div className="event-image">
                <img src={Event} alt="" />
            </div>
          </div>
          <div className="event">
            <div className="event-date">
              <h3>07</h3> 
              <p>December</p>       
            </div>
            <div className="event-description">
              <h3>Tech Festival</h3>
              <h4>Lorem, ipsum dolor.</h4>
              <p>Lorem ipsum dolor sit, amet consectetur 
                 adipisicing elit. Soluta, vel culpa dolores
                 modi debitis quo mollitia iure eaque nulla 
                 alias possimus suscipit autem accusantium 
                 explicabo minima. Itaque, consequatur. 
                 Velit quam necessitatibus obcaecati autem 
                 neque culpa.</p>
              </div>
            <div className="event-image">
                <img src={Event1} alt="" />
            </div>
          </div>
          <div className="event">
            <div className="event-date">
                <h3>11</h3> 
                <p>June</p>       
            </div>
            <div className="event-description">
              <h3>Grand Prix Fest</h3>
              <h4>London Park</h4>
              <p>Lorem ipsum dolor sit, amet consectetur 
                 adipisicing elit. Soluta, vel culpa dolores
                 modi debitis quo mollitia iure eaque nulla 
                 alias possimus suscipit autem accusantium 
                 explicabo minima. Itaque, consequatur. 
                 Velit quam necessitatibus obcaecati autem 
                 neque culpa.</p>
            </div>
            <div className="event-image">
                <img src={Event2} alt="" />
            </div>
          </div>
          <div className="event">
            <div className="event-date">
              <h3>20</h3> 
              <p>March</p>       
            </div>
            <div className="event-description">
              <h3>Latest Tech Innovation</h3>
              <h4>China Palace</h4>
              <p>Lorem ipsum dolor sit, amet consectetur 
                 adipisicing elit. Soluta, vel culpa dolores
                 modi debitis quo mollitia iure eaque nulla 
                 alias possimus suscipit autem accusantium 
                 explicabo minima. Itaque, consequatur. 
                 Velit quam necessitatibus obcaecati autem 
                 neque culpa.</p>
              </div>
            <div className="event-image">
                <img src={Event1} alt="" />
            </div>
          </div>
          <div className="event">
            <div className="event-date">
              <h3>24</h3> 
              <p>April</p>       
            </div>
            <div className="event-description">
              <h3>Lorem, ipsum.</h3>
              <h4>Lorem, ipsum dolor.</h4>
              <p>Lorem ipsum dolor sit, amet consectetur 
                 adipisicing elit. Soluta, vel culpa dolores
                 modi debitis quo mollitia iure eaque nulla 
                 alias possimus suscipit autem accusantium 
                 explicabo minima. Itaque, consequatur. 
                 Velit quam necessitatibus obcaecati autem 
                 neque culpa.</p>
              </div>
            <div className="event-image">
                <img src={Event} alt="" />
            </div>
          </div>
          <div className="event">
            <div className="event-date">
              <h3>01</h3> 
              <p>July</p>       
            </div>
            <div className="event-description">
              <h3>Grande Festa</h3>
              <h4>Lorem ipsum dolor sit.</h4>
              <p>Lorem ipsum dolor sit, amet consectetur 
                 adipisicing elit. Soluta, vel culpa dolores
                 modi debitis quo mollitia iure eaque nulla 
                 alias possimus suscipit autem accusantium 
                 explicabo minima. Itaque, consequatur. 
                 Velit quam necessitatibus obcaecati autem 
                 neque culpa.</p>
              </div>
            <div className="event-image">
                <img src={Event2} alt="" />
            </div>
          </div>
          <div className="event">
            <div className="event-date">
              <h3>18</h3> 
              <p>March</p>       
            </div>
            <div className="event-description">
              <h3>Student Moments Fest</h3>
              <h4>Lorem, ipsum dolor.</h4>
              <p>Lorem ipsum dolor sit, amet consectetur 
                 adipisicing elit. Soluta, vel culpa dolores
                 modi debitis quo mollitia iure eaque nulla 
                 alias possimus suscipit autem accusantium 
                 explicabo minima. Itaque, consequatur. 
                 Velit quam necessitatibus obcaecati autem 
                 neque culpa.</p>
              </div>
            <div className="event-image">
                <img src={Event} alt="" />
            </div>
          </div>
          <div className="event">
            <div className="event-date">
              <h3>22</h3> 
              <p>August</p>       
            </div>
            <div className="event-description">
              <h3>Techno Feast</h3>
              <h4>Russia Park</h4>
              <p>Lorem ipsum dolor sit, amet consectetur 
                 adipisicing elit. Soluta, vel culpa dolores
                 modi debitis quo mollitia iure eaque nulla 
                 alias possimus suscipit autem accusantium 
                 explicabo minima. Itaque, consequatur. 
                 Velit quam necessitatibus obcaecati autem 
                 neque culpa.</p>
              </div>
            <div className="event-image">
                <img src={Event2} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}