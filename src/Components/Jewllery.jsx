import React from 'react'
import { Vintage, Workshop } from '../Constants'
import { Link } from 'react-router-dom'

const Jewllery = () => {
  return (
    <div className='jewllery-main-section mt-10 font-sore lg:mr-24 lg:ml-24'>
      <div className='jewllery-heading  lg:text-end w-[50%] ms-auto lg:pl-[1rem] lg:pr-[10rem] lg:pt-[2rem] lg:pb-[2rem]'>
      <h1 className='text-4xl font-bold leading-10'>Unique and<br/> Authentic Vintage<br/> Designer Jewellery</h1>
      </div>
      <div className='lg:grid lg:grid-cols-2'>
      <div className='grid grid-cols-2 lg:mb-6'>
      {Vintage.map((Vintage,index) =>(
            <div className="head-para-sec">
        <h1 className='text-1xl leading-5 mb-4 font-bold'>{Vintage.heading}</h1>
        <p className='font-light text-nazy'>{Vintage.paragraph}
      </p>
      </div>
      ))}
      </div>
      <div className='workshop-sec '>
      {Workshop.map((Workshop,index) => (
      <div className='lg:flex gap-6'>
      <img className='w-[50%] h-[50%]' src={Workshop.image} alt="" /> 
      <div className='workshop-sec-1'>
      <p className='text-nazy leading-9 font-light'>{Workshop.paragraph}</p> 
      <Link to="/Allproducts">
      <button className='bg-black text-white text-base items-center p-4 mt-5'>See All<br/> Product</button>
      </Link>
      </div>
      </div>
      ))}
      </div>
      </div>
      </div>
    
  )
}

export default Jewllery