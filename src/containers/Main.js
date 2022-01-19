import React from 'react';

import datas from '../static/stylesheets/data/data.json';
/* styles */
import className from 'classnames/bind';
import styles from './Main.module.scss';

// import Swiper core and required components
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import PosterboxInner from '../components/PosterboxInner';

SwiperCore.use([Navigation]);

const cx = className.bind(styles);

const Main = () => {
    return(
        <>
            <div className={cx('main_container')}>
            
                <div className={cx('poster_list_wrap')}>
                    <h2>박스오피스 순위</h2>
                    <Swiper
                        className={cx('poster_slide')}
                        spaceBetween={16}
                        slidesPerGroup={5}
                        slidesPerView={5}
                        navigation={{
                            nextEl: ".button-next",
                            prevEl: ".button-prev",
                         }}
                    >
                        
                    {
                        datas.map( (data, idx) => {
                            const { img, main_title, sub_title, year, country, reserve, rate, audience } = data;
                            return(
                                <SwiperSlide 
                                    key={idx} 
                                    className={cx('swiper-slide','poster_box')}
                                >
                                    <PosterboxInner 
                                        idx={idx}
                                        img={img}
                                        main_title={main_title}
                                        sub_title={sub_title}
                                        year={year}
                                        country={country}
                                        reserve={reserve}
                                        rate={rate}
                                        audience={audience}
                                    />
                                </SwiperSlide>
                            );
                        })
                    }                        
                    </Swiper>
                    <div className="button-prev"></div>
                    <div className="button-next"></div>
                </div>{/* poster_list_wrap */}
            
            </div>{/* main_container */}
        </>
    );

}

export default Main;