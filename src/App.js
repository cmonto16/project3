import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Roster from "./pages/Roster";
import Member from "./pages/Member";
import Event from "./pages/Event";
import History from "./pages/History";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/roster" component={Roster} />
          <Route exact path="/member" component={Member} />
          <Route exact path="/event" component={Event} />
          <Route exact path="/history" component={History} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
