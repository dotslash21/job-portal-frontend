import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PostJob from "./pages/PostJob";
import ViewJobs from "./pages/ViewJobs";

function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path="/postjob">
          <PostJob />
        </Route>
        <Route path="/viewjobs">
          <ViewJobs />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
