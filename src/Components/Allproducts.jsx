import React from 'react'
import { Allpros } from '../Constants'
import { Link } from 'react-router-dom'
import Contactus from './Contactus'

const Allproducts = () => {
  

    return (
    <div className='allpro-main font-sore mt-10'>
      <div className="all-pro-inner lg:grid grid-cols-4 justify-between ml-14 mr-8 gap-16 justify-items-center">
        {Allpros.map((Allpros,index) => (
          <div className="pros-inner-sec">
          <Link>
            <div className="img-sec">
             <img className='w-[100%] h-[100%]' src={Allpros.image} alt="" />
            </div>
            <div className="para-price">
            <p className='text-xl text-black leading-6 mt-4 font-semibold'>{Allpros.text1}</p>
            <p className='text-bene leading-3 text-femlee mt-2'>{Allpros.text2}</p>
            <p className='ext-jene text-xl mt-4 font-semibold'>{Allpros.price}</p>   
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

export default Allproducts