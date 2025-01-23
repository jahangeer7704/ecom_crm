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
    autoplay: true,
    arrows: false,
  };

  const bannerpath = ["/b1.png", "/b2.png", "/b3.png"];
  return (
    <Slider autoplay {...settings} className="">
      {bannerpath.map((img, i) => (
        <div key={i}>
          <img src={img} className="h-[375px] w-full" alt="" />
        </div>
      ))}
    </Slider>
  );
}
