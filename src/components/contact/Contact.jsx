import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessageLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>ecvunge@protonmail.com</h5>
            <a href="mailto:ecvunge@protonmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessageLine/>
            <h4>Messenger</h4>
            <h5>edvaldo vunge</h5>
            <a href="https://m.me/edvaldo.vunge.1" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp/>
            <h4>Whatsapp</h4>
            <h5>+351912270832</h5>
            <a href="https://api.whatsapp.com/send?phone=+351912270832" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>  
    </section>
  )
}

export default Contact