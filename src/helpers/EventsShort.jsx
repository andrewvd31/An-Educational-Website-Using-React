import React from 'react'
import Event from '../assets/event-1.jpg'
import Event1 from '../assets/event-2.jpg'
import Event2 from '../assets/event-3.jpg'
import '../styles/News.css'

export default function EventsShort() {
  return (
    <div>
        <section className="events" id="events">
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
                <img src={Event1} alt="" />
            </div>
            </div>
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
                <img src={Event2} alt="" />
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}