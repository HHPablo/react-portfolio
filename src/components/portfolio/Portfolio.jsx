import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Logo_FondoBlanco.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data =[
  {
    id:1,
    image: IMG1,
    title: "Aplicación movil Compra & Venta",
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18325767-NFT-Marketplace-Landing-Page'
  },
  {
    id:2,
    image: IMG2,
    title: "Crypto Currency DashBoard & Financial Visualization",
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18325767-NFT-Marketplace-Landing-Page'
  },
  {
    id:3,
    image: IMG3,
    title: "Crypto Currency DashBoard & Financial Visualization",
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18325767-NFT-Marketplace-Landing-Page'
  },
  {
    id:4,
    image: IMG4,
    title: "Crypto Currency DashBoard & Financial Visualization",
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18325767-NFT-Marketplace-Landing-Page'
  },
  {
    id:5,
    image: IMG5,
    title: "Crypto Currency DashBoard & Financial Visualization",
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18325767-NFT-Marketplace-Landing-Page'
  },
  {
    id:6,
    image: IMG6,
    title: "Crypto Currency DashBoard & Financial Visualization",
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18325767-NFT-Marketplace-Landing-Page'
  },
];

const Portfolio = () => {
  return (
    <section id ='Portfolio'>
      <h5>proyectos recientes</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image,title,github,demo}) =>{
          return(
          <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'><b>Github</b></a>
          <a href={demo} className='btn btn-primary' target='_blank'><b>Live Demo</b></a>
          </div>
        </article>
        )
      })
    }
      </div>
     
    </section>
    
  )
}

export default Portfolio