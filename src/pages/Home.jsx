import React from 'react'
import Footer from '../components/Footer'
import ContactComp from '../components/ContactComp';
import Feature from '../components/Feature';
import CoursesShort from '../helpers/CoursesShort';
import Services from '../components/Services';
import EventsShort from '../helpers/EventsShort';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div>
      <Feature/>
      <CoursesShort/>
      <ContactComp/>
      <Services/>
      <Testimonials/>
      <EventsShort/>
      <Footer/>
    </div>
  )
}