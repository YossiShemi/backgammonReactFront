import React, { Component } from 'react';
import './StatusPanel.css';


export class StatusPanel extends Component {
   
    getGameStatus=()=>{

        let status= this.props.p1IsNext? "Player 1 turn": "Player 2 turn";
    
        if (this.props.gameStatus===80)
        status="Welcome!"
        
        if (this.props.gameStatus===60 || this.props.gameStatus===70){
            this.props.gameStatus===60? 
            status="Player 1 Win !!!"
            :
            status="Player 2 Win !!!"
            }
         
        if (this.props.gameStatus===50){
            let player= this.props.p1IsNext? "Player 2 turn": "Player 1 turn";
            status="No moves avaliable! "+" --- Dices: ("+this.props.diceNoMove[0]+","+this.props.diceNoMove[1]+") ---    "+player;
        }

    
        return status;
       }


   
    render() {
        return (
            <div className="StatusPanel">
            {this.getGameStatus()} 
          </div>
        )
    }
}


export default StatusPanel
