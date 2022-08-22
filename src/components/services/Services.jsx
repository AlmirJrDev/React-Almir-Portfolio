import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Gostaria de</h5>
      <h2>Aprender</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Desing</h3>
          </div>  

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Entender além do código</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Melhor acesso ao publico</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Melhor ambiente</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Intepretação e Clareza</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mercado em Alta</p> 
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Mobile Developer</h3>
          </div>  

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Quase tudo hojé está na palma da mão</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Muito mais acesso para renovar</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Conhecimento em outras formas</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ajudar em vidas</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Facilitação</p> 
            </li>
          </ul>
        </article>

     
      </div>
    </section>
  )
}

export default Services