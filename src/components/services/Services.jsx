import React from 'react'
import './services.css'
import {AiOutlineCheck} from "react-icons/ai"
const Services =() => {
  return (
    <section id ='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

     <div className= "container services__container">
       <article className="service">
         <div className="service__head">
           <h3> UI/UX DESING</h3>
           </div>

        <ul className="service__list">
         <li>
         <AiOutlineCheck className='service__list-icon'/>
         <p>Lorem ipsum dolor sit ame</p>
         </li>
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Lorem ipsum dolor sit ame</p>
         </li>
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Lorem ipsum dolor sit ame</p>
         </li>
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Lorem ipsum dolor sit ame</p>
         </li>
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Lorem ipsum dolor sit ame</p>
         </li>
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Lorem ipsum dolor sit ame</p>
         </li>
         </ul>
       </article>
                  {/*END OF UI*/}

                <article className="service">
         <div className="service__head">
           <h3> WEB DEVELOPEMENT</h3>
           </div>
           <ul className="service__list">
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Lorem ipsum dolor sit ame</p>
         </li>
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Lorem ipsum dolor sit ame</p>
         </li>
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Lorem ipsum dolor sit ame</p>
         </li>
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Lorem ipsum dolor sit ame</p>
         </li>
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Lorem ipsum dolor sit ame</p>
         </li>
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Lorem ipsum dolor sit ame</p>
         </li>
         </ul>
       </article>
                  {/*WEB DEVELOPEENT*/}


                  <article className="service">
         <div className="service__head">
           <h3> CREATE CONTENT</h3>
           </div>
           <ul className="service__list">
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Lorem ipsum dolor sit ame</p>
         </li>
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Lorem ipsum dolor sit ame</p>
         </li>
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Lorem ipsum dolor sit ame</p>
         </li>
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Lorem ipsum dolor sit ame</p>
         </li>
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Lorem ipsum dolor sit ame</p>
         </li>
         <li>
         <AiOutlineCheck className='service__list-icon' />
         <p>Lorem ipsum dolor sit ame</p>
         </li>
         </ul>
       </article>
                  {/*END OF cc*/}
       </div>
    </section>

  )
}

export default Services