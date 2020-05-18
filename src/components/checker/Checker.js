import React, { Component } from 'react';
import './Checker.css';

export class checker extends Component {
    
    getStyle=()=>{
        let clas=this.props.player;
        if(this.props.canMove===1){
            clas+=" canMove";
        }        
        return clas;
    }
    
    render() {
        return (
        <div className={this.getStyle()}> 
        <div className="amount">{this.props.count}</div>
        </div>

                
        )
    }
}

export default checker
