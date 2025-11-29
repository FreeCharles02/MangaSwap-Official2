import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, FreeMode} from "swiper";
import { Navigation, Pagination, A11y} from 'swiper';
import styles from './swiper.module.css'
import Link from 'next/link';

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const NewSwiper = () => {
    return (

            <Swiper className={styles.swiper}
                 modules={[Navigation, Pagination, A11y, FreeMode, Autoplay]}
                 spaceBetween={0}
                 slidesPerView={6}
                 navigation
                 pagination={{clickable: true }}
                 scrollbar={{ draggable: true }}
                 onSlideChange={() => console.log('slide change')}
                 onSwiper={(swiper) => console.log(swiper)}
                 autoplay={{delay: 0}}
                 loop={true}
                 freeMode={true}
                 speed={4000}
                 >
                   
                     <SwiperSlide className={styles.swiperslide} > 
                        <Link href='../product-pages/productlisting'> 
                        <img  src='https://i.imgur.com/Ru7fcxO.jpg' href='#' alt=''/> 
                        </Link> 
                        </SwiperSlide>
                     <SwiperSlide className={styles.swiperslide}> 
                        <Link href='../product-pages/productlisting'> 
                        <img  src='https://i.imgur.com/b69Ufhc.png' href='#' alt=''/> 
                        </Link> 
                        </SwiperSlide>
                     <SwiperSlide className={styles.swiperslide}> 
                        <Link href='../product-pages/productlisting'> 
                        <img   src='https://i.imgur.com/QSVDtom.jpg' href='#' alt=''/> 
                     </Link> 
                     </SwiperSlide>
                     <SwiperSlide className={styles.swiperslide}> 
                        <Link href='../product-pages/productlisting'> 
                        <img src='https://i.imgur.com/FS9N79s.jpg' href='#' alt=''/> 
                        </Link> 
                     </SwiperSlide>
                     <SwiperSlide className={styles.swiperslide}> 
                        <Link href='../product-pages/productlisting'> 
                        <img src='https://i.imgur.com/6kFEdee.png' href='#' alt=''/> 
                        </Link> 
                        </SwiperSlide>
                     <SwiperSlide className={styles.swiperslide}> 
                        <Link href='../product-pages/productlisting'> 
                     <img   src='https://i.imgur.com/DljMhnV.jpg' alt='' href='#'/> 
                     </Link> 
                     </SwiperSlide>
                      <SwiperSlide className={styles.swiperslide}> 
                        <Link href='../product-pages/productlisting'> 
                     <img   src='https://i.imgur.com/DljMhnV.jpg' alt='' href='#'/> 
                     </Link> 
                     </SwiperSlide>
                      <SwiperSlide className={styles.swiperslide}> 
                        <Link href='../product-pages/productlisting'> 
                     <img   src='/home/bigboss/Projects/MangaSwap-Official2/lib/MangaImages/244553-1-4014995760.jpeg' alt='' href='#'/> 
                     </Link> 
                     </SwiperSlide>
                      <SwiperSlide className={styles.swiperslide}> 
                        <Link href='../product-pages/productlisting'> 
                     <img   src='https://i.imgur.com/DljMhnV.jpg' alt='' href='#'/> 
                     </Link> 
                     </SwiperSlide>
                      <SwiperSlide className={styles.swiperslide}> 
                        <Link href='../product-pages/productlisting'> 
                     <img   src='https://i.imgur.com/DljMhnV.jpg' alt='' href='#'/> 
                     </Link> 
                     </SwiperSlide>
                      <SwiperSlide className={styles.swiperslide}> 
                        <Link href='../product-pages/productlisting'> 
                     <img   src='https://i.imgur.com/DljMhnV.jpg' alt='' href='#'/> 
                     </Link> 
                     </SwiperSlide>
                      <SwiperSlide className={styles.swiperslide}> 
                        <Link href='../product-pages/productlisting'> 
                     <img   src='https://i.imgur.com/DljMhnV.jpg' alt='' href='#'/> 
                     </Link> 
                     </SwiperSlide>
                     
                 </Swiper>
      
    );  
};

export default NewSwiper; 