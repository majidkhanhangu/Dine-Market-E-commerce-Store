import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { Productsdesc } from '../Constants';
import Contactus from './Contactus';

const Productdetail = () => {
 const select = useSelector(e => (e.slice.value))
 const detail = Productsdesc.find(e => (e.id == select))

 const [count, setCount] = useState(1);
 const increment = () => {
  setCount(count + 1);
  
};
const decrement = () => {
  setCount(count - 1);
};
 const handleSpanClick = () => {
};

  return (
    <>
    <div className='pro-detail-main p-20 font-sore'>
      <div className="main-sec lg:flex lg:gap-7 ">
        <div className="main-1">
         <img className='w-[100px] h-[100px]' src={ detail&&detail.smallimg} alt="" />
        </div>
        <div className="main-2  lg:w-[55%] lg:h-[100%]">
          <img className='lg:w-[80%] lg:h-[100%]' src={detail&&detail.largeimg} alt="" />
        </div>
        <div className="main-3 mt-16">
        <div className='head'>
        <h1 className='font-normal text-2xl leading-8'>{detail&&detail.descraption}</h1>
        <p className='font-semibold text-xl opacity-30'>{detail&&detail.type}</p>
        </div>
        <div className='size mt-8'>
          <h1>SELECT SIZE</h1>
          <ul className='gap-4 flex mt-3'>
          <li className='h-[40px] w-[40px] rounded-full text-nazy leading-4 font-bold justify-center flex hover:shadow-xl   shadow-md transition-shadow duration-300" items-center'>XS</li>
        <li className='h-[40px] w-[40px] rounded-full text-nazy leading-4 font-bold justify-center flex hover:shadow-xl   shadow-md transition-shadow duration-300" items-center'>S</li>
        <li className='h-[40px] w-[40px] rounded-full text-nazy leading-4 font-bold justify-center flex hover:shadow-xl   shadow-md transition-shadow duration-300" items-center'>M</li>
        <li className='h-[40px] w-[40px] rounded-full text-nazy leading-4 font-bold justify-center  flex hover:shadow-xl shadow-md transition-shadow duration-300" items-center'>L</li>
        <li className='h-[40px] w-[40px] rounded-full text-nazy leading-4 font-bold justify-center flex hover:shadow-xl shadow-md transition-shadow duration-300"  items-center'>XL</li>
          </ul>
          <div className="quantity flex mt-8 justify-between">
            <h1>Quantity:</h1>
            <span onClick={decrement} className='minus mr-3 rounded-full flex justify-center items-center bg-saze border border-saze'><FaMinus /></span>
            <span className='updated'>{count}</span>
            <span onClick={increment} className='plus ml-3 rounded-full flex justify-center items-center border border-black'><FaPlus /></span>
          </div>
          <div className="price-btn lg:flex gap-3 mt-8 justify-between">
          <button onClick={handleSpanClick} className='flex gap-3 bg-black text-white p-2 text-base items-center'><FiShoppingCart />Add to Cart</button>
          <p className='font-bold text-2xl mt-4 leading-7'>{detail&&detail.price}</p>   
          </div>
        </div>
        </div>
      </div>
      <div className="detailfooter lg:mt-[6rem]">
        <div className="pro-info flex w-[100%] h-[100px] border-b-2 border-b-slate-500">
          <h1 className='font-bold text-2xl'>Product Information</h1>
        </div>
      </div>
      <div className="para-glid mt-5 lg:grid lg:grid-cols-2">
      <div className="inner-head">
      <h1 className='font-bold text-nazy'>PRODUCT DETAILS</h1>
      </div>
      <div className="para-glide">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      </div>
      <div className="para-ul lg:grid lg:grid-cols-2 mt-10">
      <div className="inner-head">
      <h1 className='font-bold text-nazy'>PRODUCT DETAILS</h1>
      </div>
      <div className="para-glide lg:ml-4">
      <ul>
        <li className='list-disc font-bold'>Hand wash using cold water.</li>
        <li className='list-disc font-bold'>Do not using bleach.</li>
        <li className='list-disc font-bold'>Hang it to dry.</li>
        <li className='list-disc font-bold'>Iron on low temperature.</li>
      </ul>
        
      </div>
      </div>
      </div>
      <div className='pro-detail-footer mt-10'>
      <Contactus/>
      </div>
      </>
  
  )
}

export default Productdetail