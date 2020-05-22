import React, { Component } from 'react';
import './StatusBar.css';
import Checker from'../checker/Checker';

export class StatusBar extends Component {
  
    //Calculate score
     calculateScore = () => {

        let scoreP1 = 0;
        let scoreP2 = 0;

        this.props.points.map((point, index) => {

            if (point.player) { //Check if the point belongs to a player
                if (point.player === 1) { 
                    scoreP1 += (24 - index) * point.checkers
                } else { 
                    scoreP2 += (index + 1) * point.checkers
                }
            }
            return false;
        });

        //Score from jail
        if (this.props.jail.player1) {
            scoreP1 += 25 * this.props.jail.player1;
        }
        if (this.props.jail.player2) {
            scoreP2 += 25 * this.props.jail.player2;
        }

        return { 'P1': scoreP1, 'P2': scoreP2 };
    }


  
    render() {
        return (
            <div className="statusBar">
               
               

                <div className="mainHeader">
                    <div className="barPlayerStatus"> 
                    <div className="barPlayerTitle">Player 1</div>
                    <div className="barChecker"><Checker player="player1"/></div>
                    <div className="barPoints">{this.calculateScore().P1}</div>
                    </div>

                    <div className="barTitle"> 
                        <span>Game Bar</span>
                    </div>

                    <div className="barPlayerStatus"> 
                    <div className="barPlayerTitle">Player 2</div>
                    <div className="barChecker"><Checker player="player2"/></div>
                    <div className="barPoints">{this.calculateScore().P2}</div>
                    </div>
                </div>
               
            </div>
        )
    }
}



export default StatusBar
