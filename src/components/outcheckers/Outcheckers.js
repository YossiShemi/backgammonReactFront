import React, { Component } from 'react';
import './Outcheckers.css';
import DisplayCheckers from '../displayCheckers/DisplayCheckers';

export class outcheckers extends Component {
   
  attributes=()=>{
    let classnamep1= "outup ";
    let classnamep2= "outbottom ";
    let actionP1=null;
    let actionP2=null;

    if (this.props.out.p1CanReceive){
        classnamep1+=" recieveableOut";
        actionP1=this.props.out.p1CanReceive;
      }
    if (this.props.out.p2CanReceive){
      classnamep2+=" recieveableOut";
        actionP2=this.props.out.p2CanReceive;
      }

      return {classnamep1: classnamep1,actionP1: actionP1,
        classnamep2: classnamep2,actionP2: actionP2, }

  }

  playAudio=()=> {
    const audioEl = document.getElementsByClassName("outcheckersSound")[0];
    audioEl.play();
  }
 

  actions=()=>{
    if (this.attributes().actionP1){
    this.attributes().actionP1();
    this.playAudio();
    }
    if (this.attributes().actionP2){
      this.attributes().actionP2();
      this.playAudio();
      }
}





  render() {
        return (
            <div className="outcheckers">
                <div className={this.attributes().classnamep1} onClick={()=>{this.actions()}}>
                  <h1>Player 1</h1>
                  {DisplayCheckers("player1out", this.props.out.player1,2)}
                </div>

                <div className="undo" onClick={this.props.undo}> Undo </div>

                <div className={this.attributes().classnamep2} onClick={()=>{this.actions()}}>
                  <h1 >Player 2</h1>
                  {DisplayCheckers("player2out", this.props.out.player2,2)}
                </div>
           
                <audio className="outcheckersSound">
                 <source src={require('../../sounds/outcheckers.mp3')}></source>
                </audio>

           
           
            </div>
        )
    }
}

export default outcheckers
