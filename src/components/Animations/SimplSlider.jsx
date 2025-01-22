import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,arrows:false
  };
  return (
    <Slider {...settings} className="">
     {[1,2,3].map(i=> <div key={i}>
       <img src="/i1.jpg" className="h-[375px] w-full" alt="" />
      </div>)}
    </Slider>
  );
}