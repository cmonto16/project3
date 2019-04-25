import React from "react";
import "./style.css";
import PropTypes from 'prop-types';

class AttendCard extends React.Component {
    state = {
        hours: ''
    }
    toggleGreen = () => {
        if (this.props.clicked === true) {
            return '#047008'
        } else if (this.props.clicked === false) {
            return '#726d6d'
        }
    }
    toggleHours = () => {
        if (this.props.clicked === true) {
            return 'block'
        } else if (this.props.clicked === false) {
            return 'none'
        }
    }
    inputChange = (event) => {
        this.setState({
            hours: event.target.value
        })
    }

    render(){
        return  (
            <div className="col s12 m6 l4 attend-card" 
                data-id={this.props.member_number} >   
                <div className="card horizontal">
                    <div className="card-image" onClick={() => {this.props.toggleCard(this.props)}}>
                        <img src={this.props.image} alt={this.props.nickname}/>
                    </div>
                    <div className="card-stacked" style={{background: this.toggleGreen()}}>
                        <div className="card-content">
                            <p>{this.props.nickname}</p>
                        </div>
                        <div className="card-action" style={{display: this.toggleHours()}}>
                            <label>Hours:</label>
                            <input className="" type="number" name="hours" id="hours_worked" value = {this.props.hours} onChange={() => {this.props.hourChange(this.props.member_number,this.value)}}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
AttendCard.propTypes = {
    clicked: PropTypes.bool
};
export default AttendCard;