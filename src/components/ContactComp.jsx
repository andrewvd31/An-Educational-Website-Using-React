import React from 'react'
import '../styles/Contact.css'

export default function ContactComp(){
  return (
    <div>
      <section className="form" id="form">
          <div className='form-left-side'>
            <div className="form-left-side-div">
              <h3>Register now and get a discount</h3>
              <h3 className="last-heading-form"><span>50%</span> discount until 1 January</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Minima pariatur obcaecati tenetur, accusamus consequatur 
                optio dignissimos maxime esse laboriosam, magnam in. Molestias 
                hic repellat veritatis ullam laborum veniam possimus tempore!</p>
              <button className="register-btn">REGISTER NOW</button>
            </div>
          </div>
          <div className='form-right-side'>
            <div className="form-right-side-div">
              <h3>Search for your course</h3>
              <form action="#">
                <input type="text" placeholder='Course Name'/>
                <input type="text" placeholder='Category'/>
                <input type="text" placeholder='Degree'/>
                <button className="form-btn" type='submit'>SEARCH COURSE</button>
              </form>
            </div>
          </div>
      </section>
    </div>
  )
}