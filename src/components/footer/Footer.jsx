import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>PABLO</a>
      <ul className='permalinks'>
      <li><a href="#">Inicio</a></li>
      <li><a href="#about">Sobre mi</a></li>
      <li><a href="#experience">Experiencia</a></li>
      <li><a href="#services">Servicios</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><BsFacebook/></a>
        <a href="https://instagram.com"><FaInstagramSquare/></a>
        <a href="https://twitter.com"><FaTwitterSquare/></a>
      </div>

       <div className="footer__copyright">
         <small>&copy; JPablo Portfolio</small>
       </div>
    </footer>
  )
}

export default Footer