import React, { Component } from 'react';
import './RollArea.css';
import './dice/Dice';
import Dice from './dice/Dice';

export class RollArea extends Component {
 
    render() {
        if (this.props.dices[0]!==0)
            return (
                <div className="rollarea">
                    <Dice number={this.props.dices[0]} volume={this.props.volume}/>
                    <Dice number={this.props.dices[1]}  volume={this.props.volume}/>
                </div>)

        return (
            <div className="rollarea">
             <button className="button" onClick={this.props.rolldices}>Roll Dices</button>
            </div>
        ) 
    }
}

export default RollArea
