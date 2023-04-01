import React from 'react'
import Image from '../assets/courses-1.jpg'
import Image1 from '../assets/courses-2.jpg'
import Image2 from '../assets/courses-3.jpg'
import Author from '../assets/author-1.jpg'
import Author1 from '../assets/author-2.jpg'
import Author2 from '../assets/author-3.jpg'
import '../styles/Courses.css'
import Footer from '../components/Footer'

export default function Courses() {
  return (
    <div>
      <section className="courses courses-page" id="courses-page">
        <div className="underline "></div>
        <h2>Our Courses</h2>
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
                  <p>$12</p>
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
                  <p>$19</p>
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
                  <p>$27</p>
                </div>
              </div>
            </div>
          </div>
          <div className="courses-sub">
            <img className="courses-image" src={Image1}  alt="" />
            <div className="courses-description">
              <div className="main-description">
                <h3>Learn Python Faster</h3>
                <p>A Complete Guide To Python</p>
              </div>
              <div className='author-div'>
                <div className="author">
                  <img className="author-image" src={Author1} alt="" />
                  <p><span className="author-span">Avinash, </span>Author</p>
                </div>
                <div className="price">
                  <p>$15</p>
                </div>
              </div>
            </div>
          </div>
          <div className="courses-sub">
            <img className="courses-image" src={Image}  alt="" />
            <div className="courses-description">
              <div className="main-description">
                <h3>Web Automation</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className='author-div'>
                <div className="author">
                  <img className="author-image" src={Author} alt="" />
                  <p><span className="author-span">Lorem, ipsum., </span>Author</p>
                </div>
                <div className="price">
                  <p>$23</p>
                </div>
              </div>
            </div>
          </div>
          <div className="courses-sub">
            <img className="courses-image" src={Image2}  alt="" />
            <div className="courses-description">
              <div className="main-description">
                <h3>Lorem, ipsum.</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className='author-div'>
                <div className="author">
                  <img className="author-image" src={Author2} alt="" />
                  <p><span className="author-span">Lorem, ipsum., </span>Author</p>
                </div>
                <div className="price">
                  <p>$10</p>
                </div>
              </div>
            </div>
          </div>
          <div className="courses-sub">
            <img className="courses-image" src={Image}  alt="" />
            <div className="courses-description">
              <div className="main-description">
                <h3>Lorem, ipsum.</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className='author-div'>
                <div className="author">
                  <img className="author-image" src={Author} alt="" />
                  <p><span className="author-span">Lorem, ipsum., </span>Author</p>
                </div>
                <div className="price">
                  <p>$16</p>
                </div>
              </div>
            </div>
          </div>
          <div className="courses-sub">
            <img className="courses-image" src={Image2}  alt="" />
            <div className="courses-description">
              <div className="main-description">
                <h3>Lorem, ipsum.</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className='author-div'>
                <div className="author">
                  <img className="author-image" src={Author2} alt="" />
                  <p><span className="author-span">Lorem, ipsum., </span>Author</p>
                </div>
                <div className="price">
                  <p>$13</p>
                </div>
              </div>
            </div>
          </div>
          <div className="courses-sub">
            <img className="courses-image" src={Image1}  alt="" />
            <div className="courses-description">
              <div className="main-description">
                <h3>Lorem, ipsum.</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className='author-div'>
                <div className="author">
                  <img className="author-image" src={Author1} alt="" />
                  <p><span className="author-span">Lorem, ipsum., </span>Author</p>
                </div>
                <div className="price">
                  <p>$17</p>
                </div>
              </div>
            </div>
          </div>
          <div className="courses-sub">
            <img className="courses-image" src={Image2}  alt="" />
            <div className="courses-description">
              <div className="main-description">
                <h3>Lorem, ipsum.</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className='author-div'>
                <div className="author">
                  <img className="author-image" src={Author2} alt="" />
                  <p><span className="author-span">Lorem, ipsum., </span>Author</p>
                </div>
                <div className="price">
                  <p>$22</p>
                </div>
              </div>
            </div>
          </div>
          <div className="courses-sub">
            <img className="courses-image" src={Image1}  alt="" />
            <div className="courses-description">
              <div className="main-description">
                <h3>Lorem, ipsum.</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className='author-div'>
                <div className="author">
                  <img className="author-image" src={Author1} alt="" />
                  <p><span className="author-span">Lorem, ipsum., </span>Author</p>
                </div>
                <div className="price">
                  <p>$28</p>
                </div>
              </div>
            </div>
          </div>
          <div className="courses-sub">
            <img className="courses-image" src={Image}  alt="" />
            <div className="courses-description">
              <div className="main-description">
                <h3>Lorem, ipsum.</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className='author-div'>
                <div className="author">
                  <img className="author-image" src={Author} alt="" />
                  <p><span className="author-span">Lorem, ipsum., </span>Author</p>
                </div>
                <div className="price">
                  <p>$23</p>
                </div>
              </div>
            </div>
          </div>
          <div className="courses-sub">
            <img className="courses-image" src={Image}  alt="" />
            <div className="courses-description">
              <div className="main-description">
                <h3>Lorem, ipsum.</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className='author-div'>
                <div className="author">
                  <img className="author-image" src={Author} alt="" />
                  <p><span className="author-span">Lorem, ipsum., </span>Author</p>
                </div>
                <div className="price">
                  <p>$20</p>
                </div>
              </div>
            </div>
          </div>
          <div className="courses-sub">
            <img className="courses-image" src={Image1}  alt="" />
            <div className="courses-description">
              <div className="main-description">
                <h3>Lorem, ipsum.</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className='author-div'>
                <div className="author">
                  <img className="author-image" src={Author1} alt="" />
                  <p><span className="author-span">Lorem, ipsum., </span>Author</p>
                </div>
                <div className="price">
                  <p>$12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}