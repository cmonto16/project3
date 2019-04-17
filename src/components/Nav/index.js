import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav(props) {
  // eslint-disable-next-line
  let login = <a onClick={props.auth.login}>Log In</a>;
  if (props.auth.isAuthenticated()) {
    // eslint-disable-next-line
    login = <a onClick={props.auth.logout}>Log Out</a>;
  }
  
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Attend-US</Link>
          <Link to="/" data-target="mobile-demo" className="sidenav-trigger"><i class="material-icons">menu</i></Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/roster">Roster</Link></li>
            <li><Link to="/member">New Member</Link></li>
            <li><Link to="/event">New Event</Link></li>
            <li><Link to="/history">Event History</Link></li>
            <li>{login}</li>
          </ul>
        </div>
      </nav>
      <ul class="sidenav" id="mobile-demo">
        <li><Link to="/roster">Roster</Link></li>
        <li><Link to="/member">New Member</Link></li>
        <li><Link to="/event">New Event</Link></li>
        <li><Link to="/history">Event History</Link></li>
        <li id="login_button">{login}</li>
      </ul>
    </div>
  );
}

export default Nav;