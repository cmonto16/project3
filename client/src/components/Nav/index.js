import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav(props) {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Attend-US</Link>
          <Link to="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {props.auth.isAuthenticated() &&
            <li><Link to="/roster">Roster</Link></li>
            }
            {props.auth.isAuthenticated() &&
            <li><Link to="/member">New Member</Link></li>
            }
            {props.auth.isAuthenticated() &&
            <li><Link to="/event">New Event</Link></li>
            }
            <li><Link to="/history">Event History</Link></li>
            <li>
            {
              (props.auth.isAuthenticated() &&
              <a onClick={props.auth.logout}>Log Out</a>) || 
              <a onClick={props.auth.login}>Log In</a>
            }
            </li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        {props.auth.isAuthenticated() &&
        <li><Link to="/roster">Roster</Link></li>
        }
        {props.auth.isAuthenticated() &&
        <li><Link to="/member">New Member</Link></li>
        }
        {props.auth.isAuthenticated() &&
        <li><Link to="/event">New Event</Link></li>
        }
        <li><Link to="/history">Event History</Link></li>
        <li id="login_button">
        {
          (props.auth.isAuthenticated() &&
          <a onClick={props.auth.logout}>Log Out</a>) || 
          <a onClick={props.auth.login}>Log In</a>
        }
        </li>
      </ul>
    </div>
  );
}

export default Nav;