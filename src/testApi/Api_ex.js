import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Main from './Main';
import Detail from './Detail';

const Api_ex = () => {
    return(
        <>
            <ul>
                <li><Link to="/">메인</Link></li>
                <li><Link to="/detail">상세페이지</Link></li>
            </ul>
            <Switch>
                <Route path='/' component={Main} exact/>
                <Route path='/detail' component={Detail}/>
            </Switch>
        </>
    );
}

export default Api_ex;