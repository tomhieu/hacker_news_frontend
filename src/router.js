import React from "react";
import {Route, Router, Switch} from "react-router-dom";
import {connect} from "react-redux";
import asyncComponent from "./helpers/AsyncFunc";

const PublicRoutes = ({history}) => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route
            exact
            path={"/"}
            component={asyncComponent(() => import("./Page/Home"))}
          />
          <Route
            exact
            path={"/posts/:id"}
            component={asyncComponent(() => import("./Page/NewsDetail"))}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default connect(state => ({
}))(PublicRoutes);
