import React from 'react'
import './about.css'
import ME from '../../assets/edvaldoVUNGE.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className="about__me-image">
              <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>15+ Worldwide</small>
            </article>
            
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
              Hello, everyone! My name is Edvaldo Vunge. 
              I face challenges head on, driven by motivation and dedication. 
              Reading and music are my passions. Professionally, 
              I started at INDRA.PT as a Java Junior Backend Developer, 
              I worked as a cobol programmer at Capgemini for 9 months, 
              currently I'm focused on my small startUp <a href="https://www.linkedin.com/company/105138171/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="ecv-apps-link">ECV_APPS</a> and in it I'm developing new tools, SAAS, and custom software.
        </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
 )
}

export default About