import React, { Component } from "react";
import events from "../events.json";
class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: events
        }
    }
    render() {
        const activities = this.state.list;
        console.log(activities[0].members[0].nickname);
        return (
            <div className="container">
                <h1>All Events Attended</h1>
                {activities.map(data =>(
                    <div className="row">
                        <div className="card">
                            <div className="card-content">
                                <h2>{data.name}</h2>
                                <h5>{data.address}</h5>
                                <h5>{data.city}, {data.state}</h5>
                                <br />
                                <b>Objective: </b><span>{data.objective}</span>
                                <br /><br />
                                <b>Report: </b><span>{data.mission_report}</span>
                                <br /><br />
                                <b>Member submitting report: </b><span>{data.reporting_member}</span>
                                <br /><br />
                                <b>Attended by: </b>
                                {data.members.map(value => 
                                <span>{value.nickname}</span>).reduce(
                                (prev, curr) => [prev, ', ', curr])}
                            </div>
                            <div className="card-image">
                                <img alt={data.name} src={data.photo_link} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default History;