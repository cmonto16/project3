import React, { Component } from "react";

class Member extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1>Input new member data here</h1>
                    <form className="col s12">
                        <div className="row">
                            <div className="col s6 input-field">
                                <label for="fname">First Name</label>
                                <input className="" type="text" name="fname" id="fname" />
                            </div>
                            <div className="col s6 input-field">
                                <label for="lname">Last Name</label>
                                <input className="" type="text" name="lname" id="lname" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s6 input-field">
                                <label for="member_num">Member#</label>
                                <input className="" type="number" name="member_num" id="member_num" />
                            </div>
                            <div className="col s6 input-field">
                                <label for="member_date">Date Approved</label>
                                <input className="" type="text" name="member_date" id="member_date" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s6 input-field">
                                <label for="nickname">Nickname</label>
                                <input className="" type="text" name="nickname" id="nickname" />
                            </div>
                            <div className="col s6 input-field">
                                <label for="image_link">Link to Profile Image</label>
                                <input className="" type="text" name="image_link" id="image_link" />
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