import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaSquareDribbble } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/Edvunge" target="_blank"><IoLogoGithub/></a>
        <a href="https://www.linkedin.com/in/edvaldo-vunge/" target="_blank"><FaLinkedin/></a>
        <a href="https://dribbble.com/3dv6ld0" target="_blank"><FaSquareDribbble/></a>
    </div>
  )
}

export default HeaderSocials