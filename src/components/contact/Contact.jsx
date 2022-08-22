import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vayb9a4', 'template_ry8uqu6', form.current, 'DW-kGTdaPGoXjT3ki')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Entrar em contato</h5>
      <h2>Contate-me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className='contact__option'>
        <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>almirjrag@gmail.com</h5>  
          <a href="mailto:almirjrag@gmail.com">Mande uma Mensagem</a>
        </article>
        <article className='contact__option'>
        <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatapps</h4>
          <h5>(44) 99991-3452</h5>  
          <a href="https://api.whatsapp.com/send?phone=5544999913452&text=Ol%C3%A1%20Almir%20Jr!" target="_blank">Mande um Aló</a>
        </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Seu nome completo' required />
          <input type="email" name='email' placeholder='Seu Email' required  />
          <textarea name="message"  rows="7" placeholder='Sua mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button> 
        </form>
      </div>
    </section>
  )
}

export default Contact