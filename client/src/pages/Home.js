import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1>Welcome to Attend-US!</h1>
        <h2>
          {this.props.auth.isAuthenticated()
            ? "User is logged in as " + this.props.auth.userProfile.nickname
            : "Please log in"}
        </h2>
      </div>
    );
  }
}

export default Home;
