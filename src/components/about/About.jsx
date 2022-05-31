import './about.css'
import React from 'react'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFillFolderSymlinkFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id = 'about'>
    <h5>Get to Know</h5>
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
        <h5>Experiencia</h5>
        <small>DAM</small>
        </article>

      <article className='about__card'>
        <FiUsers className='about__icon'/>
        <h5>Empresas</h5>
        <small>ASG-SI</small>
        </article>

      <article className='about__card'>
        <BsFillFolderSymlinkFill className='about__icon'/>
        <h5>Proyectos</h5>
        <small>Mira mis proyectos</small>
      </article>
    </div>

<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe architecto ab officia nostrum quae omnis laudantium enim dolorum consequuntur doloremque soluta vitae quo earum ipsam, exercitationem voluptas, adipisci quod provident!
</p>

<a href="#contact" className='btn btn-primary'>Hablemos</a>

</div>
    </div>
    </section>
  )
}

export default About