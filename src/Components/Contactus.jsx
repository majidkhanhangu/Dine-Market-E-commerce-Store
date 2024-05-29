import React from 'react'
import { companyLinks, contactLinks, footerlogopara, supportLinks } from '../Constants'

const Contactus = () => {
  return (
    
   <>
    <div className='contact-us-main-section  justify-between p-[6rem] border-b-2 border-b-slate-500 lg:flex
     font-sore'>
      <div className="logo-icon lg:w-[20%]">
      {footerlogopara.map((footerlogopara,index) => (
         <div className='logo-main'>
         <img src={footerlogopara.image} alt="" />
         <div className='para mt-6'>
          {footerlogopara.paragraph}
         </div> 
         <div className="icon mt-6 gap-4 flex">
         <div className='icon-1 flex text-xl w-10 h-10 justify-center items-center bg-icone rounded-momo'>
         {footerlogopara.icontw}
         </div>
         <div className='icon-2 flex text-xl w-10 h-10 rounded-momo justify-center items-center bg-icone'>
          {footerlogopara.iconfb}
         </div>
         <div className='icon-3 flex text-xl w-10 h-10 rounded-momo justify-center items-center bg-icone'>
          {footerlogopara.iconli}
         </div>
         </div>
         </div>
        
         ))}
      </div>
      <div className="company space-y-2">
      <h1 className='text-hene font-bold'>Company</h1>
      {companyLinks.map((Link,index) => (
        <li className='list-none' key={index}>
        <a
        href={Link.href}
        className='text-hene'
        >
        {Link.text}
        </a>
        </li>
      ))}
      
      </div>
      <div className="support space-y-2">
      <h1 className='text-hene font-bold'>support</h1>
      {supportLinks.map((Link,index) => (
        <li className='list-none' key={index}>
         <a
         href={Link.href}
         className='text-hene'
         >
         {Link.text}
         </a>
        </li>
      ))}
      </div>
      <div className="contact space-y-2">
      <h1 className='text-hene font-bold'>Contact</h1>
      {contactLinks.map((Link,index) => (
        <li className='list-none' key={index}>
          <a
          href={Link.href}
          className='text-hene' 
          >
          {Link.text}
          </a>
        </li>
      ))}
      </div>
    </div>
    <div className='footer-section mt-6 lg:flex justify-between font-sore lg:mr-36 lg:ml-36'>
      <div className='sec-1 mt-3'>
       <p>Copyright ©<br/> 2024 Dine<br/> Market</p>
      </div>
      <div className='sec-1 mt-3'>
        <p>Design by. <br/><span className='font-bold'>Morosoft Labs</span></p>
      </div>
      <div className='sec-1 mt-3'>
      <p>Code by. <br/><span className='font-bold'>Abdul Majid on github</span></p>
      </div>
    </div>

</>
   
  )
}

export default Contactus