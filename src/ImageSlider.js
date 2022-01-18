import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
//Swiper 로 하위 SwiperSlide 컴포넌트들을 감싸준다.
//import "swiper/components/navigation/navigation.min.css";
// Swiper Module인 navigation의 css 를 가져온다.
import "swiper/swiper.scss";
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
// 'npm i sass'를 통해 SASS를 설치한 후 scss를 가져온다.
import SwiperCore, { Navigation } from "swiper/core";
SwiperCore.use([Navigation]);
// Naviagtion 모듈을 사용하기 위해 SwiperCore를 가져와 설치해준다.
function ImageSlider(props) {
  return (
    <Swiper navigation={true}>
  <SwiperSlide>이미지1</SwiperSlide>
  <SwiperSlide>이미지2</SwiperSlide>
  <SwiperSlide>이미지3</SwiperSlide>
	</Swiper>
  );
}
export default ImageSlider;