import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Dask Dark Pc.png'
import IMG2 from '../../assets/pokedex.png'
import IMG3 from '../../assets/TodoList.png'
import IMG4 from '../../assets/calculadora.png'
import IMG5 from '../../assets/weatherapp.png'
import IMG6 from '../../assets/countdown.png'
import IMG7 from '../../assets/Timepomodoro.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Portfolio</h5>
      <h2>Meus Projetos</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
           <h3>Dashboard | Modo Escuro</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com/AlmirJrDev/Dash" className='btn' target={'_blank'}>Git Repositories</a>
           <a href="https://almirjrdev.github.io/Dash/" className='btn btn-primary' target={'_blank'}>GitPages</a>
           </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
           <h3>Pokédex | JS & API</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com/AlmirJrDev/Pok-dex" className='btn' target={'_blank'}>Git Repositories</a>
           <a href="https://almirjrdev.github.io/Pok-dex/" className='btn btn-primary' target={'_blank'}>GitPages</a>
           </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
           <h3>To-Do-List | React</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com/AlmirJrDev/ToDoListRocketseat" className='btn' target={'_blank'}>Git Repositories</a>
           <a href="https://to-do-list-rocketseat-ten.vercel.app/" className='btn btn-primary' target={'_blank'}>GitPages</a>
           </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
           <h3>Calculadora | JavaScript</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com/AlmirJrDev/Calculator" className='btn' target={'_blank'}>Git Repositories</a>
           <a href="https://almirjrdev.github.io/Calculator/" className='btn btn-primary' target={'_blank'}>GitPages</a>
           </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
           <h3>Weather App | API</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com/AlmirJrDev/Weather-App" className='btn' target={'_blank'}>Git Repositories</a>
           <a href="https://almirjrdev.github.io/Weather-App/" className='btn btn-primary' target={'_blank'}>GitPages</a>
           </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
           <h3>CountDown | JavaScript</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com/AlmirJrDev/Countdown" className='btn' target={'_blank'}>Git Repositories</a>
           <a href="https://almirjrdev.github.io/Countdown/" className='btn btn-primary' target={'_blank'}>GitPages</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG7} alt="" />
          </div>
           <h3>TimePomodoro | React & TypeScript</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com/AlmirJrDev/TimePomodoro" className='btn' target={'_blank'}>Git Repositories</a>
           <a href="https://time-pomodoro.vercel.app/" className='btn btn-primary' target={'_blank'}>GitPages</a>
          </div>
        </article>
      </div>
      </section>
  )
}

export default Portfolio