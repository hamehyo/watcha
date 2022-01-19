import React from 'react';

/* styles */
import className from 'classnames/bind';
import styles from '../containers/Main.module.scss';

const cx = className.bind(styles);

const PosterboxInner = ({idx, img, main_title, sub_title, year, country, reserve, rate, audience}) => {
    

    const audienceNum = Number(audience).toLocaleString();

    //console.log(Number(audience).toLocaleString());

    return(
        <>
            <div className={cx('img_box')}>
                <span className={cx('txt_box')}>{idx+1}</span>
                <img src={`${process.env.PUBLIC_URL}/img/${img}`} alt={main_title} />
            </div>
            <div className={cx('txt_box')}>
                <p className={cx('tit')}>{ main_title }{sub_title ? ` : ${sub_title}` : ''}</p>
                <p className={cx('info')}>{ year }・{ country }</p>
                <p className={cx('rate')}>평균<em>★</em>{ rate }</p>
                <p className={cx('num')}>예매율 { reserve }%・ 누적 관객{ audienceNum }</p>
            </div>
        </>
    );
}

export default PosterboxInner;
