import React from 'react'


const Subscribe = () => {
  return (
    <div className='sub-man-sec font-sore text-center mt-10 flex items-center justify-center lg:h-[90vh] flex-col'>
      <div className='sub-had-para'>
      <h1 className='text-black text-4xl font-bold leading-10'>Subscribe Our Newsletter</h1>
      <p className='text-jazy mt-6'>Get the latest information and promo offers directly</p>
      </div>
      <form className='gap-3 mt-10'>
      <input className='p-2 border border-black' type="text" placeholder='Input email adress' />
      <button className='bg-black text-white text-base items-center p-2 ml-3'>Get Started</button>
      </form>
    </div>
  )
}

export default Subscribe