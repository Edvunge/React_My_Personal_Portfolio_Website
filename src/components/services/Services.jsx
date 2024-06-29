import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>I Tech Programming</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Learn all about Git and GitHub</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Learn to program in java</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Learn object-oriented programming </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Learn programming logic</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Learn the basics of HTML, CSS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Learn to program in C/C++</p>
            </li>
          </ul>
        </article>
        {/* END OF Tech Programming */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating Websites & Web Pages</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating Single Pages Applications (SPA)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creation of Web Pages with WordPress</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>E-commerce Creation with Woocomerce</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>CONTENT CREATION</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
    </section>
  )
}

export default Services