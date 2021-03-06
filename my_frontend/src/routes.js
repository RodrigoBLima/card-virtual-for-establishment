import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './components/Login/Content'

import Register from './components/Register/Content'

import Initial from './components/Site/Header'

import NoMatchUrl from './components/Error/NoMatchUrl'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Initial} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
        </Switch>

        {/* <Route path="*">
            <NoMatchUrl />
        </Route> */}
    </BrowserRouter>

)

export default Routes