import React, { Component } from 'react';
import './Panel.css';

export class Panel extends Component {
    
    attributes=()=>{
        let stl= 'checkersPlace '+this.props.down;
        let action = null;
        let panelCanRecieve= " ";
        
        if (this.props.canMove){
            stl+=' moveable';
            action= this.props.canMove;
        }
        if (this.props.canReceive){
            stl+=' reciveable';
            panelCanRecieve+=' reciveable';
            action= this.props.canReceive;
        }
        return {stl:stl, action:action,panelCanRecieve:panelCanRecieve };

    }
    render() {
        return (
            <div className="panel">
                <div className={this.props.color+'Left'+this.props.dir+this.attributes().panelCanRecieve} onClick={this.attributes().action}></div>
                <div className={this.props.color+'Right'+this.props.dir+this.attributes().panelCanRecieve} onClick={this.attributes().action}></div>
                <div className={this.attributes().stl} onClick={this.attributes().action}> 
                {this.props.children}
                </div>
                
            </div>
        )
    }
}

export default Panel
