import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, OrphanagesMap } from './pages';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/app" component={OrphanagesMap} />
            </Switch>
        </Router>
    );
};

export default Routes;
