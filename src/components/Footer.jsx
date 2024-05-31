import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FiGithub } from 'react-icons/fi'
import { IoLogoInstagram } from 'react-icons/io5'

function Footer() {
  return (
    <div className='h-40 bg-[#2D2E32] text-white flex flex-col lg:flex-row justify-evenly items-center p-5'>

      <div className='lg:text-2xl  font-bold'>
        <h1>Copyright © 2024. All rights are reserved</h1>
      </div>

      <div className='flex gap-5 text-4xl'>
        <a href="https://www.linkedin.com/in/vivek-chavan26/" target='_blank'><CiLinkedin /></a>
        <a href="https://github.com/Vivekchavan9535" target='_blank'><FiGithub /></a>
        <a href="https://www.instagram.com/its_vivek_chavann/" target='_blank'><IoLogoInstagram /></a>

      </div>




    </div>
  )
}

export default Footer