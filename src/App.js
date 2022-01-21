import React from 'react';
import {Route, Switch} from 'react-router-dom';

import MoviePage from './pages/MoviePage';

import { Paths } from './paths';

/* style */
import className from 'classnames/bind';
import styles from './App.module.scss';
import Header from './containers/assets/Header';
const cx = className.bind(styles);

function App() {

  return (
    <>

      <Header />
      <Switch>
        <Route path={Paths.main} component={MoviePage} />
      </Switch>

    </>
  );
}


export default App;
