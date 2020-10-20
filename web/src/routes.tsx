import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute, IsUserRedirect } from './helpers/protectedRoutes';

import {
    Home,
    OrphanagesMap,
    CreateOrphanages,
    Orphanage,
    Signin,
    Dashboard
} from './pages';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/app" component={OrphanagesMap} />

                <Route path="/orphanages/create" component={CreateOrphanages} />
                <Route path="/orphanages/:id" component={Orphanage} />

                <IsUserRedirect path="/login" component={Signin} redirectTo="/dashboard" />
                <PrivateRoute path='/dashboard' component={Dashboard} exact />
            </Switch>
        </Router>
    );
};

export default Routes;
