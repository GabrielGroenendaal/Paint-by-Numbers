import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from 'react-router-dom';



const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to={`/signup`} />
        )
    )} />
);

const Protected = ({ component: Component, loggedIn, path, exact, ...rest }) => (
    <Route
        {...rest}
        path={path}
        exact={exact}
        render={props =>
            loggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect to={`/login`} />
            )
        }
    />
);


const mSTP = state => {
    return {
        loggedIn: state.session.isAuthenticated
    }
}


export const AuthRoute = withRouter(connect(mSTP,null)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP,null)(Protected));

