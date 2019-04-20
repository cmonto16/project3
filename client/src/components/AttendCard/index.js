import React from "react";
import "./style.css";

class Profile extends React.Component {
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
            this.setState({clicked: false});
        }
    }
    clickedGreen = () => {
        if (this.state.clicked === true) {
            return 'green'
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
                            <input className="" type="text" name="hours" id="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;