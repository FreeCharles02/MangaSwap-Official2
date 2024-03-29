import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from "swiper";
import { Navigation, Pagination, A11y} from 'swiper';
import Link from 'next/link';

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const BarSwiper = () => {
    const imageStyle = { width: 200, height: 300 }
    return (

            <Swiper 
                 modules={[Navigation, Pagination, A11y, FreeMode]}
                 spaceBetween={-600}
                 slidesPerView={4}
                 navigation
                 pagination={{clickable: true }}
                 scrollbar={{ draggable: true }}
                 onSlideChange={() => console.log('slide change')}
                 onSwiper={(swiper) => console.log(swiper)}
                 >
                   
                     <SwiperSlide> 
                        <Link href='../product-pages/productlisting'>
                        <img style={imageStyle} src='https://i.imgur.com/o4lXKjM.jpg' 
                        href='../product-pages/newproductpage'/> 
                        </Link>
                     </SwiperSlide>
                     <SwiperSlide> 
                        <Link href='../product-pages/productlisting'> 
                        <img style={imageStyle} src='https://i.imgur.com/NN3cHbp.jpg' 
                        href='#' alt=''/> 
                     </Link> 
                     </SwiperSlide>
                     <SwiperSlide> 
                        <Link href='../product-pages/productlisting'> 
                        <img  style={imageStyle} src='https://i.imgur.com/UyRf12t.jpg' href='#' alt=''></img> 
                        </Link> 
                        </SwiperSlide>
                     <SwiperSlide> 
                        <Link href='../product-pages/productlisting'> 
                        <img style={imageStyle} src='https://i.imgur.com/pLDb8qi.jpg' href='#' alt=''/> 
                        </Link> 
                        </SwiperSlide>
                     <SwiperSlide> 
                        <Link href='../product-pages/productlisting'> 
                     <img style={imageStyle}  src='https://i.imgur.com/y2nckFd.jpg' href='#' alt=''/> 
                     </Link> 
                     </SwiperSlide>
                     <SwiperSlide> 
                        <Link href='../product-pages/productlisting'> 
                     <img style={imageStyle}  src='https://i.imgur.com/l1V9Xah.jpg' alt=''/> 
                     </Link> 
                     </SwiperSlide>
                     
                 </Swiper>
      
    );  
};

export default BarSwiper; 