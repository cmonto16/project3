import React from "react";
import "./style.css";

function Nav(props) {
  let login = <a onClick={props.auth.login}>Log In</a>;
  if (props.auth.isAuthenticated()) {
    login = <a onClick={props.auth.logout}>Log Out</a>;
  }
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          Attend-US
        </a>
        <ul id="nav-mobile" className="right">
          <li>
            <a href="/roster">Roster</a>
          </li>
          <li>
            <a href="/member">New Member</a>
          </li>
          <li>
            <a href="/event">New Event</a>
          </li>
          <li>
            <a href="/history">Event History</a>
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
