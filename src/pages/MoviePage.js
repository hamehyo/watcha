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
            {/* <ul>
                <li><Link to={Paths.main}>메인</Link></li>
                <li><Link to={Paths.detail}>상세페이지</Link></li>
            </ul> */}
            
            <Switch>
                <Route path={Paths.main} component={Main} exact />
                <Route path={Paths.program} component={Program} />
                <Route path={Paths.detail + '/:id?'} component={Detail}/>
                <Route path={Paths.book} component={Book}/>
            </Switch>
        </>
    );
};

export default MoviePage;