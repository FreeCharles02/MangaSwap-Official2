import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from "swiper";
import { Navigation, Pagination, A11y} from 'swiper';
import Link from 'next/link';

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const NewSwiper = () => {
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
                        <img style={imageStyle} src='https://i.imgur.com/Ru7fcxO.jpg' href='#' alt=''/> 
                        </Link> 
                        </SwiperSlide>
                     <SwiperSlide> 
                        <Link href='../product-pages/productlisting'> 
                        <img style={imageStyle} src='https://i.imgur.com/b69Ufhc.png' href='#' alt=''/> 
                        </Link> 
                        </SwiperSlide>
                     <SwiperSlide> 
                        <Link href='../product-pages/productlisting'> 
                        <img  style={imageStyle} src='https://i.imgur.com/QSVDtom.jpg' href='#' alt=''/> 
                     </Link> 
                     </SwiperSlide>
                     <SwiperSlide> 
                        <Link href='../product-pages/productlisting'> 
                        <img style={imageStyle} src='https://i.imgur.com/FS9N79s.jpg' href='#' alt=''/> 
                        </Link> 
                     </SwiperSlide>
                     <SwiperSlide> 
                        <Link href='../product-pages/productlisting'> 
                        <img style={imageStyle}  src='https://i.imgur.com/6kFEdee.png' href='#' alt=''/> 
                        </Link> 
                        </SwiperSlide>
                     <SwiperSlide> 
                        <Link href='../product-pages/productlisting'> 
                     <img style={imageStyle}  src='https://i.imgur.com/DljMhnV.jpg' alt='' href='#'/> 
                     </Link> 
                     </SwiperSlide>
                     
                 </Swiper>
      
    );  
};

export default NewSwiper; 