import React, { Component } from "react";

class Event extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1>Input new event data here</h1>
                    <form className="col s12">
                        <div className="row">
                            <div className="col s6 input-field">
                                <label for="event_name">Event Name</label>
                                <input className="" type="text" name="event_name" id="event_name" />
                            </div>
                            <div className="col s6 input-field">
                                <label for="photo_link">Photo Link</label>
                                <input className="" type="text" name="photo_link" id="photo_link" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4 input-field">
                                <label for="address">Address</label>
                                <input className="" type="text" name="address" id="address" />
                            </div>
                            <div className="col s4 input-field">
                                <label for="city">City</label>
                                <input className="" type="text" name="city" id="city" />
                            </div>
                            <div className="col s4 input-field">
                                <label for="state">State</label>
                                <input className="" type="text" name="state" id="state" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s6 input-field">
                                <label for="objective">Mission Objective</label>
                                <input className="" type="text" name="objective" id="objective" />
                            </div>
                            <div className="col s6 input-field">
                                <label for="reporting_member">Reporting Member</label>
                                <input className="" type="text" name="reporting_member" id="reporting_member" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i class="material-icons prefix">mode_edit</i>
                                <textarea className="materialize-textarea" id="report" name="report"></textarea>
                                <label for="report">Mission Report</label>
                            </div>
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