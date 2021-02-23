import React from "react";
import {Route, Redirect} from "react-router-dom";
import { isAutheticated } from "./index";

const AdminRoutes = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} 
               render={props => 
                isAutheticated() && isAutheticated().user.role === 1 ? (
                <Component {...props} />
                )  : ( <Redirect to={{
                    pathname: "/signin",
                    state:{from: props.location}
                }} /> 
        )} />
    );
};

export default AdminRoutes;


