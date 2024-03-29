import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from "swiper";
import { Navigation, Pagination, A11y} from 'swiper';
import Link from 'next/link';

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


  const Swiper2 = () => {
  const imageStyle = { width: 200, height: 300}
  
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
                <img style={imageStyle} src='https://i.ebayimg.com/images/g/R7gAAOSwDUpi5oRE/s-l1600.jpg' href='#' alt=''/> 
                </Link>
                </SwiperSlide>
               <SwiperSlide> 
                <Link href='../product-pages/productlisting'>
                  <img style={imageStyle} src='https://kbimages1-a.akamaihd.net/5d439b4c-591c-44eb-9377-d69fc0c729a0/353/569/90/False/bleach-vol-74.jpg' href='#' alt=''/> 
                  </Link> 
               </SwiperSlide>
               <SwiperSlide> <Link href='../product-pages/productlisting'> 
               <img  style={imageStyle} src='https://dw9to29mmj727.cloudfront.net/products/1591161789.jpg' href='#' alt=''/> 
               </Link>
               </SwiperSlide>
               <SwiperSlide> 
                <Link href='../product-pages/productlisting'> 
                <img style={imageStyle} src='http://prodimage.images-bn.com/pimages/9781974708413_p0_v2_s1200x630.jpg' href='#' alt=''/> 
                </Link> 
                </SwiperSlide>
               <SwiperSlide> 
                <Link href='../product-pages/productlisting'> 
                <img style={imageStyle}  src='https://dw9to29mmj727.cloudfront.net/products/1974722813.jpg' href='#' alt=''/>  
                </Link> 
                </SwiperSlide>
               <SwiperSlide> 
                <Link href='../product-pages/productlisting'> 
                <img style={imageStyle}  
                src='https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781974719778_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D' alt=''/> 
               </Link> 
               </SwiperSlide>
               
           </Swiper>
           
  );
};
export default Swiper2;