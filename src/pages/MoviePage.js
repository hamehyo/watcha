import React from 'react'
import {Route, Switch, Link} from 'react-router-dom';

import Main from '../containers/Main';
import Detail from '../containers/Detail';
import Program from '../containers/Program';

import { Paths } from '../paths';

const MoviePage = () => {
    return(
        <>
            {/* <ul>
                <li><Link to={Paths.main}>메인</Link></li>
                <li><Link to={Paths.detail}>상세페이지</Link></li>
            </ul> */}
            
            <Switch>
                <Route path={Paths.program} component={Program} />
                <Route path={Paths.main} component={Main} exact />
                <Route path={Paths.detail} component={Detail}/>
            </Switch>
        </>
    );
};

export default MoviePage;