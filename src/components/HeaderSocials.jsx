import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'


function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://github.com/cirourrustarazu" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://www.linkedin.com/in/ciro-urrustarazu-966954239/" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://dribbble.com/" target="_blank" rel="noreferrer"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials