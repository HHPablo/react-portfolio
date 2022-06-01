import './about.css'
import React from 'react'
import ME from '../../assets/img1_2.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFillFolderSymlinkFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id = 'about'>
    <h5>conoceme</h5>
    <h2>Sobre mi</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className = "about__me-image">
      <img src={ME} alt="About Image"/>
      </div>
      </div>

<div className="about__content">
    <div className="about__cards">
      
      <article className='about__card'>
        <FaAward className='about__icon'/>
        <h5>Estudios</h5>
        <small>Aplicaciones Multiplataforma</small>
        </article>
        
      <a href="https://www.asg-si.com/" target='_blank'><article className='about__card'>
        <FiUsers className='about__icon'/>
        <h5>Empresa actual</h5>
        <small>ASG-SI</small>
        </article>
        </a>

        <a href="#Portfolio"><article className='about__card'>
        <BsFillFolderSymlinkFill className='about__icon'/>
        <h5>Proyectos</h5>
        <small>Mira mis proyectos</small>
        
      </article>
      </a>
    </div>

<p>
Me considero una persona resolutiva y polivalente, mis diferentes trabajos en diferentes ámbitos me han aportado perspectiva y conocimientos sobre como trabajar en equipo y adaptarme a las diferentes necesidades de cada puesto.
A causa de la pandemia, me he replanteado mi vida profesional, enfocándome a lo que realmente me entusiasma, el mundo tecnológico. Más concretamente al desarrollo de Software.
</p>

<a href="#contact" className='btn btn-primary'><b>Hablemos</b></a>

</div>
    </div>
    </section>
  )
}

export default About