import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Roster from "./pages/Roster";
import Member from "./pages/Member";
import Event from "./pages/Event";
import History from "./pages/History";
import Callback from "./pages/Callback";
import Auth from "./Auth/Auth";
import history from "./history";
import "./App.css";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

function App() {
  return (
    <Router history={history}>
      <div>
        <Route path="*" render={props => <Nav auth={auth} />} />
        <Switch>
          <Route exact path="/" render={() => <Home auth={auth} />} />
          
          <Route
            exact
            path="/roster"
            render={() =>
              !auth.isAuthenticated() ? (
                <Redirect to="/" />
              ) : (
                <Roster auth={auth} />
              )
            }
          />
          
          <Route
            exact
            path="/member"
            render={() =>
              !auth.isAuthenticated() ? (
                <Redirect to="/" />
              ) : (
                <Member auth={auth} key={1} />
              )
            }
          />
          <Route
            exact
            path="/member/:id"
            render={(arg) => {
              return !auth.isAuthenticated() ? (
                <Redirect to="/" />
              ) : (
                <Member auth={auth} id={arg.match.params.id} key={2} />
              )
              }}
          />
          <Route
            exact
            path="/event"
            render={() =>
              !auth.isAuthenticated() ? (
                <Redirect to="/" />
              ) : (
                <Event auth={auth} />
              )
            }
          />

          <Route
            exact
            path="/history"
            render={() =>
              !auth.isAuthenticated() ? (
                <Redirect to="/" />
              ) : (
                <History auth={auth} />
              )
            }
          />

          <Route
            path="/callback"
            render={props => {
              handleAuthentication(props);
              return <Callback {...props} />;
            }}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
