import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './components/Login/Content'

// import Register from './components/Register/Content'

import Initial from './components/Site/Initial'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Initial} />
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/register" component={Register} /> */}
        </Switch>
    </BrowserRouter>

)

export default Routes