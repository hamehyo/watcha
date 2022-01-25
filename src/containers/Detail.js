import React from 'react';
import datas from '../static/stylesheets/data/data.json';


/* styles */
import className from 'classnames/bind';
import styles from './Detail.module.scss';

const cx = className.bind(styles);

// 누적관객 수
function audienceNum(audience){
    if( parseInt(audience) < 10000){
        if( audience.length <= 3){
            return `${audience}명`;
        }else{
            const result=  parseInt(audience/ 1000);
            const remainder = audience.substr(1);
            return `${result},${remainder}명`;
        }
    }else if(parseInt(audience) >= 10000){
        const result1=  parseInt(audience/ 10000);
        return `${result1}만명`;
    }
    return audience;
}

const Detail = ({match}) => {
    const {idx} = match.params;
    //console.log(idx);

    const movieList = datas.filter((data, index) => (index+1) === Number(idx));
    console.log(movieList)
    

    return(
        <>
            <section className={cx('detail_container')}>
                {
                    movieList.map( (movie) => {
                        const { img, main_title, sub_title, year, country, reserve, rate, audience } = movie;
                        return(
                            <>
                                <div className={cx('top_main_wrap')} style={{'backgroundImage': `${process.env.PUBLIC_URL}/img/${img}`}}>Detail {idx}</div>
                                <div className={cx('btm_info_wrap')}>
                                    <div className={cx('poster_img_box')}>
                                        <img src={`${process.env.PUBLIC_URL}/img/${img}`} alt={main_title} />
                                    </div>
                                    <div className={cx('poster_info_box')}>
                                        <div className={cx('num')}>
                                            예매율 { reserve }% 
                                            개봉 
                                            누적관객 { audienceNum(audience) }
                                        </div>
                                        <div className={cx('tit')}>{main_title}{sub_title && ` : ${sub_title}`}</div>
                                        <div className={cx('info')}>{ year }・{ country }</div>
                                        <div className={cx('user_area')}></div>
                                    </div>
                                </div>
                            </>
                        );
                    })
                }   
            </section>
            
        </>
    );
}

export default Detail;