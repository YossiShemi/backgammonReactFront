import React, { Component } from 'react';
import './NewGame.css';
import Confetti from './Confetti';
import Zoom from 'react-reveal/Zoom';


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
        const audio = new Audio();
        audio.src = require('../../sounds/winner.mp3');
        audio.volume=this.props.volume;
        audio.play();
   
      }
     

    componentDidMount(){
        if (this.props.gameStatus!==80)
        this.playAudio();
    }



    render() {
       if (this.props.gameStatus===80){
        return (
            <Zoom>
            <div className="newGame" >
            <div className="content">
            {this.message()}
            </div>
            <div className="startNewGame" onClick={this.props.setupNewGameHandler} >
            Click here to start new game
            </div>
            </div>
            </Zoom>

        );
       }

       else{
        return (
            <React.Fragment>
            <Confetti/>
            <Zoom>
                <div className="winner" >
                <div className="content">
                {this.message()}
                </div>
                <div className="startNewGame" onClick={this.props.setupNewGameHandler} >
                Click here to start new game
                </div>
                </div>
            </Zoom>

            </React.Fragment>
            
        );}


    }
}

export default NewGame
