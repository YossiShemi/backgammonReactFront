import React, { Component } from 'react';
import './OutChecker.css';

export class OutChecker extends Component {
    render() {
        return (
            <div className={this.props.player}></div>
        )
    }
}

export default OutChecker
