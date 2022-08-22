import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/almirjrdev/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/AlmirJrDev" target="_blank"><FaGithub/></a>
        <a href="https://api.whatsapp.com/send?phone=5544999913452&text=Ol%C3%A1%20Almir%20Jr!" target="_blank"><BsWhatsapp /></a>
    </div>
  )
}

export default HeaderSocials