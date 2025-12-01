import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, FreeMode} from "swiper";
import { Navigation, Pagination, A11y} from 'swiper';
import Link from 'next/link';
import styles from './swiper.module.css'
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const BarSwiper = () => {
    return (
         <div className={styles.primary}>
            <Swiper 
                 modules={[Navigation, Pagination, A11y, FreeMode, Autoplay]}
                 spaceBetween={0}
                 slidesPerView={6}
                 navigation
                 pagination={{clickable: true }}
                 scrollbar={{ draggable: true }}
                 onSlideChange={() => console.log('slide change')}
                 onSwiper={(swiper) => console.log(swiper)}
                 autoplay={{delay: 0, reverseDirection: true}}
                 loop={true}
                 freeMode={true}
                 speed={10000}
                 >
                   
                     <SwiperSlide className={styles.swiperslide}> 
                        <Link href='../product-pages/productlisting'>
                        <img src='https://i.imgur.com/o4lXKjM.jpg' 
                        href='../product-pages/newproductpage'/> 
                        </Link>
                     </SwiperSlide>
                     <SwiperSlide className={styles.swiperslide}> 
                        <Link href='../product-pages/productlisting'> 
                        <img src='https://i.imgur.com/NN3cHbp.jpg' 
                        href='#' alt=''/> 
                     </Link> 
                     </SwiperSlide>
                     <SwiperSlide className={styles.swiperslide}> 
                        <Link href='../product-pages/productlisting'> 
                        <img src='https://i.imgur.com/UyRf12t.jpg' href='#' alt=''></img> 
                        </Link> 
                        </SwiperSlide>
                     <SwiperSlide className={styles.swiperslide}> 
                        <Link href='../product-pages/productlisting'> 
                        <img  src='https://i.imgur.com/pLDb8qi.jpg' href='#' alt=''/> 
                        </Link> 
                        </SwiperSlide>
                     <SwiperSlide className={styles.swiperslide}> 
                        <Link href='../product-pages/productlisting'> 
                     <img src='https://i.imgur.com/y2nckFd.jpg' href='#' alt=''/> 
                     </Link> 
                     </SwiperSlide>
                     <SwiperSlide className={styles.swiperslide}> 
                        <Link href='../product-pages/productlisting'> 
                     <img src='https://i.imgur.com/l1V9Xah.jpg' alt=''/> 
                     </Link> 
                     </SwiperSlide>
                     <SwiperSlide className={styles.swiperslide}> 
                        <Link href='../product-pages/productlisting'> 
                     <img src='https://i.imgur.com/l1V9Xah.jpg' alt=''/> 
                     </Link> 
                     </SwiperSlide>
                     <SwiperSlide className={styles.swiperslide}> 
                        <Link href='../product-pages/productlisting'> 
                     <img src='https://i.imgur.com/l1V9Xah.jpg' alt=''/> 
                     </Link> 
                     </SwiperSlide>
                     <SwiperSlide className={styles.swiperslide}> 
                        <Link href='../product-pages/productlisting'> 
                     <img src='https://i.imgur.com/l1V9Xah.jpg' alt=''/> 
                     </Link> 
                     </SwiperSlide>
                     <SwiperSlide className={styles.swiperslide}> 
                        <Link href='../product-pages/productlisting'> 
                     <img src='https://i.imgur.com/l1V9Xah.jpg' alt=''/> 
                     </Link> 
                     </SwiperSlide>
                     <SwiperSlide className={styles.swiperslide}> 
                        <Link href='../product-pages/productlisting'> 
                     <img src='https://i.imgur.com/l1V9Xah.jpg' alt=''/> 
                     </Link> 
                     </SwiperSlide>
                     <SwiperSlide className={styles.swiperslide}> 
                        <Link href='../product-pages/productlisting'> 
                     <img src='https://i.imgur.com/l1V9Xah.jpg' alt=''/> 
                     </Link> 
                     </SwiperSlide>
                     
                 </Swiper>
         </div>
    );  
};

export default BarSwiper; 