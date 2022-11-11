import React from 'react';
import  './Slider.css'
import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
//Import Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//Import Slider Product
import {SliderProducts} from '../../data/products'
const Slider = () => {
  return (
    <div className='s_container'>
        <Swiper
        className='mySwiper'
        modules={[Pagination, Navigation]}
        loopFillGroupWithBlank={true}
        navigation={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true} 
        >
        {SliderProducts.map((product, i) => (
            <SwiperSlide>
                <div className="s_left">
                    <div className="name">
                        <span>{product.name}</span>
                        <span>{product.detail}</span>
                        
                    </div>
                    <span>{product.price}$</span>
                    <div>Shop Now</div>
                    <img src={product.img} alt="product-img" className='img_p' />
                </div>
            </SwiperSlide>
        )
        )}
           
        </Swiper>
    </div>
  )
}

export default Slider