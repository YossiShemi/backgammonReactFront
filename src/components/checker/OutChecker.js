import React, { Component } from 'react';
import './OutChecker.css';

export class OutChecker extends Component {

      
    getStyle=()=>{
        let clas=this.props.player;
        if(this.props.canMove===1){
            clas+=" canMove";
        }
        
        return clas;
    }

    render() {
        return (
            <div className={this.getStyle()}></div>
        )
    }
}

export default OutChecker
