import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider, PrivateRoute } from "react-auth-kit";

import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PostJob from "./pages/PostJob";
import ViewJobs from "./pages/ViewJobs";

function App() {
  return (
    <AuthProvider
      authStorageType={"localstorage"}
      authStorageName={"jobportal_auth_t"}
      authTimeStorageName={"jobportal_auth_time"}
      stateStorageName={"jobportal_auth_state"}
    >
      <Router>
        <NavBar />

        <Switch>
          <PrivateRoute
            component={PostJob}
            path="/postjob"
            loginPath="/signin"
            exact
          />
          <PrivateRoute
            component={ViewJobs}
            path="/viewjobs"
            loginPath="/signin"
            exact
          />
          <Route component={SignIn} path="/signin" exact />
          <Route component={SignUp} path="/signup" exact />
          <Route component={Home} path="/" exact />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
