import React from 'react'
import './about.css'
import ME from '../../assets/almirdesenho.jpeg'
import{FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import{VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Vem me</h5>
      <h2>Conhecer</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Academy</h5>
              <small>1 ano estudo Front-End <br />
              Rocketseat <br />
              Dev Club e ADS Unipar</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Buscando Experiencias</h5>
              <small> Front End
              </small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projetos</h5>
              <small>25 Completos</small>
            </article>
          </div>

          <p>Eu sou Almir Jr , Tenho 19 anos, comecei estudar programação em janeiro de 2022, faço parte da DevClub, Rocketseat, e junto comecei a fazer minha faculdade de 
            Análise e Desenvolvimento de Sistemas. De inicio começei a estudar a Full-Stack mas me aprofundei em programação Front-end, quero me dedicar cada vez mais e buscar sempre conhecimento. 
          </p>

          <a href="#contact" className='btn btn-primary'>Vamos Conversar</a>
        </div>
      </div>
    </section>
  )
}

export default about