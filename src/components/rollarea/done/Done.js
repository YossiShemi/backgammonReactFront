import React, { Component } from 'react';
import './Done.css';

export class Done extends Component {
    render() {
        return (
            <div className="done" onClick={this.props.changePlayer}>
                <h6 className="doneText">Done</h6>
            </div>
        )
    }
}

export default Done
