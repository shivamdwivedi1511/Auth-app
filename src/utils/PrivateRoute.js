import React from "react";
import { Redirect, Route } from "react-router-dom";
import { ROUTES_PATH } from "../constants/routes";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem("accessToken");
  return isAuth ? (
    <Route {...rest} component={Component} />
  ) : (
    <Redirect to={ROUTES_PATH.LOGIN} />
  );
};
export default PrivateRoute;
