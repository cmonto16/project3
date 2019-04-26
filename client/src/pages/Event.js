import React, { Component } from "react";
//import members from "../members.json";
import AttendCard from "../components/AttendCard";
import './pages.css';
import API from "../utils/API";
import axios from "axios";

class Event extends Component {
    constructor() {
        super();
        this.state = {
            event_name: '',
            photo_link: '',
            address: '',
            city: '',
            state: '',
            objective: '',
            reporting_member: '',
            report: '',
            attendedList: [],
            users:[]
        }
        this.inputChange = this.inputChange.bind(this);
    }
    componentDidMount() {
        this.loadUsers();
      }
    
      loadUsers = () => {
        API.getUsers()
          .then(res => this.setState({ users: res.data }))
          .catch(err => console.log(err));
      };

    
    inputChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    
    toggleCard = (member) => {
        if (this.state.attendedList.length === 0) {
            this.setState({
                attendedList: [...this.state.attendedList,{nickname: member.nickname, member_number: member.member_number, hours: 0}]
            });
        } else {
            this.state.attendedList.map(data => {
                if (data.member_number === member.member_number) {
                    var array = this.state.attendedList;
                    var index = array.indexOf(data);
                    array.splice(index,1)
                    this.setState({
                        attendedList: array
                    });
                    return;
                } else {
                    this.setState({
                        attendedList: [...this.state.attendedList,{nickname: member.nickname, member_number: member.member_number, hours: 0}]
                    });                }
            });
        }
    }
    hourChange = (id_num,value) => {
        this.state.attendedList.map(data => {
            if (data.member_number === id_num) {
                var array = this.state.attendedList;
                var index = array.indexOf(data);
                let copy = JSON.parse(JSON.stringify(this.state.attendedList));
                value = Number.parseInt(value, 10);
                copy[index].hours = value
                this.setState({
                    attendedList: copy
                });
            }
        });
    }
    submitEvent (e) {
        e.preventDefault();
        const eventData = {
            address: this.state.address,
            members: this.state.attendedList,
            city: this.state.city,
            name: this.state.event_name,
            objective: this.state.objective,
            photo_link: this.state.photo_link,
            mission_report: this.state.report,
            reporting_member: this.state.reporting_member,
            state: this.state.state
        }
        console.log(eventData);
        const { getAccessToken } = this.props.auth;
        const headers = { Authorization: `Bearer ${getAccessToken()}` };
        axios
          .post(`/api/events`, eventData, { headers })
          .then(response => this.setState({ message: "Success!" }))
          .catch(error =>
            this.setState({ message: error.message || "Failed to save." })
          );
    }

    render() {
        const roster = this.state.users;
        return (
            <div className="container">
                <div className="row">
                    <h1>Input new event data here</h1>
                    <form className="col s12">
                        <div className="row">
                            <div className="col s6 input-field">
                                <label htmlFor="event_name">Event Name</label>
                                <input className="" type="text" name="event_name" id="event_name" onChange={this.inputChange} />
                            </div>
                            <div className="col s6 input-field">
                                <label htmlFor="photo_link">Photo Link</label>
                                <input className="" type="text" name="photo_link" id="photo_link" onChange={this.inputChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4 input-field">
                                <label htmlFor="address">Address</label>
                                <input className="" type="text" name="address" id="address" onChange={this.inputChange} />
                            </div>
                            <div className="col s4 input-field">
                                <label htmlFor="city">City</label>
                                <input className="" type="text" name="city" id="city" onChange={this.inputChange} />
                            </div>
                            <div className="col s4 input-field">
                                <label htmlFor="state">State</label>
                                <input className="" type="text" name="state" id="state" onChange={this.inputChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s6 input-field">
                                <label htmlFor="objective">Mission Objective</label>
                                <input className="" type="text" name="objective" id="objective" onChange={this.inputChange} />
                            </div>
                            <div className="col s6 input-field">
                                <label htmlFor="reporting_member">Reporting Member</label>
                                <input className="" type="text" name="reporting_member" id="reporting_member" onChange={this.inputChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">mode_edit</i>
                                <textarea className="materialize-textarea" id="report" name="report" onChange={this.inputChange} ></textarea>
                                <label htmlFor="report">Mission Report</label>
                            </div>
                        </div>
                        <div className="row">
                            <h3>Members in attendance</h3>
                            <h5 id="event_instructions">Click on the member's portrait to toggle them, then log their hours</h5>
                            {roster.map(data => {
                                let record = this.state.attendedList.find(e => {return data.member_number === e.member_number});
                                let clicked = record != null;
                                return (
                                <AttendCard
                                    member_number = {data.member_number}
                                    key = {data.member_number}
                                    nickname = {data.nickname}
                                    image = {data.image}
                                    toggleCard = {this.toggleCard}
                                    clicked = {clicked}
                                    hourChange = {this.hourChange}
                                    hours = {clicked ? record.hours : 0}
                                />
                            )})}
                        </div>
                        <div className="row">
                        <button className="btn waves-effect waves-light green" type="submit" onClick = {this.submitEvent.bind(this)}>Submit
	                        <i className="material-icons right">send</i>
                             </button>
                            <button className="btn waves-effect waves-light red" type="reset">Reset
                                <i className="material-icons right">undo</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Event;