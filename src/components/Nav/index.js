import React from "react";
import "./style.css";

function Nav() {
    return (
    <nav>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">Attend-US</a>
            <ul id="nav-mobile" className="right">
                <li><a href="/roster">Roster</a></li>
                <li><a href="/member">New Member</a></li>
                <li><a href="/event">New Event</a></li>
                <li><a href="/history">Event History</a></li>
            </ul>
        </div>
    </nav>
    )
}

export default Nav;