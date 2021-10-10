import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      }

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badag.jpg" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badging.jpg" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;
  cursor: pointer;
     .slick-list{
         overflow: visible;
     }

     .slick-dots li button:before{
         font-size: 10px;
         color: rgb(150, 158, 171); 
     }

     .slick-dots li.slick-active button:before{
         color: #fff; 
     }

     .slick-arrow .slick-next{
         display: hidden; 
     }
  `

const Wrap = styled.div`
     img{
         border: 4px solid transparent;  
         border-radius: 5px;
         width: 100%;
         height: 100%;
         box-shadow: rgb(0 0 0 / 70%) 0px 26px 30px -10px, rgb(0 0 0 / 74%) 0px 16px 10px -10px;
         transition: all 0.3s; 

         &:hover{
            border: 4px solid rgb(249, 249, 249, 0.8);  
         }
     }
`
