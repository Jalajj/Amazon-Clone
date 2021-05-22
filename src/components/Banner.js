import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

function Banner() {
    return (
        <div className="relative">
        <div className="absolute w-full h-32 bg-gradient-to-t from-white to-transparent bottom-0 z-20" />
           <Carousel
             autoPlay
             infiniteLoop
             showStatus={false}
             showIndicators={false}
             showThumbs={false} 
             interval={5000}>
                 <div>
                     <img loading="lazy" src="images/slider4.jpg" alt="slider"/>
                 </div>
                 <div>
                 <img loading="lazy" src="images/slider2.jpg" alt="slider"/>
                 </div>
                 <div>
                 <img loading="lazy" src="images/slider3.jpg" alt="slider"/>
                 </div>
             </Carousel>
        </div>
    )
}

export default Banner
