import React from 'react'
import CV from '../../assets/cv.pdf'
const CTA = () =>{
  return (
    <div className='cta'>
        <a href={CV} download className='btn btn-primary'><b>Descargar CV</b></a>
        <a href="#contact" className= 'btn btn-primary'><b>Contacta conmigo</b></a>
    </div>
  )
}

export default CTA