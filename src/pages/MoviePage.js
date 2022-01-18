import React from 'react'
import {Route, Switch, Link} from 'react-router-dom';

import Main from '../containers/Main';
import Detail from '../containers/Detail';

import { Paths } from '../paths';

const MoviePage = () => {
    return(
        <Switch>
            <Route path={Paths.main} component={Main} exact />
            <Route path={Paths.detail} component={Detail}/>
        </Switch>
    );
};

export default MoviePage;