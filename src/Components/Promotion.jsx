import React from 'react'
import hazee from '../assets/event1.webp'
import eventimg from '../assets/event2.webp'
import eventimg2 from '../assets/event3.webp'

const Promotion = () => {
  return (
    <div className='promotion mt-7 p-16 font-sore lg:mr-20 lg:ml-20'>
      <div className='Event text-center items-center '>
      <span className='font-bold text-haze text-xs leading-5'>PROMOTION</span>
      <h2 className='text-black text-4xl font-bold leading-10 mt-3'>Our Promotion Events</h2>
      </div>
      <div className='card-div mt-10 justify-between gap-[1rem]  flex lg:flex-row flex-col'>
      <div className='Section-1 '>
       <div className='Summer-section bg-lazy items-center justify-between lg:flex lg:pr-[2rem] lg:pl-[2rem]'>
        <div className='heading-para'>
         <h3 className='text-black block font-bold text-3xl '>GET UP TO<span>60%</span></h3>
         <p className='leading-6 font-normal text-xl mt-3'>For the summer season</p>
        </div>
        <img className=' mb-3' src={hazee} alt="" />
       </div>
       <div className='get-section  bg-boom  pt-[3rem] pl-[2rem] pb-[2rem] pr-[2rem]  flex flex-col items-center justify-center sm:mt-6'>
       <h3 className='font-bold text-4xl text-white'>GET 30% OFF</h3>
       <p className='text-white mt-2'>USE PROMO CODE</p>
       <button className='text-white border-none rounded-lg bg-butonbg font-bold pt-[0.5rem] lg:pl-[2.5rem] pb-[0.5rem] lg:pr-[2.5rem]'>DINEWEEKENDSALE</button>  
       </div>
      </div>
      <div className='Section-2 flex lg:flex-row flex-col lg:justify-between lg:items-center gap-4 '>
       <div className='Sweat-shirt'>
      <div className='shirt-para flex flex-col justify-center items-center text-black bg-bannbg'>
      <div className='shirt-price mt-4 block relative w-[100%] ml-[2rem]'>
      <p>Flex Sweatshirt</p>
      <span className='text-xl'>$100.00</span>
      <span className='ml-4 text-xl font-bold'>$75.00</span>
      </div>
      <img className='pt-4 w-72 h-96' src={eventimg} alt="" />
      </div>
       </div>
       <div className='Sweat-shirt'>
      <div className='shirt-para flex flex-col justify-center items-center text-black bg-baneebg'>
      <div className='shirt-price mt-4 block relative w-[100%] ml-[2rem]'>
      <p>Flex Push Button Bomber</p>
      <span className='text-xl'>$255.00</span>
      <span className='ml-4 text-xl font-bold'>$190.00</span>
      </div>
      <img className='pt-4 w-72 h-96' src={eventimg2} alt="" />
      </div>
       </div>
      </div>
      </div>
    </div>
  )
}

export default Promotion