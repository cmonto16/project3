import React from "react";
import Profile from "../components/Profile";
import members from "../members.json";

class Roster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: members
        }
    }
    
    render() {
        const roster = this.state.list;
        return (
            <div className="container" id="roster">
                <h1>View roster here</h1>
                <div className="row">
                    {roster.map(data => (
                        <Profile
                        firstName = {data.first_name}
                        lastName = {data.last_name}
                        member_number = {data.member_number}
                        key = {data.member_number}
                        date = {data.approval_date}
                        nickname = {data.nickname}
                        image = {data.image}
                        hours = {data.hours}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Roster;