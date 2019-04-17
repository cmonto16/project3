import React from "react";
import "./style.css";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: "false"
        };
    }
    render(){
    return <div className="col l3 s6" data-id={this.props.member_number}>
                <div className="card">
                    <div className="card-image">
                        <img alt={this.props.nickname} src={this.props.image} />
                    </div>
                    <span className="card-title">{this.props.firstName} {this.props.lastName}</span>
                    <div className="card-content">
                        <h5>{this.props.nickname}</h5>
                        <b>Data Approved: </b> <span>{this.props.date}</span>
                        <br />
                        <b>Member Number: </b> <span>{this.props.member_number}</span>
                        <br />
                        <b>Total Hours: </b> <span>{this.props.hours}</span>
                    </div>
                </div>
            </div>
    }
}
export default Profile;