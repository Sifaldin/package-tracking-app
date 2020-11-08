//React Core
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Home from "./components/Pages/Home";





export default function App() {

  return (

    <Router>


      <div className="App">

        <Switch>

          <Route exact path="/">

            <Home />

          </Route>

        </Switch>

      </div>
    </Router>

  );
}









