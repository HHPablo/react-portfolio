import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {GiNotebook} from 'react-icons/gi'
import {MdContactMail} from 'react-icons/md'
import {GiBrain} from 'react-icons/gi'
import {useState} from 'react'
import {FaHandshake} from 'react-icons/fa'
const Nav = () => {
  const[activeNav, setActiveNav]= useState('#')
  return (
    <nav>
      <a href="#" onClick= {()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href="#about" onClick= {()=>setActiveNav('#about')}className={activeNav === '#about' ? 'active' : ''}><FaUserAlt/></a>
      <a href="#experience"onClick= {()=>setActiveNav('#experience')}className={activeNav === '#experience' ? 'active' : ''}><GiBrain/></a>
      <a href="#services"onClick= {()=>setActiveNav('#services')}className={activeNav === '#services' ? 'active' : ''}><FaHandshake/></a>
      <a href="#Portfolio"onClick= {()=>setActiveNav('#Portfolio')}className={activeNav === '#Portfolio' ? 'active' : ''}><GiNotebook/></a>
      <a href="#contact"onClick= {()=>setActiveNav('#contact')}className={activeNav === '#contact' ? 'active' : ''}><MdContactMail/></a>
    </nav>
  )
}

export default Nav