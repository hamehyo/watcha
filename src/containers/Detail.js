import React from 'react';
import datas from '../static/stylesheets/data/data.json';
/* styles */
import className from 'classnames/bind';
import styles from './Detail.module.scss';

const cx = className.bind(styles);

const Detail = () => {
return(
    <section className={cx('detail_container')}>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    </section>

    );
}

export default Detail;