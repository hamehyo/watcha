import React from 'react';
import {Route, Switch} from 'react-router-dom';

import MoviePage from './pages/MoviePage';
import AuthPage from './pages/AuthPage';

import { Paths } from './paths';

/* style */
import className from 'classnames/bind';
import styles from './App.module.scss';
import Header from './containers/assets/Header';
import Api_ex from './testApi/Api_ex';
const cx = className.bind(styles);

function App() {

  return (
    <>
      <Header />
      <Switch>
        <Route path={Paths.auth.index} component={AuthPage} />
        <Route path={Paths.main} component={MoviePage} />
      </Switch>
    </>
  );
}


export default App;
