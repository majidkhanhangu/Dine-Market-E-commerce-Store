import React from 'react'
import { AiOutlineShopping } from "react-icons/ai";
import Contactus from './Contactus';

const Shopcart = () => {
  return (
      <>
    <div className='shop-card-main font-sore m-[4rem] font-bold'>
    <div className="shop-inner-main">
      <h1 className='text-2xl'>Shopping Cart</h1>
    </div>
    <div className="icon-main-2 flex justify-center items-center mt-28 ">
    <div className="icon-sec">
      <div className="icon text-9xl flex items-center justify-center">
      <AiOutlineShopping />
      </div>
      <p className='font-bold text-3xl'>Your shopping bag is empty</p>
    </div>
    </div>
    </div>
    <div className='female-footer mt-14'>
      <Contactus/>
      </div>
    </>
  )
}

export default Shopcart