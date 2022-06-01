import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'></a>
      <ul className='permalinks'>
      <li><b><a href="#">Inicio</a></b></li>
      <li><b><a href="#about">Sobre mi</a></b></li>
      <li><b><a href="#experience">Conocimientos</a></b></li>
      <li><b><a href="#services">Habilidades</a></b></li>
      <li><b><a href="#portfolio">Portfolio</a></b></li>
      <li><b><a href="#contact">Contacto</a></b></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><BsFacebook/></a>
        <a href="https://instagram.com"><FaInstagramSquare/></a>
        <a href="https://twitter.com"><FaTwitterSquare/></a>
      </div>

       <div className="footer__copyright">
         <small><b>Copyright &copy; JPablo personal portfolio</b></small>
         
       </div>
       
    </footer>
    
  )
}

export default Footer