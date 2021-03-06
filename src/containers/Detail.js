import React from 'react';
import datas from '../static/stylesheets/data/data.json';
import ReactStars from 'react-rating-stars-component';

/* styles */
import className from 'classnames/bind';
import styles from './Detail.module.scss';
import { audienceNum } from '../hooks/useAuienceNum';

const cx = className.bind(styles);

const Detail = ({match}) => {
    const {idx} = match.params;
    console.log(idx);
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    const { img, main_title, sub_title, year, country, reserve, rate, audience } = datas.filter((data, index) => (index+1) === Number(idx))[0];
    //console.log(movieList)
    return(
        <>
            <section className={cx('detail_container')}>
                <div className={cx('top_main_wrap')} style={{'backgroundImage': `${process.env.PUBLIC_URL}/img/${img}`}}>Detail {idx}</div>
                <div className={cx('btm_info_wrap')}>
                    <div className={cx('poster_img_box')}>
                        <img src={`${process.env.PUBLIC_URL}/img/${img}`} alt={main_title} />
                    </div>
                    <div className={cx('poster_info_box')}>
                        <div className={cx('num')}>
                            <span>예매율 <strong>{ reserve }%</strong></span>
                            <span>개봉</span> 
                            <span>누적관객 <strong>{ audienceNum(audience) }</strong></span>
                    </div>
                        <div className={cx('tit')}>{main_title}{sub_title && ` : ${sub_title}`}</div>
                        <div className={cx('info')}>{ year }・{ country }</div>
                        <div className={cx('user_area')}>
                            <p>평가하기</p>
                            <ReactStars
                                count={5}
                                isHalf={true}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                            />
                        </div>
                    </div>
                </div>
                {
                    // movieList.map( (movie) => {
                    //     const { img, main_title, sub_title, year, country, reserve, rate, audience } = movie;
                    //     return(
                    //         <>
                    //             <div className={cx('top_main_wrap')} style={{'backgroundImage': `${process.env.PUBLIC_URL}/img/${img}`}}>Detail {idx}</div>
                    //             <div className={cx('btm_info_wrap')}>
                    //                 <div className={cx('poster_img_box')}>
                    //                     <img src={`${process.env.PUBLIC_URL}/img/${img}`} alt={main_title} />
                    //                 </div>
                    //                 <div className={cx('poster_info_box')}>
                    //                     <div className={cx('num')}>
                    //                         <span>예매율 <strong>{ reserve }%</strong></span>
                    //                         <span>개봉</span> 
                    //                         <span>누적관객 <strong>{ audienceNum(audience) }</strong></span>
                    //                     </div>
                    //                     <div className={cx('tit')}>{main_title}{sub_title && ` : ${sub_title}`}</div>
                    //                     <div className={cx('info')}>{ year }・{ country }</div>
                    //                     <div className={cx('user_area')}></div>
                    //                 </div>
                    //             </div>
                    //         </>
                    //     );
                    // })
                }   
            </section>
            
        </>
    );
}

export default Detail;