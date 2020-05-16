import React, { Component } from 'react';
import './Dice.css';


export class Dice extends Component {

    state={
        dots: Array(9).fill(null)
    }

    fillDots=()=>{
        const {dots}= this.state;
        switch (this.props.number) {
            case 1:
                dots[4] = true;
                break;
            case 2:
                dots[0] = true;
                dots[8] = true;
                break;
            case 3:
                dots[0] = true;
                dots[4] = true;
                dots[8] = true;
                break;
            case 4:
                dots[0] = true;
                dots[2] = true;
                dots[6] = true;
                dots[8] = true;
                break;
            case 5:
                dots[0] = true;
                dots[2] = true;
                dots[4] = true;
                dots[6] = true;
                dots[8] = true;
                break;
            case 6:
                dots[0] = true;
                dots[2] = true;
                dots[3] = true;
                dots[5] = true;
                dots[6] = true;
                dots[8] = true;
                break;
            default:
                break;
        }
    }
    
    displayDots=()=>{
    this.fillDots();
    return this.state.dots.map(dot=>
        (dot===true)  ? <div className="dot" key={Math.random()*10000000} ></div> : <div key={Math.random()*10000000}></div>);
        
    }
    
    render() {
        return (
            <div className="dice">
            {this.displayDots()}
            </div>
        )
    }
}

export default Dice
