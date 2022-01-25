import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Main from '../containers/Main';
import Detail from '../containers/Detail';
import Program from '../containers/Program';
import Book from '../containers/Book';

import { Paths } from '../paths';

const MoviePage = () => {
    return(
        <>
            <Switch>
                <Route path={Paths.program} component={Program} />
                <Route path={Paths.detail + '/:idx?'} component={Detail}/>
                <Route path={Paths.book} component={Book}/>
                <Route path={Paths.main} component={Main} exact />
            </Switch>
            
        </>
    );
};

export default MoviePage;