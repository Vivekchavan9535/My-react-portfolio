import Aos from 'aos'
import React, { useEffect } from 'react'
import "aos/dist/aos.css"


function Aboutme() {
  useEffect(() => {
    Aos.init({ duration: 1200 })
  })

  return (
    <div id="About" className=' h-screen w-full lg:p-20 flex flex-col lg:flex-row '>

      <div data-aos="fade-up-right" className=' h-full lg:w-[50%]  overflow-hidden flex justify-center items-center'>

        <div className='px-10 pt-10'>
          <img className='h-64 rounded-xl lg:h-80 lg:w-96' src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp" alt="" />
        </div>
      </div>


      <div data-aos="fade-up-left" className=' lg:h-full lg:w-[40%] lg:p-3 w-ful p-5  flex flex-col justify-center  gap-5 '>

        <h1 className='lg:text-2xl text-blue-400 font-bold'>ABOUT ME</h1>
        <h2 className=' lg:text-4xl text-2xl font-bold'>Front-end Developer based in Kalaburgi, Karnataka 📍</h2>
        <h4>Hey, my name is Vivek Chavan, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.</h4>

        <h5>My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.</h5>
      </div>



    </div >
  )
}

export default Aboutme