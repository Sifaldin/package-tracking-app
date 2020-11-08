//React Core
import React from "react";

//Styles
// import "./styles/app.scss";

//Components
import Home from "./components/Pages/Home";
import Results from "./components/Pages/Results";
import information from "./information.json";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function App() {

  const endpoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";


  return (



    <Router>


      <div className="App">

          <Switch>

            <Route exact path="/">
              
                <Home />
            
            </Route>

            <Route path="/results/:query" render={({ match }) => (<Results match={match} information={information} />)} />

          </Switch>

      </div>
    </Router>

  );



}









