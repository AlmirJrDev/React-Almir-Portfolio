import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Ferramentas</h5>
      <h2>Minhas Habilidades</h2>
      <div className="container experience__container">
        <div className='experience__frontend'>
            <h3>FrontEnd Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>HTML</h4>
                  
                </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>CSS</h4>
              
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>JavaScript</h4>
              
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>React.js</h4>
              
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>React Native</h4>
             
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>TypeScript</h4>
             
              </div>
              </article>  
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Figma</h4>
             
              </div>
              </article>
            </div>
        </div>
        
        <div className='experience__backend'>
        <h3>BackEnd Development</h3>  
            <div className="experience__content">
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Node.JS</h4>
             
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Insomnia</h4>
             
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Postbird</h4>
             
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Docker</h4>
             
              </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience