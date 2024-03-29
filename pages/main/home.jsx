'use client';

import React from "react";
import Link from "next/link";
import Swiper2 from '../product-wheels/featuredslider'
import NewSwiper from "../product-wheels/newswiper";
import BarSwiper from "../product-wheels/bargainswiper";
import { Spacer } from '@nextui-org/react';



   const Home = () => {
    
    
        return(
            <div className="home">
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
                <div className="NewSwiper">
                    <h4>
                        <Link href="../product-pages/newproductpage" style={{color: "black"}}>
                        New!
                        </Link>
                        <Spacer y={2} />
                    </h4>
                    <NewSwiper />
                    <div className="onSale">
                        <Spacer y={4} />
                        <h4>
                            <Link href="../product-pages/bargainproducts" style={{color: "black"}}>
                            Sale!
                            </Link>
                            <Spacer y={2} />
                        </h4>
                        <BarSwiper />
                    </div>
                </div>
            </div>
        </div>
        );
    }

 
export default Home;
