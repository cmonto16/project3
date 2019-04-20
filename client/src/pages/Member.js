import React, { Component } from "react";

class Member extends Component {
    constructor () {
        super();
        this.state = {
            firstName : '',
            lastName : '',
            member_number : '',
            data_approved : '',
            nickname: '',
            image_link: ''
        };
    this.inputChange = this.inputChange.bind(this);
    }
    inputChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    render() {
        
        return (
            <div className="container">
                <div className="row">
                    <h1>Input new member data here</h1>
                    <form className="col s12">
                        <div className="row">
                            <div className="col s6 input-field">
                                <label htmlFor="fname">First Name</label>
                                <input className="" type="text" name="firstName" id="fname" onChange={this.inputChange}/>
                            </div>
                            <div className="col s6 input-field">
                                <label htmlFor="lname">Last Name</label>
                                <input className="" type="text" name="lastName" id="lname" onChange={this.inputChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s6 input-field">
                                <label htmlFor="member_num">Member#</label>
                                <input className="" type="number" name="member_number" id="member_num" onChange={this.inputChange} />
                            </div>
                            <div className="col s6 input-field">
                                <label htmlFor="member_date">Date Approved</label>
                                <input className="" type="text" name="data_approved" id="member_date" onChange={this.inputChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s6 input-field">
                                <label htmlFor="nickname">Nickname</label>
                                <input className="" type="text" name="nickname" id="nickname" onChange={this.inputChange} />
                            </div>
                            <div className="col s6 input-field">
                                <label htmlFor="image_link">Link to Profile Image</label>
                                <input className="" type="text" name="image_link" id="image_link" onChange={this.inputChange} />
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

export default Member;