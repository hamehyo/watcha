import React from 'react';

/* styles */
import className from 'classnames/bind';
import styles from '../components/posterboxInner.module.scss';
import { audienceNum } from '../hooks/useAuienceNum';

const cx = className.bind(styles);

const PosterboxInner = ({idx, img, main_title, sub_title, year, country, reserve, rate, audience}) => {
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
