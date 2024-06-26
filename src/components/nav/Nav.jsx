import React from 'react'
import './nav.css'
import { FaHome }                from "react-icons/fa";
import { AiOutlineUser }         from "react-icons/ai";
import { BiBook }                from "react-icons/bi";
import { RiServiceLine }         from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setAtiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setAtiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
      <a href="#about" onClick={() => setAtiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setAtiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" onClick={() => setAtiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setAtiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav