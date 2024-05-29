
import { Sliderswip } from '../Constants';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import './styles.css';
// import required modules
import { FreeMode, } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getid } from '../reduxToolkit/Counterslice';




const Productsection = () => {

  const dispatch = useDispatch()
  console.log(dispatch(getid()))
  
  return (
    <div className='product-main-section font-sore lg:mr-24 lg:ml-24'>
    <div className='product-min-heading text-center items-center'>
    <span className='font-bold text-haze text-xs leading-5'>PRODUCTS</span>
    <h2 className='text-black text-4xl font-bold leading-10 mt-3'>Check What We Have</h2>
    </div>
      <div className='swipper-main flex mt-10 '>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
            <div className='outer-section '>
              {Sliderswip.map((Sliderswip,index)=>(
                <SwiperSlide>
                <div className='inner-first-div hover:scale-110 transition-all' onClick={() => dispatch(getid(Sliderswip.id))}>
                <Link to="/pro">
            <div className='outer-section hover:scale-110 transition-all lg:flex '>
              <img  className='w-[100%] h-[100%]' src={Sliderswip.image} alt="" />
              <p className='text-black text-mazy font-semibold leading-6 mt-2'>{Sliderswip.text}</p>
              <p className='text-black text-fazy font-bold'>{Sliderswip.price}</p>
            </div>
            </Link>
            </div>
      </SwiperSlide>
              ))}
            </div>
        </Swiper>
     
     </div>
      </div>
    
  )
}

export default Productsection