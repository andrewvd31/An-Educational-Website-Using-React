import React from 'react'
import Image from '../assets/courses-1.jpg'
import Image1 from '../assets/courses-2.jpg'
import Image2 from '../assets/courses-3.jpg'
import Author from '../assets/author-1.jpg'
import Author1 from '../assets/author-2.jpg'
import Author2 from '../assets/author-3.jpg'
import '../styles/Courses.css'

export default function CoursesShort() {
  return (
    <div>
      <section className="courses" id="courses">
        <div className="underline"></div>
        <h2>Popular Courses</h2>
        <div className="courses-main-div">
          <div className="courses-sub">
            <img className="courses-image" src={Image} alt="" />
            <div className="courses-description">
              <div className="main-description">
                <h3>A complete guide to design</h3>
                <p>Adobe Guide, Layers, Smart Objects etc...</p>
              </div>
              <div className='author-div'>
                <div className="author">
                  <img className="author-image" src={Author} alt="" />
                  <p><span className="author-span">Mike New, </span>Author</p>
                </div>
                <div className="price">
                  <p>$29</p>
                </div>
              </div>
            </div>
          </div>
          <div className="courses-sub">
            <img className="courses-image" src={Image1} alt="" />
            <div className="courses-description">
              <div className="main-description">
                <h3>Beginner's Guide To HTML</h3>
                <p>Tags, Forms, Lists, Classes, ID etc...</p>
              </div>
              <div className='author-div'>
                <div className="author">
                  <img className="author-image" src={Author1} alt="" />
                  <p><span className="author-span">Michael Smith, </span>Author</p>
                </div>
                <div className="price">
                  <p>$29</p>
                </div>
              </div>
            </div>
          </div>
          <div className="courses-sub">
            <img className="courses-image" src={Image2}  alt="" />
            <div className="courses-description">
              <div className="main-description">
                <h3>Advanced Photoshop</h3>
                <p>Adobe Guide, Layers, Smart Objects etc...</p>
              </div>
              <div className='author-div'>
                <div className="author">
                  <img className="author-image" src={Author2} alt="" />
                  <p><span className="author-span">James Bond, </span>Author</p>
                </div>
                <div className="price">
                  <p>$29</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}