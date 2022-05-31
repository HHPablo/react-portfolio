import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {useRef} from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_wipga9f', 'template_vwi614x', form.current, '3zsxIefnwwy0wL1Zy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    
    <section id ='contact'>
      
      <h2>Contacto</h2>

      <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdEmail className ='contact__option-icon'/>
          <h4>Email</h4>
          <h5>joosepaa@gmail.com</h5>
          <a href='mailto:joosepaa@gmail.com' target="_blank">Envia un mensaje</a>
        </article>

        <article className="contact__option">
          <BiMessageRoundedDetail className ='contact__option-icon'/>
          <h4>Mensaje</h4>
          <h5>Pablo Fernandez</h5>
          <a href='https://m.me' target="_blank">Envia un mensaje</a>
        </article>

        <article className="contact__option">
          <AiOutlineWhatsApp className ='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+34 650645881</h5>
          <a href='https://api.whatsapp.com/send?phone=34650645889' target="_blank">Envia un mensaje</a>
        </article>
      </div>


      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Tu nombre' required/>
        <input type="email" name= 'email' placeholder ='Tu Email' required/>
        <textarea name='message' rows ="7" placeholder="Mensaje" required></textarea>
        <button type='submit' className='btn btn-primary'>Enviar mensaje</button>
      </form>

      </div>
    </section>
  )
}

export default Contact