import React, { Component } from 'react';
import './RollArea.css';
import './dice/Dice';
import Dice from './dice/Dice';
import Done from './done/Done';
import { Bounce } from "react-reveal";


export class RollArea extends Component {
 
    render() {
     
        if( this.props.playerdone===true )
        return (
            <div className="rollarea">
             <button className="button" onClick={this.props.rolldices}>Roll Dices</button>
            </div>
        ) 

        if (this.props.dices[0]!==0)
        return (
            <div className="rollarea">
                <Dice number={this.props.dices[0]} volume={this.props.volume}/>
                <Dice number={this.props.dices[1]}  volume={this.props.volume}/>
            </div>)

        if (this.props.dices[0]===0){
            return (
                <Bounce botton duration={1500} distance="20px">
                <Done changePlayer={this.props.changePlayer}/>
                </Bounce>

            )

        
        }

    }
}

export default RollArea
