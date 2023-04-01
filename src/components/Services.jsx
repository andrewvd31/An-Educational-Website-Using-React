import React from 'react'
import PublicIcon from '@mui/icons-material/Public';
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AssessmentIcon from '@mui/icons-material/Assessment';
import '../styles/Services.css'

export default function Services() {
  const styles1 = {
     fontSize: '2.5rem',
     color: '#ffb606'
  }
  return (
    <div>
      <section className="services" id="services">
        <div className="underline"></div>
        <h2>Our Services</h2>
        <div className="services-main-div">
          <div className="services-div">
            <PublicIcon style={styles1}/>
            <h3>Online Courses</h3>
            <p>In aliquam, augue a gravida rutrum, ante nisl 
              fermentum nulla, vitae tempor nisl ligula vel nunc. 
              Proin quis mi malesuada, finibus tortor fermentum.</p>
          </div>
          <div className="services-div">
            <DescriptionIcon style={styles1}/>
            <h3>Indoor Courses</h3>
            <p>In aliquam, augue a gravida rutrum, ante nisl 
              fermentum nulla, vitae tempor nisl ligula vel nunc. 
              Proin quis mi malesuada, finibus tortor fermentum.</p>
          </div>
          <div className="services-div">
            <LibraryBooksIcon style={styles1}/>
            <h3>Amazing Library</h3>
            <p>In aliquam, augue a gravida rutrum, ante nisl 
              fermentum nulla, vitae tempor nisl ligula vel nunc. 
              Proin quis mi malesuada, finibus tortor fermentum.</p>
          </div>
          <div className="services-div">
              <ManageAccountsIcon style={styles1}/>
              <h3>Exceptional Professors</h3>
              <p>In aliquam, augue a gravida rutrum, ante nisl 
                fermentum nulla, vitae tempor nisl ligula vel nunc. 
                Proin quis mi malesuada, finibus tortor fermentum.</p>
            </div>
          <div className="services-div">
            <AssessmentIcon style={styles1}/>
            <h3>Top Programs</h3>
            <p>In aliquam, augue a gravida rutrum, ante nisl 
              fermentum nulla, vitae tempor nisl ligula vel nunc. 
              Proin quis mi malesuada, finibus tortor fermentum.</p>
          </div>
          <div className="services-div">
            <SchoolIcon style={styles1}/>
            <h3>Graduate Diploma</h3>
            <p>In aliquam, augue a gravida rutrum, ante nisl 
              fermentum nulla, vitae tempor nisl ligula vel nunc. 
              Proin quis mi malesuada, finibus tortor fermentum.</p>
          </div>
        </div>
      </section>
    </div>
  )
}