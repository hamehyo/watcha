import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Login from '../containers/Login';
import SignUp from '../containers/SignUp';

import { Paths } from '../paths';

const AuthPage = () => {
    return(
        <Switch>
            <Route path={Paths.auth.login} component={Login}/>
            <Route path={Paths.auth.signup} component={SignUp}/>
        </Switch>
    );
};

export default AuthPage;