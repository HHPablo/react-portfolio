import React from 'react'
import './services.css'
import {AiOutlineCheck} from "react-icons/ai"
const Services =() => {
  return (
    <section id ='services'>
      <h5>que ofrezco</h5>
      <h2>SKILLS</h2>

     <div className= "container services__container">
       <article className="service">
         <div className="service__head">
           <b><h3> HABILIDADES</h3></b>
           <small> Tecnológicas</small>
           </div>

        <ul className="service__list">
         <li>
         <AiOutlineCheck className='service__list-icon'/>
         <p>Programación orientada a objetos</p>
         </li>
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Consultas avanzas a Bases de datos</p>
         </li>
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Sistema de control de versiones GIT</p>
         </li>
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Cloud Computing (Google)</p>
         </li>
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Java Spring Boot</p>
         </li>
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Implementación de API's REST</p>
         </li>
         </ul>
       </article>
                  {/*END OF UI*/}

                <article className="service">
         <div className="service__head">
           <h3> HABILIDADES</h3>
           <small>Personales</small>
           </div>
           <ul className="service__list">
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Carnet de conducir y vehículo propio</p>
         </li>
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Español (Nativo) - Inglés (Alto)</p>
         </li>
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Trabajador en equipo</p>
         </li>
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Resolutivo</p>
         </li>
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Autodidacta</p>
         </li>
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Apasionado por la tecnología</p>
          </li>
         </ul>
       </article>
       </div>
    </section>

  )
}

export default Services