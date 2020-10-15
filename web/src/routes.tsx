import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, OrphanagesMap, CreateOrphanages, Orphanage } from './pages';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/app" component={OrphanagesMap} />

                <Route path="/orphanages/create" component={CreateOrphanages} />
                <Route path="/orphanages/:id" component={Orphanage} />
            </Switch>
        </Router>
    );
};

export default Routes;
