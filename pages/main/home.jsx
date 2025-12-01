'use client';

import React, { use } from "react";
import Link from "next/link";
import Swiper2 from '../product-wheels/featuredslider'
import NewSwiper from "../product-wheels/newswiper";
import BarSwiper from "../product-wheels/bargainswiper";
import { Spacer } from '@nextui-org/react';
import styles from "./main.module.css";



   const Home = () => {
   
    
        return(
            <div className={styles.swiperHeader}>
                <Spacer y={2} />
            <h4> 
                <Link href="../product-pages/featured" style={{color: "black"}}>
                Featured!
                </Link> 
                <Spacer x={2} />
            </h4>
            <div className="Swiper">
                <Swiper2 /> 
                <Spacer y={4} />
                <div className={styles.swiperHeader}>
                    <h4>
                        <Link href="../product-pages/newproductpage" style={{color: "black"}}>
                        New!
                        </Link>
                        <Spacer y={2} />
                    </h4>
                    <NewSwiper />
                   { /* <div className={styles.swiperHeader}>
                        <Spacer y={4} />
                        <h4>
                            <Link href="../product-pages/bargainproducts" style={{color: "black"}}>
                            Sale!
                            </Link>
                            <Spacer y={2} />
                        </h4>
                        <BarSwiper />
                    </div> */}
                </div>
            </div>
        </div>
        );
    }

 
export default Home;
