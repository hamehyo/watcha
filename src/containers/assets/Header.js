import React from 'react';
import { Link } from 'react-router-dom';

/* styles */
import className from 'classnames/bind';
import styles from './Header.module.scss';

const cx = className.bind(styles);


const Header = () => {

    return(
        <header>
            <h1>WATCHA PEDIA</h1>
            <ul className={cx('')}>
                <li><Link to="/">영화</Link></li>
                <li><Link to="">TV프로그램</Link></li>
                <li><Link to="">책</Link></li>
            </ul>
            <div>
                <div>
                    <input type="text"onChange={onChange} value={text} placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요." />
                </div>
                <div><Link to="">로그인</Link></div>
                <div><Link to="">회원가입</Link></div>
            </div>
        </header>    
    );
}

export default Header;