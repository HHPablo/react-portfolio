import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GoMarkGithub} from 'react-icons/go'
import {FaInstagramSquare} from 'react-icons/fa'
import './header.css'
const HeaderSocials = () =>{
  return (
    <div className = 'header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><GoMarkGithub/></a>
        <a href="https://instagram.com" target="_blank"><FaInstagramSquare/></a>
    </div>
  )
}

export default HeaderSocials