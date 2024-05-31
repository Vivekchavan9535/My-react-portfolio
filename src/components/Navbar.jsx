import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { LuMenu } from 'react-icons/lu'
import Home from './Home'
import { Link } from 'react-scroll';


function Navbar() {

  const links = [
    {
      id: 1,
      link: "Home"
    },
    {
      id: 2,
      link: "About"
    },
    {
      id: 3,
      link: "Projects"
    },
    {
      id: 4,
      link: "Contact"
    }
  ];





  const [openSideMenu, setOpenSideMenu] = useState(false)




  return (
    <div className='h-20 w-full bg-white flex justify-between items-center lg:px-20 px-10 drop-shadow-md fixed z-[1] top-0 left-0 cursor-pointer'>

      <div>
        <h1 className='font-bold text-2xl'>Vivek.Dev</h1>
      </div>

      <ul className='lg:flex gap-5 font-semibold text-xl hidden '>

        {links.map(({ id, link }) => (

          <Link key={id} to={link} smooth={true} duration={500}>{link}</Link>
        ))}


      </ul>

      <div onClick={() => setOpenSideMenu(!openSideMenu)} className=' lg:hidden flex justify-center items-center text-black '>
        <LuMenu size={30} />

        {openSideMenu && (

          <div onClick={(e) => { e.stopPropagation() }} className=' bg-white absolute h-screen w-full right-0 top-0 left-0 bottom-0 z-[2] p-10 xl:hidden'>

            <span onClick={() => setOpenSideMenu(!openSideMenu)} className='flex justify-end'><IoClose size={30} /></span>


            <ul className='h-full w-full flex flex-col justify-center items-center  gap-20 font-semibold text-2xl'>
              {links.map(({ id, link }) => (
                <Link onClick={()=>setOpenSideMenu(!openSideMenu)} key={id} to={link} smooth={true} duration={500}>{link}</Link>
              ))}
            </ul>



          </div>
        )}

      </div>



    </div >

  )
}

export default Navbar