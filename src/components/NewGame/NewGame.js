import React, { Component } from 'react';
import './NewGame.css';

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
            <div className="winner" >
                <div className="content">
                {this.message()}
                </div>
                <div className="startNewGame" onClick={this.props.setupNewGameHandler} >
                Click here to start new game
                </div>
            </div>
        );}


    }
}

export default NewGame
