//React Core
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Home from "./components/Pages/Home";
import information from "./information.json";




export default function App() {

  const endpoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";


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









