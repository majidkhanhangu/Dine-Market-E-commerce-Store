import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import image from '../assets/header-img.webp'
import image1 from '../assets/Featured1.webp'
import image2 from '../assets/Featured1 (1).webp'
import image3 from '../assets/Featured3.webp'
import image4 from '../assets/Featured4.webp'
import Promotion from './Promotion';
import Productsection from './Productsection';
import Jewllery from './Jewllery';
import Subscribe from './Subscribe';
import Contactus from './Contactus';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
    <div className=' lg:flex main-container gap-24 p-10 font-sore lg:mr-24 lg:ml-24 mt-12 '>
    <div className='span-head-div gap-8 mt-5 justify-center'>
    <div className='span-div bg-lora mt-7 h-10 w-28 justify-center items-center flex rounded-md'>
    <span className='w-96 text-blue-800 text-center items-center'>Sale 70%</span>
    </div>
    <div className='head-div mt-7'>
    <h1 className='text-6xl font-bold items-center justify-center'>An Industrial<br/> Take on<br/> Streetwear</h1>
    <p className='mt-7 text-base'>Anyone can beat you but no one can<br/> beat your outfit as long as you wear<br/> Dine outfits.</p>
    </div>
    <Link to="/Allproducts">
    <button className='flex gap-3 mt-7 bg-black text-white p-4 text-base items-center'><FiShoppingCart /> Start <br/> Shopping</button>
    </Link>
    <div className='small-img-div lg:flex gap-3 mt-6'>
      <img src={image1} alt="" />
      <img src={image2} alt="" />
      <img src={image3} alt="" />
      <img src={image4} alt="" />
    </div>
    </div>
    <div className='big-img-div  lg:w-[600px] h-[550px] bg-backee  rounded-full mt-0'>
    <img className='lg:w-[auto] h-[100%]' src={image} alt="" />
    </div>
    </div>
    <Promotion/>
    <Productsection/>
    <Jewllery/>
    <Subscribe/>
    <Contactus/>
    </>
  )
}
 
export default Home
