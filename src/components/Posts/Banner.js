/* 슬라이드 배너 */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const BannerBox = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 30px;
  margin-bottom: 4%;
`

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <BannerBox>
      <Slider {...settings}>
        <div>
          <img src="img/one.png" alt="image1" style={{ maxWidth: "100%" }} />
        </div>
        <div>
          <img src="img/two.png" alt="image2" style={{ maxWidth: "100%" }} />
        </div>
        <div>
          <img src="img/three.png" alt="image3" style={{ maxWidth: "100%" }} />
        </div>
      </Slider>
    </BannerBox>
  );
};

export default Banner;