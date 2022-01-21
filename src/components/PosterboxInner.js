import React from 'react';

/* styles */
import className from 'classnames/bind';
import styles from '../components/posterboxInner.module.scss';

const cx = className.bind(styles);

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

const PosterboxInner = ({idx, img, main_title, sub_title, year, country, reserve, rate, audience}) => {

    //const audienceNum = Number(audience).toLocaleString();
    //console.log(Number(audience).toLocaleString());

    return(
        <>
            <div className={cx('img_box')}>
                <span className={cx('rank_txt')}>{idx+1}</span>
                <img src={`${process.env.PUBLIC_URL}/img/${img}`} alt={main_title} />
            </div>
            <div className={cx('txt_box')}>
                <p className={cx('tit')}>{ main_title }{sub_title && ` : ${sub_title}`}</p>
                <p className={cx('info')}>{ year }・{ country }</p>
                {/* {
                    rate ? <p className={cx('rate')}>평균<em>★</em>{ rate }</p> : ''
                } */}
                {rate && <p className={cx('rate')}>평균<em>★</em>{ rate }</p>}
                <p className={cx('num')}>예매율 { reserve }%・ 누적 관객 { audienceNum(audience) }</p>
            </div>
        </>
    );
}

export default PosterboxInner;
