import React, { Component } from 'react';
import './Checker.css';

export class checker extends Component {
    render() {
        return (
        <div className={this.props.player}> 
        <div className="amount">{this.props.count}</div>
        </div>

                
        )
    }
}

export default checker
