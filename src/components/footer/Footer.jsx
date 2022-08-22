import React from 'react'
import "./footer.css"
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Almir Jr</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Conhecer</a></li>
        <li><a href="#experience">Habilidades</a></li>
        <li><a href="#services">Quero Aprender</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/almirjrdev/"><BsLinkedin /></a>
        <a href="https://github.com/AlmirJrDev"><BsGithub /></a>
        <a href="https://www.instagram.com/almirjrag/"><BsInstagram /></a>
      </div>  

      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials & AlmirJrDev. Todos os direitos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer