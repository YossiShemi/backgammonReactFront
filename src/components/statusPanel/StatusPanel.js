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
            let player= this.props.p1IsNext? "Player 2 roll the dices ": "Player 1 roll the dices";
            status=`\u00A0 No moves avaliable now! \u00A0\u00A0 Dices: (${this.props.diceNoMove[0]},${this.props.diceNoMove[1]}) \u00A0\u00A0 ${player}`;
        }

    
        return status;
       }


   
    render() {
        return (
            <div className="StatusPanel">
                <i class="fas fa-dice"></i>
            {this.getGameStatus()} 
            <i class="fas fa-dice"></i>
          </div>
        )
    }
}


export default StatusPanel
