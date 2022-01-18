import React from 'react';


import datas from '../static/stylesheets/data/data.json';
// import img01 from '../static/img/01.jpg';
import {IMG01, IMG02, IMG03, IMG04, IMG05, IMG06, IMG07, IMG08, IMG09, IMG10, IMG11, IMG12, IMG13, IMG14, IMG15 } from '../static/img'



import { Swiper, SwiperSlide } from "swiper/react";




/* style */
import className from 'classnames/bind';
import styles from './Main.module.scss'


const cx = className.bind(styles);

//console.log(datas);


const Main = () => {

    return(
        <>
            <div className={cx('main_container')}>
            
                <div className={cx('poster_list_wrap')}>
                    <h2>박스오피스 순위</h2>
                    {/* <Swiper 
                        slidesPerView={5}
                        slidesPerGroup={5}
                    > */}
                    <Swiper
                        slidesPerGroup={5}
                        slidesPerView={5}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                    {
                        datas.map( (data, idx) => {
                            const { main_title, sub_title, year, country, reserve, rate, audience} = data;
                            console.log(typeof(`IMG0${idx}`));
                            return(
                                <SwiperSlide 
                                    key={idx} 
                                    className={cx('swiper-slide','poster_box')}
                                >
                                    <div className={cx('img_box')}>
                                        <img src={`IMG0${(idx+1)}`} alt={main_title} /> {/* */}
                                        {/* <img src={require(`../static/img/0${idx}.jpg`)} alt={main_title} /> */}
                                        {/* <img src={IMG02} alt="포스터" /> */}
                                    </div>

                                    <div className={cx('txt_box')}>
                                        <p className={cx('tit')}>{ main_title }{`: ${sub_title}`}</p>
                                        <p className={cx('info')}>{ year }・{ country }</p>
                                        <p className={cx('rate')}>{ rate }</p>
                                        <p className={cx('num')}>{ reserve }・ { audience }</p>
                                    </div>
                                </SwiperSlide>
                            );
                        })
                    }
                    </Swiper>
                </div>{/* poster_list_wrap */}
            
            </div>{/* main_container */}
        </>
    );

}

export default Main;