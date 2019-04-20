import React, { Component } from "react";
import members from "../members.json";
import AttendCard from "../components/AttendCard";
import './pages.css';

class Event extends Component {
    constructor() {
        super();
        this.state = {
            list: members,
            event_name: '',
            photo_link: '',
            address: '',
            city: '',
            state: '',
            objective: '',
            reporting_member: '',
            report: '',
            attendedList: []
        }
        this.inputChange = this.inputChange.bind(this);
    }
    inputChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    markPresent = (id) => {
        this.state.list.map(member => {
            if (id === member.member_number) {
                const attendee = {
                    nickname: member.nickname,
                    member_number: member.member_number,
                    hours: 0,
                    hasBeenClicked: true
                }
                console.log(attendee);
                this.setState({attendedList: [...this.state.attendedList,{attendee}]});
                
            }
            return member;
        });
        console.log('test');
    }
    render() {
        const roster = this.state.list;
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
                            <h5 id="event_instructions">Click on the member's name or portrait to select, then log their hours</h5>
                            {roster.map(data => (
                                <AttendCard
                                    member_number = {data.member_number}
                                    key = {data.member_number}
                                    nickname = {data.nickname}
                                    image = {data.image}
                                    markPresent = {this.markPresent}
                                />
                            ))}
                        </div>
                        <div className="row">
                            <button className="btn waves-effect waves-light green" type="submit">Submit
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