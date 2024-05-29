import React from 'react'
import { femalesection } from '../Constants'
import { Link } from 'react-router-dom'
import Contactus from './Contactus'

const Female = () => {
  return (
    <>
    <div className='female-section-main font-sore mt-10'>
      <div className="female-section-inner-sec lg:grid justify-between ml-14 mr-8 gap-16 justify-items-center grid-cols-4">
        {femalesection.map((femalesection,index) => (
        <Link>
        <div className="female-sec-small">
       <img className='w-[100%] h-[100%]' src={femalesection.image} alt="" />
        </div>
        <div className="para-price flex flex-col">
        <h1 className='text-xl text-black leading-6 mt-4 font-semibold'>{femalesection.text1}</h1>
        <p className='text-bene leading-3 text-femlee mt-2'>{femalesection.text2}</p>
       <p className='text-jene text-xl mt-4 font-semibold'>{femalesection.price}</p>
        </div>
        </Link>
        ))}
      </div>
      <div className='female-footer mt-10'>
      <Contactus/>
      </div>
    </div>
    </>

  )
}

export default Female