import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
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
overflow:hidden;
slick-list{
  color:black;
}

`;
const Wrap = styled.div`

cursor:pointer;
img{
    border:4px solid transparent;
    border:4px;
    width:100%;
    height:100%;
    box-shadow:rgb(0 0 0 / 69%) 10px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px  16px 10px -18px;
    transition-duration:300ms;

    // &:hover
    // {
    //     border:4px solid rgba(249,249,249,0.8)
    // }
}
// border-radius:4px solid black;
`;
