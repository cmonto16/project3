import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import API from "../utils/API";
import { Link } from "react-router-dom";

class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editId: props.id,
      form: {
        first_name: "",
        last_name: "",
        member_number: 0,
        approval_date: new Date(),
        nickname: "",
        hours: 0,
        image: ""
      }
    };
    this.inputChange = this.inputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  updateMember() {
    const { getAccessToken } = this.props.auth;
    const headers = { Authorization: `Bearer ${getAccessToken()}` };
    this.state.form.member_number = parseInt(this.state.form.member_number);
    axios
      .put(`/api/users/${this.state.editId}`, this.state.form, { headers })
      .then(response => this.setState({ message: "Update successful!" }))
      .catch(error =>
        this.setState({ message: error.message || "Failed to update." })
      );
  }

  inputChange(event) {
    this.setState({
      form: { ...this.state.form, [event.target.name]: event.target.value }
    });
  }

  handleChange(date) {
    this.setState({
      form: { ...this.state.form, approval_date: date }
    });
  }

  loadUser() {
    if (!this.state.editId) { return; }
    API.getUser(this.state.editId)
      .then(res => {
        var dateObj = new Date(res.data.approval_date);
        res.data.approval_date = dateObj;
        this.setState({ form: res.data })
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadUser();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.message && <h2>{this.state.message}</h2>}
          {this.state.editId && <h1>Edit member data here</h1> || <h1>Input new member data here</h1>}
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
                  value={this.state.form.first_name}
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
                  value={this.state.form.last_name}
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
                  value={this.state.form.member_number}
                />
              </div>
              <div className="col s6 input-field">
                <label htmlFor="member_date"></label>
               <DatePicker
               className=""
               name="approval_date"
               id="member_date"
               placeholderText="Date Approved"
               selected={this.state.form.approval_date}
               onChange={this.handleChange}
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
                  value={this.state.form.nickname}
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
                  value={this.state.form.image}
                />
              </div>
            </div>
            {!this.state.editId && 
            <div className="row">
              <button
                className="btn waves-effect waves-light green"
                onClick={this.createMember.bind(this)}
                type="button"
              >
                Save
                <i className="material-icons right">send</i>
              </button>
              <button className="btn waves-effect waves-light red" type="reset">
                Reset
                <i className="material-icons right">undo</i>
              </button>
            </div>
            }
            {this.state.editId && 
            <div className="row">
              <button
                className="btn waves-effect waves-light green"
                onClick={this.updateMember.bind(this)}
                type="button"
              >
                Update
                <i className="material-icons right">send</i>
              </button>
              <Link to="/roster"><button className="btn waves-effect waves-light red" type="reset">
                Cancel
                <i className="material-icons right">undo</i>
              </button>
              </Link>
            </div>
            }
          </form>
        </div>
      </div>
    );
  }
}

export default Member;
