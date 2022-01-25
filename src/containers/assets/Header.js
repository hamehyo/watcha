import React from 'react';
import { Link, Route,Switch } from 'react-router-dom';
import { Paths } from '../../paths/index';

/* styles */
import className from 'classnames/bind';
import styles from './Header.module.scss';


const cx = className.bind(styles);


const Header = () => {
    
    return(
        <header>
            <div className={cx('haeder_inner')}>
                <h1 className={cx('logo')}>
                    <Link to="/"><strong>WATCHA</strong> PEDIA</Link> 
                </h1>
                <nav>
                    <ul className={cx('nav_list')}>
                        <li><Link to={Paths.main}>영화</Link></li>
                        <li><Link to={Paths.program}>TV프로그램</Link></li>
                        <li><Link to={Paths.book}>책</Link></li>
                    </ul>
                </nav>
                <div className={cx('user_box')}>
                    <div className={cx('input_box')}>
                        <img src={`${process.env.PUBLIC_URL}/img/icon_search.svg`} className={cx('icon')} alt="돋보기아이콘" />
                        <input type="text" placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요." />
                    </div>
                    <div className={cx('btn','login')}><Link to={Paths.auth.login}>로그인</Link></div>
                    <div className={cx('btn','signup')}><Link to={Paths.auth.signup}>회원가입</Link></div>
                </div>
            </div>
        </header>
    );
}

export default Header;