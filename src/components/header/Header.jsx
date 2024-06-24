import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/edvaldo-vunge-removebg-preview.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Edvaldo Vunge</h1>
        <h5 className="text-light">Java Software Engineer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>


        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header