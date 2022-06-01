import React from 'react'
import './header.css'
import CTA from './CTA'
import Img4 from '../../assets/Img4.jpeg'
import HeaderSocials from './HeaderSocials'


const Header =() =>{
  return (
   <header>
     <div className="container header__container">
       
       <h1> Pablo Fernández </h1>
       <h5 className='text-light'> Junior developer</h5>
       <CTA />
        <div className = "header__me-image">
      <img src={Img4} alt="header__me-image"/>
      </div>
       <HeaderSocials/>

      
     </div>
   </header>
  )
}

export default Header
