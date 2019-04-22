import React from "react";
import "./style.css";

class AttendCard extends React.Component {
    state = {
        clicked: false,
        hours: 0
    };
    memberClicked = () => {
        if(this.state.clicked === false) {
            console.log('you have clicked it');
            this.setState({clicked: true});
        } else if (this.state.clicked === true){
            console.log('you have unclicked it');
            this.setState({clicked: false, hours: 0});
            this.hourInput.value.reset();
        }
    }
    clickedGreen = () => {
        if (this.state.clicked === true) {
            return '#3cf42c'
        } else if (this.state.clicked === false) {
            return '#726d6d'
        }
    }
    toggleHours = () => {
        if (this.state.clicked === true) {
            return 'block'
        } else if (this.state.clicked === false) {
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
                data-id={this.props.member_number} 
                onClick={(event) => {this.props.markPresent.bind(this,this.props.member_number);}}
            >   
                <div className="card horizontal">
                    <div className="card-image" onClick={(event) => this.memberClicked()}>
                        <img src={this.props.image} alt={this.props.nickname}/>
                    </div>
                    <div className="card-stacked" style={{background: this.clickedGreen()}}>
                        <div className="card-content" onClick={(event) => this.memberClicked()}>
                            <p>{this.props.nickname}</p>
                        </div>
                        <div className="card-action" style={{display: this.toggleHours()}}>
                            <label>Hours:</label>
                            <input className="" type="text" name="hours" id="hours_worked" onChange={this.inputChange} ref={input => {this.hourInput = input;}} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AttendCard;