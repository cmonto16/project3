import React, { Component } from "react";
import axios from "axios";

class Member extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        first_name: "",
        last_name: "",
        member_number: 0,
        approval_date: null,
        nickname: "",
        hours: 0,
        image: ""
      }
    };
    this.inputChange = this.inputChange.bind(this);
  }
  createMember() {
    const { getAccessToken } = this.props.auth;
    const headers = { Authorization: `Bearer ${getAccessToken()}` };
    this.state.form.member_number = parseInt(this.state.form.member_number);
    axios
      .post(`/api/users`, this.state.form, { headers })
      .then(response => this.setState({ message: "Success!" }))
      .catch(error =>
        this.setState({ message: error.message || "Failed to save." })
      );
  }

  inputChange(event) {
    this.setState({
      form: { ...this.state.form, [event.target.name]: event.target.value }
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.message && <h2>{this.state.message}</h2>}
          <h1>Input new member data here</h1>
          <form className="col s12">
            <div className="row">
              <div className="col s6 input-field">
                <label htmlFor="fname">First Name</label>
                <input
                  className=""
                  type="text"
                  name="first_name"
                  id="fname"
                  onChange={this.inputChange}
                />
              </div>
              <div className="col s6 input-field">
                <label htmlFor="lname">Last Name</label>
                <input
                  className=""
                  type="text"
                  name="last_name"
                  id="lname"
                  onChange={this.inputChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col s6 input-field">
                <label htmlFor="member_num">Member#</label>
                <input
                  className=""
                  type="number"
                  name="member_number"
                  id="member_num"
                  onChange={this.inputChange}
                />
              </div>
              <div className="col s6 input-field">
                <label htmlFor="member_date">Date Approved</label>
                <input
                  className=""
                  type="text"
                  name="approval_date"
                  id="member_date"
                  onChange={this.inputChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col s6 input-field">
                <label htmlFor="nickname">Nickname</label>
                <input
                  className=""
                  type="text"
                  name="nickname"
                  id="nickname"
                  onChange={this.inputChange}
                />
              </div>
              <div className="col s6 input-field">
                <label htmlFor="image_link">Link to Profile Image</label>
                <input
                  className=""
                  type="text"
                  name="image"
                  id="image_link"
                  onChange={this.inputChange}
                />
              </div>
            </div>
            <div className="row">
              <button
                className="btn waves-effect waves-light green"
                onClick={this.createMember.bind(this)}
                type="button"
              >
                Submit
                <i className="material-icons right">send</i>
              </button>
              <button className="btn waves-effect waves-light red" type="reset">
                Reset
                <i className="material-icons right">undo</i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Member;
