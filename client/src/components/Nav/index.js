import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav(props) {
  let login = <a onClick={props.auth.login}>Log In</a>;
  if (props.auth.isAuthenticated()) {
    login = <a onClick={props.auth.logout}>Log Out</a>;
  }
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Attend-US
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/roster">Roster</Link>
          </li>
          <li>
            <Link to="/member">New Member</Link>
          </li>
          <li>
            <Link to="/event">New Event</Link>
          </li>
          <li>
            <Link to="/history">Event History</Link>
          </li>
          <li>
            {login}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
