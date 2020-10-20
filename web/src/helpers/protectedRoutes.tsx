import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export const PrivateRoute: React.FC<{ component: React.FC; path: string; exact: boolean; }> = ({ component, path, exact  }) => {
    const { user } = useContext(UserContext);

    return user ? (<Route path={path} exact={exact} component={component} />) : (<Redirect to="/login" />);
};

export const IsUserRedirect: React.FC<{ component: React.FC; redirectTo: string; path: string }> = ({ component, redirectTo, path }) => {
    const { user } = useContext(UserContext);

    return user ? (<Redirect to={redirectTo} />) : (<Route path={path} component={component} />)
}