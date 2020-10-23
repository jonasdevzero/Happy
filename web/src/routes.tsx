import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute, IsUserRedirect } from './helpers/protectedRoutes';

import { UserContext } from './contexts/UserContext';
import { useAuth } from './hooks/useAuth';

import {
    Home,
    OrphanagesMap,
    CreateOrphanages,
    Orphanage,
    Signin,
    Dashboard,
    EditOrphanage,
    ApproveOrphanage
} from './pages';

function Routes() {
    const { user, setUser } = useAuth();

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/app" component={OrphanagesMap} />

                <Route path="/orphanages/create" component={CreateOrphanages} exact />
                <Route path="/orphanages/:id" component={Orphanage} exact />

                <UserContext.Provider value={{ user, setUser }}>
                    <IsUserRedirect path="/login" component={Signin} redirectTo="/dashboard" />
                    <PrivateRoute path='/dashboard' component={Dashboard} exact />
                    <PrivateRoute path='/orphanages/edit/:id' component={EditOrphanage} exact />
                    <PrivateRoute path='/orphanages/approve/:id' component={ApproveOrphanage} exact />
                </UserContext.Provider>
            </Switch>
        </Router>
    );
};

export default Routes;
