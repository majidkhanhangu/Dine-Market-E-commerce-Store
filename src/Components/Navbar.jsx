import React, { useEffect, useState } from 'react'
import {  Link, NavLink } from 'react-router-dom'
import image from '../assets/Logo.webp'
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { TbLayoutNavbarFilled } from "react-icons/tb";


const Navbar = () => {
  const [open, setOpen] = useState (true);
  function togglenavbar (){
      setOpen(op =>  !op)
  }
  useEffect(() => {
    window.addEventListener("resize",function(){
      if(window.innerWidth > 1024){
        setOpen(true)
  
        console.log("gray")
      }else{
        setOpen(false)
        console.log("less")
      }
    })
  
  },[])

  
  return (
  
   <div className='header mr-20 ml-20 mt-10 font-sore'>
    <nav className='flex justify-between items-center mt-2 mb-2 mr-4 ml-4'>
        <div className='logo-div'>
          <img src={image} alt="" />
        </div>
          <ul className={`flex ${open?"block":"hidden"} flex-col lg:static lg:h-auto absolute lg:w-auto w-full h-screen top-0 left-0 items-center justify-center bg-white z-10 lg:flex-row gap-12 decoration-inherit text-base`}>
            <li><NavLink to="female">Female</NavLink></li>
            <li><NavLink to="male">Male</NavLink></li>
            <li><NavLink to="kids">Kids</NavLink> </li>
            <li><NavLink to="allproducts">Allproducts</NavLink></li>
          </ul>
          
          <div className=' lg:flex lg:float-end hidden border border-slate-300 rounded-md'>
          <svg className='w-6 h-6 mt-2'>{<CiSearch />}</svg>
          <input className='border-none text-xs' type="text" placeholder='What are you looking for' />
          </div>
         
          <Link to="/Shopcart">
          <button className='button-cart relative flex items-center justify-center rounded-full bg-slate-300 p-4 hover:scale-105 transition-all'>
          <button><span className='absolute text-center w-[15px] h-[15px] text-white bg-red-500 text-xs top-0 right-1 rounded-full'>0</span></button><FiShoppingCart /></button>
            </Link>
            <button onClick={togglenavbar} className='nav-toggle lg:hidden z-50 sm:visible md:visible'><TbLayoutNavbarFilled /></button>
    </nav>
   </div>
  )
}

export default Navbar