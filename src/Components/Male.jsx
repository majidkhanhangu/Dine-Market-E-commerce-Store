import React from 'react'
import { malesection } from '../Constants'
import Contactus from './Contactus'
import { Link } from 'react-router-dom'


const Male = () => {
  return (
    <div className='male-sec-main font-sore mt-10'>
      <div className="male-inner-main lg:grid grid-cols-4 justify-between ml-14 mr-8 gap-16 justify-items-center">
      {malesection.map((malesection,index) => (
        <div className="male-inner">
        <Link>
          <div className='male-img'>
            <img className='w-[100%] h-[100%]' src={malesection.image} alt="" />
          </div>
          <div className='male-para-price'>
            <p className='text-xl text-black leading-6 mt-4 font-semibold'>{malesection.text1}</p>
            <p className='text-bene leading-3 text-femlee mt-2'>{malesection.text2}</p>
            <p className='ext-jene text-xl mt-4 font-semibold'>{malesection.price}</p>
          </div>
          </Link>
        </div>
      ))}
      </div>
      <div className='male-footer mt-10'>
      <Contactus/>
      </div>
    </div>
  )
}

export default Male