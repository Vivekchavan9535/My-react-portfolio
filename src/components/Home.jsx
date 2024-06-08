import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FiGithub } from 'react-icons/fi'
import img from '../assets/vc-img.png'
import { IoLogoInstagram } from 'react-icons/io5'

function Home() {
  return (
    <div id="Home" className='min-h-[90vh] w-full bg-[#F9F9F9] mt-10 flex flex-col lg:flex-row justify-between  gap-5 lg:px-40 lg:pt-44  '>

      <div className='h-full lg:w-[50%] flex justify-center items-center'>
        <img className=' animate-blob object-cover rounded-full mt-20 lg:m-0 lg:h-96 lg:w-96 h-80 w-80 ' src={img} alt="" />
      </div>

      <div className='p-10 lg:w-[60%] flex flex-col justify-center  '>
        <h1 className='text-4xl lg:text-6xl font-bold'>Front-End React Developer</h1>
        <p className='py-5 font-semibold'>Hi, I'm Vivek Chavan. A passionate Front-end React Developer based in Kalaburgi , Karnataka 📍</p>

        <div className='flex gap-2 text-4xl lg:justify-normal justify-center items-center py-5'>

          <a href="https://www.linkedin.com/in/vivek-chavan26/" target='_blank'><CiLinkedin /></a>
          <a href="https://github.com/Vivekchavan9535" target='_blank'><FiGithub /></a>
          <a href="https://www.instagram.com/its_vivek_chavann/" target='_blank'><IoLogoInstagram /></a>

        </div>

        <div className=' flex flex-col lg:flex-row items-center lg:pt-22 h-full w-full gap-5'>

          <h1 className='hidden lg:flex font-bold text-2xl shrink-0'>Tech Stack |  </h1>

          <h1 className='lg:hidden font-bold text-2xl shrink-0 border-b-2 border-zinc-800'>Tech Stack  </h1>



          <ul className='flex gap-4 px-5 shrink-0 grid-2 justify-center items-center'>

            <li className='hover:scale-150 duration-200'><img className='h-10' src="https://cdn-icons-png.flaticon.com/512/174/174854.png" alt="" /></li>
            <li className='hover:scale-150 duration-200'> <img className='h-10' src="https://cdn-icons-png.flaticon.com/512/11516/11516361.png" alt="" /></li>
            <li className='hover:scale-150 duration-200'><img className='h-10' src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="" /></li>
            <li className='hover:scale-150 duration-200'><img className='h-10' src="https://cdn-icons-png.flaticon.com/512/753/753244.png " alt="" /></li>
            <li className='hover:scale-150 duration-200'><img className='h-10' src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png" alt="" /></li>

          </ul>



        </div>




      </div>


    </div>




  )
}

export default Home