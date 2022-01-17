import React from 'react';
import data from './static/stylesheets/data/data.json'

/* style */
import className from 'classnames/bind';
import styles from './App.module.scss';
const cx = className.bind(styles);


function App() {
  console.log(data);
  return (
    <div className={cx('container')}>
      aaaa
    </div>
  );
}


export default App;
