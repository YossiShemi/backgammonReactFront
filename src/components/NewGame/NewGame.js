import React, { Component } from 'react';
import './NewGame.css';
import Confetti from './Confetti';

export class NewGame extends Component {

    message=()=>{
    let content=" ";

    if(this.props.gameStatus===80){
        content="Welcome buddy  !"
    }
    else{
     content=   this.props.gameStatus===60?
    <div> Player 1 <br/>Is The <br/> Winner </div>
    :
    <div> Player 2 <br/>Is The <br/> Winner </div>
    }

    return content;
    }

    playAudio=()=> {
        const audioEl = document.getElementsByClassName("winnerSound")[0];
        audioEl.play();
      }

    componentDidMount(){
        if (this.props.gameStatus!==80)
        this.playAudio();
    }



    render() {
       if (this.props.gameStatus===80){
        return (
            <div className="newGame" >
            <div className="content">
            {this.message()}
            </div>
            <div className="startNewGame" onClick={this.props.setupNewGameHandler} >
            Click here to start new game
            </div>
        </div>);
       }

       else{
        return (
            <React.Fragment>
            <Confetti/>
            <div className="winner" >
                <div className="content">
                {this.message()}
                </div>
                <div className="startNewGame" onClick={this.props.setupNewGameHandler} >
                Click here to start new game
                </div>

                <audio className="winnerSound">
                 <source src={require('../../sounds/winner.mp3')}></source>
                </audio>
            </div>
            </React.Fragment>
            
        );}


    }
}

export default NewGame
