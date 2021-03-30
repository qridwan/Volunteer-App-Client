import React from "react";
import {
  BrowserRouter as Router,


  Route, Switch
} from "react-router-dom";
import AddEvent from "./Components/AddEvents/AddEvent";
import Event from "./Components/Event/Event";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Nav from "./Components/Navigation/Nav";

function App() {

  return (
    <Router>
      <div>
       <Nav/>

        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/event">
            <Event/>
          </Route>
          <Route path="/addEvent">
            <AddEvent/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;