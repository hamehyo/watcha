import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';

// 라우팅 테스트
import Api_ex from './testApi/Api_ex';

import MoviePage from './pages/MoviePage';

import { Paths } from './paths';

/* style */
import className from 'classnames/bind';
import styles from './App.module.scss';
const cx = className.bind(styles);

function App() {

  return (
    <>
      {/* 라우팅연습  */}
      {/* <Api_ex /> */}

      <Switch>
        <Route path={Paths.main} component={MoviePage} />
      </Switch>

           
      
    </>
  );
}


export default App;
