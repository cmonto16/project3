import React from "react";
import Profile from "../components/Profile";
// import members from "../members.json";
import API from "../utils/API";

class Roster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           users:[]
        }
    }
    componentDidMount() {
        this.loadUsers();
      }
    
      loadUsers = () => {
        API.getUsers()
          .then(res => this.setState({ users: res.data }))
          .catch(err => console.log(err));
      };
    
    render() {
        const roster = this.state.users;
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