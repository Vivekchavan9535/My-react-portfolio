import React from 'react'
import { FiMail } from 'react-icons/fi'
import { LiaMapMarkedAltSolid } from 'react-icons/lia'

function Contact() {
  return (
    <div id="Contact" className='w-full flex flex-col  p-20'>

      <div>
        <h1 className='text-blue-400 font-semibold text-2xl'>Contact</h1>
        <h2 className='text-4xl font-bold py-5'>Don't be shy! Hit me up! 👇</h2>
      </div>

      <div className='flex py-10  items-center gap-20 flex-wrap'>

        <div >
          <span className='flex lg:justify-center items-center'><LiaMapMarkedAltSolid size={40} className='text-blue-400' /><h1 className='text-2xl font-bold'>Location</h1></span>


          <h2 className='font-semibold'>Kalaburgi, Karnataka</h2>
        </div>

        <div>
          <span className='flex lg:justify-center items-center '><FiMail size={40} className='text-blue-400' /> <h1 className='text-2xl font-bold'>Mail</h1></span>

          <h2 className='font-semibold'>Vivekchavan942@gmail.com</h2>
        </div>


      </div>


    </div>
  )
}

export default Contact