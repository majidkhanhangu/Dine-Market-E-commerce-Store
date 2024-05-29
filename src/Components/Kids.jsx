import React from 'react'
import { kidssection } from '../Constants'
import Contactus from './Contactus'

const Kids = () => {
  return (
    <div className='kids-main-sec font-sore mt-10'>
      <div className="kid-inner-main grid grid-cols-4 justify-between lg:ml-14 lg:mr-8 gap-16 justify-items-center">
        {kidssection.map((kidssection,index) => (
          <div className="kids-inner">
          <div className="kids-img">
           <img className='w-[100%]' src={kidssection.image} alt="" />
          </div>
          <div className="kids-para-price">
          <p className='text-xl text-black leading-6 mt-4 font-semibold'>{kidssection.text1}</p>
          <p className='text-bene leading-3 text-femlee mt-2'>{kidssection.text2}</p>
          <p className='text-jene text-xl mt-4 font-semibold'>{kidssection.price}</p>
          
          </div>
          </div>
         
        ))}
      </div>
      <div className='female-footer mt-10'>
      <Contactus/>
      </div>
    </div>
  )
}

export default Kids