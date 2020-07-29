import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./HomePage";
import SignUp from "./FormPage/SignUp";
import Login from "./FormPage/Login";
import Browse from "./Browse";

function App() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <Route path="/browse" exact component={Browse} />
        </Switch>
      </BrowserRouter>
    );
}

export default App;
