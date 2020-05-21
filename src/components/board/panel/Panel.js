import React, { Component } from 'react';
import './Panel.css';

export class Panel extends Component {
    
    attributes=()=>{
        let stl= 'checkersPlace '+this.props.down;// checkers
        let action = null;
        let panelCanRecieve;
        
        if (this.props.canMove){
            stl+=' moveable';
            action= this.props.canMove;
        }
        if (this.props.canReceive){
            stl+=' reciveable';
            action= this.props.canReceive;

            panelCanRecieve= this.props.dir==="up"? "UpRecieve":"BottomRecieve" 
            
        }

        return {stl:stl, action:action,panelCanRecieve:panelCanRecieve };

    }

    playAudio=()=> {
        const audio = new Audio();
        audio.src = require('../../../sounds/panel.mp3');
        audio.volume=this.props.volume;
        audio.play();
   
      }
     
    actions=()=>{
        this.playAudio();
        if (this.attributes().action){
        this.attributes().action();}
    }

    
    render() {
        return (
            <div className="panel">

                <div className={this.props.color+'Left'+this.props.dir+    ' left'+this.attributes().panelCanRecieve} onClick={()=>{this.actions()}}></div>
                <div className={this.props.color+'Right'+this.props.dir+   ' right'+this.attributes().panelCanRecieve} onClick={()=>{this.actions()}}></div>
                <div className={this.attributes().stl} onClick={()=>{this.actions()}}> 
                {this.props.children}
                </div>

    
            </div>
        )
    }
}

export default Panel
